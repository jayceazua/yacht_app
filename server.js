require('dotenv').config();
const express = require('express');
const http = require('http');
const https = require('https');
const app = express();

const PORT = process.env.PORT || 3000;

// Inventory API key
const myAPI_Key = process.env.InventoryAPIKEY
// Power API Key
const powerAPI_Key = process.env.Power_API_KEY
// Sail API Key
const sailAPI_Key = process.env.Sail_API_KEY
// Inventory API
const inventoryYachtAPI = `http://api.boats.com/inventory/search?key=${myAPI_Key}`;

app.get('/inventory' , (req, res) => {

  http.get(inventoryYachtAPI, (response) => {
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
