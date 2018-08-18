const express = require('express');

const http = require('http');
const https = require('https');
const app = express();

const PORT = process.env.PORT || 3000;

// Global hidden variable API key
const API_Key = '9229e9f2bf194233a93d5d40a32b50'

const yachtAPI = `http://api.boats.com/inventory/search?key=${API_Key}`;

app.get('/' , (req, res) => {

  http.get(yachtAPI, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk
    });

    response.on('end', () =>{
      let parsedData = JSON.parse(data)
      res.json(parsedData);
    });

  }).on('error', (err) => {
    console.log(err.message);
  })

});

app.listen(PORT, () => {
    console.log("Yacht is sailing...", PORT)
})
