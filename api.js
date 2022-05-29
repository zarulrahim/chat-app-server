
const axios = require('axios');
const cors = require('cors');

function Api(express, app) {
  const corsOptions ={
    origin:'*', 
    credentials:true
  }
  app.use(cors(corsOptions))
  app.use(express.json());

  const BASE_URL = "https://a3fc2203-e440-45a9-90fe-7bdca4ce2d9e.todak.com/api"

  app.post('/login', (req, res) => {
    const url = BASE_URL + "/login"
    axios.post(url, req.body)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.json(error)
    })
  })

  app.get('/logout', (req, res) => {
    const url = BASE_URL + "/logout"
    const config = { 
      headers: { 
        Authorization: req.header('Authorization') 
      } 
    }
    axios.get(url, config)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    })
  })

  app.get('/users', (req, res) => {
    const url = BASE_URL + "/users"
    const config = { 
      headers: { 
        Authorization: req.header('Authorization') 
      } 
    }
    axios.get(url, config)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.json(error)
    })
  })

  app.get('/users/show/:uuid', (req, res) => {
    const url = BASE_URL + "/users/show/" + req.params.uuid
    const config = { 
      headers: { 
        Authorization: req.header('Authorization') 
      } 
    }
    axios.get(url, config)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.json(error)
    })
  })

  app.get('/users/update/:uuid', (req, res) => {
    const url = BASE_URL + "/users/update/" + req.params.uuid
    const config = { 
      headers: { 
        Authorization: req.header('Authorization') 
      } 
    }
    axios.get(url, config)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.json(error)
    })
  })

  app.post('/users/store', (req, res) => {
    const url = BASE_URL + "/users/store"
    const config = { 
      headers: { 
        Authorization: req.header('Authorization') 
      } 
    }
    axios.post(url, req.body, config)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      // console.log(error, req.body, url)
      res.json(error)
    })
  })

  app.delete('/users/destroy/:uuid', (req, res) => {
    const url = BASE_URL + "/users/destroy/" + req.params.uuid
    const config = { 
      headers: { 
        Authorization: req.header('Authorization') 
      } 
    }
    axios.delete(url, config)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.json(error)
    })
  })
}

module.exports = {
  Api
}