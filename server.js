var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');
var ora = require('ora');
var path = require('path');
var stormpath = require('express-stormpath');
var webpack = require('webpack');


var config = require('./webpack.config');

var port = process.env.PORT || 3000;

const mysql = require('mysql');

var app = express();
var compiler = webpack(config);

var spinner = ora({
  interval: 100
});

function failAndExit(err) {
  spinner.fail();
  console.error(err.stack);
  process.exit(1);
}

app.use(morgan('combined'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/css', express.static(__dirname + '/src/css'));

app.use(stormpath.init(app, {
  web: {
    produces: ['application/json'],
    me: {
      expand: {
        customData: true,
        groups: true
      }
    }
  },
  preRegistrationHandler: function (formData, req, res, next) {
    if (!(formData.email.includes("@stud.ntnu.no") || formData.email.includes("@ntnu.no"))) {
      return next(new Error('You have to register with your \'@stud.ntnu.no\' or \'@ntnu.no\' email.'));
    }

    next();
  },
  postRegistrationHandler: function (account, req, res, next) {
    var lecturerHref = 'https://api.stormpath.com/v1/groups/6OkoIxnLjHPsYIdGZWVUG8';
    var studentHref = 'https://api.stormpath.com/v1/groups/5n0iOS2EJpeQ1sqioFM8cq';
    if(account.email.includes("@stud.ntnu.no")) {
      account.addToGroup(studentHref, function(err, membership) {
                  console.log(membership);
              });
    } else if (account.email.includes("@ntnu.no")) {
      account.addToGroup(lecturerHref, function(err, membership) {
                  console.log(membership);
              });
    } else {
      console.log("Not valid email domain");
    }

    const username = account.email;
    connection.query("INSERT INTO users (username) VALUES ('" + username + "')", function(error, result) {
      if(!!error) {
        console.log("Error");
      } else {
        console.log(result);
      }
    });
    next();
  }
}));

var connection = mysql.createConnection({
  host     : 'mysql.stud.ntnu.no',
  user     : 'larssne_edubot',
  password : '54321',
  database : 'larssne_edubot',
  debug    : true
});

app.post('/me', stormpath.authenticationRequired, bodyParser.json(), function (req, res) {
  function writeError(message) {
    res.status(400);
    res.json({ message: message, status: 400 });
    res.end();
  }

  function saveAccount() {
    console.log(req.body);
    req.user.givenName = req.body.givenName;
    req.user.surname = req.body.surname;
    req.user.email = req.body.email;

    req.user.save(function (err) {
      if (err) {
        return writeError(err.userMessage || err.message);
      }
      res.end();
    });
  }

  if (req.body.password) {
    var application = req.app.get('stormpathApplication');

    application.authenticateAccount({
      username: req.user.username,
      password: req.body.existingPassword
    }, function (err) {
      if (err) {
        return writeError('The existing password that you entered was incorrect.');
      }

      req.user.password = req.body.password;

      saveAccount();
    });
  } else {
    saveAccount();
  }
});


app.get('/getCourses/:username', function(req, res) {
  var username = req.params.username;
  connection.query("SELECT courses FROM users WHERE username = '" + username + "'", function(error, rows, fields) {
    if(!!error) {
      console.log("Error");
    } else {
      res.send(rows);
    }
  });
});

app.get('/getFeedback/', function(req, res) {
  connection.query("SELECT * FROM feedback", function(error, rows, fields) {
    if(!!error) {
      console.log("Error");
    } else {
      res.send(rows);
    }
  });
});



app.post('/updateCourses/:username/:course', function(req, res) {
  var username = req.params.username;
  var course = req.params.course == 'Empty' ? '' : req.params.course;
  connection.query("UPDATE users SET courses = '" + course + "'" + " WHERE username = '" + username + "'", function(error, result) {
    if(!!error) {
      console.log("Error");
    } else {
      res.send(result);
    }
  });
});

app.post('/sendFeedback/:username/:subject/:theme/:grade/:pFeedback/:nFeedback/', function(req, res) {
  var username = req.params.username;
  var subject = req.params.subject;
  var theme = req.params.theme;
  var grade = req.params.grade;
  var pFeedback = req.params.pFeedback;
  var nFeedback = req.params.nFeedback;
  connection.query("INSERT INTO feedback (user, course, theme, grade, positiveFeedback, negativeFeedback) "
      + "VALUES ('" + username + "','" + subject + "','" + theme + "','" + grade + "','" + pFeedback + "','" + nFeedback + "')", function(error, result) {
    if(!!error) {
      console.log("Error");
    } else {
      res.send(result);
    }
  });
});

app.post('/upvoteFeedback/:username/:feedbackID', function(req,res) {
  var username = req.params.username;
  var feedbackID = req.params.feedbackID;
  connection.query("UPDATE feedback SET upvotes = upvotes + 1, upvoters = CONCAT(upvoters,'" + username + "+')" + " WHERE feedbackID = " + feedbackID + "", function(error, result) {
    if(!!error) {
      console.log("Error");
    } else {
      res.send(result);
    }
  });
});

app.post('/sendQuery/:username/:name/:description/:course', function(req,res) {
  var username = req.params.username;
  var name = req.params.name;
  var description = req.params.description;
  var course = req.params.course;
  connection.query("INSERT INTO query (name, description, course, creator) "
      + "VALUES ('" + name + "','" + description + "','" + course + "','" + username + "')", function(error, result) {
    if(!!error) {
      console.log("Error");
    } else {
      res.send(result);
    }
  });
});

app.post('/sendQueries/:id/:question/:type/:alternatives', function(req,res) {
  var id = req.params.id;
  var question = req.params.question.replace(/QUESTIONMARK/g, '?');
  var type = req.params.type;
  var alternatives = req.params.alternatives  == 'Empty' ? '' : req.params.alternatives;
  connection.query("INSERT INTO queries (queryIDfk, type, question, alternatives) "
      + "VALUES ('" + id + "','" + question + "','" + type + "','" + alternatives + "')", function(error, result) {
    if(!!error) {
      console.log("Error");
    } else {
      res.send(result);
    }
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

spinner.text = 'Starting Dev Sever on port ' + port,
spinner.start();

app.on('error', failAndExit);
app.on('stormpath.error', failAndExit);

app.listen(port, function () {
  spinner.succeed();
  spinner.text = 'Initializing Stormpath';
  spinner.start();
  app.on('stormpath.ready', function () {
    spinner.succeed();
    console.log('\nListening at http://localhost:' + port);
    // Now bring back error logging.
    app.get('stormpathLogger').transports.console.level = 'error';
  });
  connection.connect(function(error) {
    if(!!error) {
      console.log("Error connecting to database");
    }else {
      console.log("Successfully connected to database");
    }
  });

});
