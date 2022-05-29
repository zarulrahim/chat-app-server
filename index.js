const express = require("express");
const app = express();
const { Socket } = require('./socket');
const { Api } = require('./api');

// Socket.io
// Socket(express, app);

// Api
Api(express, app);