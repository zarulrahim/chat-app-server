const express = require("express");
const app = express();
const { Socket } = require('./socket');
const { Api } = require('./api');

// Socket.io
Socket(express, app);

// Api
Api(express, app);

app.set('port', 5000);
app.listen(app.get('port'), () => {
  console.log('ExpressJS server is running on port', app.get('port'));
});

