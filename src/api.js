import bodyParser from 'body-parser';
import Express from 'express';
import http from 'http';
import session from 'express-session';

import config from './config';
import indexRoutes from './api/index';

const app = new Express();
const server = new http.Server(app);

app.use(session({
  secret: 'react and redux rule!!!!',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));
app.use(bodyParser.json());

// TODO: Implement actions & socketIO
// see https://github.com/erikras/react-redux-universal-hot-example/blob/master/api/api.js

app.use('/', indexRoutes);

if (config.apiPort) {
  const runnable = app.listen(config.apiPort, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
    console.info('==> 💻  Send requests to http://%s:%s', config.apiHost, config.apiPort);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
