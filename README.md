# Installation Guide

This is an simple installation guide to help you run the project locally on your computer.

## 1. Getting Started

To run this project on your local computer, you will need to have [Node.js][] installed.
The system is also using [mySQLAdmin][] from NTNU to serve the database. To be able to connect to the database when running the project locally, you have to connect to NTNU's servers.

## 2. Installation

Clone this repository, then using a terminal, navigate to the directory and run the following to install dependencies:

```bash
$ npm install
```

## 3. Provide Stormpath Configuration To Your Application
To handle authentication the system is using [Stormpath][].
Therefor you need to provide the **API Key ID**, **API Key Secret**, and **Application Href** to your environment, with one of these strategies:

**Unix Environment Variables:**

```bash
export STORMPATH_CLIENT_APIKEY_ID=1UV54NYI5FOVJ0ZALMDI61H44
export STORMPATH_CLIENT_APIKEY_SECRET=bTBWPPwfSCD1lo+V1JcX5WM9+SP04b3l8wvt66CNWck
export STORMPATH_APPLICATION_HREF=https://api.stormpath.com/v1/applications/1wXstL8o0iF3jRr5Kf3zFk
```

**Windows Environment Variables:**

```bash
set STORMPATH_CLIENT_APIKEY_ID=1UV54NYI5FOVJ0ZALMDI61H44
set STORMPATH_CLIENT_APIKEY_SECRET=bTBWPPwfSCD1lo+V1JcX5WM9+SP04b3l8wvt66CNWck
set STORMPATH_APPLICATION_HREF=https://api.stormpath.com/v1/applications/1wXstL8o0iF3jRr5Kf3zFk
```

**Place them in a file named `stormpath.yml`, in the directory where you run the dev server:**

```yaml
client:
  apiKey:
    id: 1UV54NYI5FOVJ0ZALMDI61H44
    secret: bTBWPPwfSCD1lo+V1JcX5WM9+SP04b3l8wvt66CNWck
application:
  href: https://api.stormpath.com/v1/applications/1wXstL8o0iF3jRr5Kf3zFk
```

## 4. Usage

To start the server, run this command in the folder:

```bash
$ npm start
```

If the server is able to start with your configuration, you will see this in
your terminal:

```bash
Stormpath Ready
Application running at http://localhost:3000
```

The application should now be running in your browser at [http://localhost:3000](http://localhost:3000).

[mySQLAdmin]: https://mysqladmin.it.ntnu.no/
[Node.js]: https://nodejs.org
[Stormpath]: https://stormpath.com
