//Libs
import ReactDOM from 'react-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// CSS
import './css/index.css';

// Routes
import routes from './router';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
