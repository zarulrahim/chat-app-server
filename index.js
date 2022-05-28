const express = require("express");
const app = express();
const { Socket } = require('./socket');
const { Firebase } = require('./firebase');
const csrf = require('csurf');
const request = require('request');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const axios = require('axios');

// Run Socket IO
Socket(express, app);

// Run Firebase
// Firebase();

// Axios
// MyApi(express, app);

app.use(express.json());
// app.use(express.urlencoded());
// app.post('/process', parseForm, csrfProtection, function (req, res) {
  //   res.send('data is being processed')
  // })

const BASE_URL = "https://a3fc2203-e440-45a9-90fe-7bdca4ce2d9e.todak.com/api"
const BEARER_TOKEN = "2|mAGtnsr4fevOUdQZTdG9uHceUu3kGLs0V7hRtgGl"
const CONFIG = {
  Accept: 'application/json',
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
  credentials: 'include',
}

app.post('/login', (req, res) => {
  const url = BASE_URL + "/login"
  axios.post(url, req.body, CONFIG)
  .then((response) => {
    res.json(response.data)
  })
  .catch((error) => {
    res.json(error)
  })
})

app.get('/users', (req, res) => {
  const url = BASE_URL + "/users"
  axios.get(url, CONFIG)
  .then((response) => {
    res.json(response.data)
  })
  .catch((error) => {
    res.json(error)
  })
})

app.get('/users/show/:uuid', (req, res) => {
  const url = BASE_URL + "/users/show/" + req.params.uuid
  axios.get(url, CONFIG)
  .then((response) => {
    res.json(response.data)
  })
  .catch((error) => {
    res.json(error)
  })
})

app.get('/users/update/:uuid', (req, res) => {
  const url = BASE_URL + "/users/update/" + req.params.uuid
  axios.get(url, CONFIG)
  .then((response) => {
    res.json(response.data)
  })
  .catch((error) => {
    res.json(error)
  })
})



var csrfProtection = csrf({ cookie: true });
// var parseForm = bodyParser.urlencoded({ extended: false })

const corsOptions = {
  origin: "*",
  credentials: true,
}
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(csrfProtection);

app.get('/getCSRFToken', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.set('port', 5000);
app.listen(app.get('port'), () => {
    console.log('App running on port', app.get('port'));
});

// var cookieParser = require('cookie-parser')
// var csrf = require('csurf')
// var bodyParser = require('body-parser')
// var express = require('express')
// var cors = require('cors')

// // setup route middlewares
// var csrfProtection = csrf({ cookie: true })
// var parseForm = bodyParser.urlencoded({ extended: false })

// // create express app
// var app = express()

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
// }

// app.use(cors(corsOptions));

// // parse cookies
// // we need this because "cookie" is true in csrfProtection
// app.use(cookieParser())

// app.get('/form', csrfProtection, function (req, res) {
//   // pass the csrfToken to the view
//   // res.render('send', { csrfToken: req.csrfToken() })
//   res.send({ csrfToken: req.csrfToken() })
// })

// app.post('/process', parseForm, csrfProtection, function (req, res) {
//   res.send('data is being processed')
// })

// app.set('port', 5000);

// app.listen(app.get('port'), () => {
//     console.log('App running on port', app.get('port'));
// });

// module.exports = app;

// const requestOptions = {
//   url: 'https://a3fc2203-e440-45a9-90fe-7bdca4ce2d9e.todak.com/api/login',
//   method: 'POST',
//   json: {},
//   qs: {
//     email: "admin@gmail.com",
//     password: "password"
//   }
// };
// request(requestOptions, (err, response, body) => {
//   if (err) {
//     console.log(err);
//   } else if (response.statusCode === 200) {
//     console.log(body);
//   } else {
//     console.log(response.statusCode);
//   }
// });

// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// // Create Express Server
// const app = express();
// app.use(cors());

// // Configuration
// const PORT = 3001;
// const HOST = "localhost";
// const API_SERVICE_URL = "https://a3fc2203-e440-45a9-90fe-7bdca4ce2d9e.todak.com";

// // Info GET endpoint
// app.get('/api/info', (req, res, next) => {

//   res.send('This is a proxy service which proxies to Billing and Account APIs.');
// });

// // Authorization
// // app.use('', (req, res, next) => {
// //   if (req.headers.authorization) {
// //     next();
// //   } else {
// //     res.sendStatus(403);
// //   }
// // });

// // Proxy endpoints
// app.use('/api/users', createProxyMiddleware({ 
//   target: API_SERVICE_URL,
//   changeOrigin: true,
//   pathRewrite: {
//     [`^/api/users`]: '',
//   },
// }));

// app.use('/api/login', createProxyMiddleware({ 
//   target: API_SERVICE_URL,
//   changeOrigin: true,
//   pathRewrite: {
//       [`^/api/login`]: '',
//   },
// }));

// // const corsOptions ={
// //     origin: 'http://localhost:3000', 
// //     credentials:true,         
// //     optionSuccessStatus:200
// // }
// // app.use(cors(corsOptions));

// // Start the Proxy
// app.listen(PORT, HOST, () => {
//   console.log(`Starting Proxy at ${HOST}:${PORT}`);
// });

// const init = async () => {
//   const url = "https://a3fc2203-e440-45a9-90fe-7bdca4ce2d9e.todak.com/api/login";
//   const params = {
//     email: "admin@gmail.com",
//     password: "password"
//   }
//   const config = {
//     headers: { 
//       Authorization: `Bearer 2|mAGtnsr4fevOUdQZTdG9uHceUu3kGLs0V7hRtgGl`,
//     }
//   }
//   const response = await axios.post(url, params, config)
//   if (response.status === 200) {
//     console.log("response ===> ", response.data)
//   } else {
//     console.log("error response ===> ", response.data)
//   }
// }

// init();


