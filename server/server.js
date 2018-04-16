'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`/api/users`, (req, res, next) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        res.json(response.data);
      });
});

app.listen(PORT, () => {
    console.log(`App started and listening on port ${PORT}`)
});
