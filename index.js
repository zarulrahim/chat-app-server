const express = require("express");
const app = express();
const { Socket } = require('./socket');
const { Api } = require('./api');

// Socket.io
Socket(express, app);

// Api
Api(express, app);

app.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));