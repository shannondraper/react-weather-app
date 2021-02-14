require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const request = require('request')
const fetch = require('node-fetch')
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/weather', async (request, response) => {
    const weatherURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/43.585891,-79.5835271?units=si`;
    const fetch_response = await fetch(weatherURL);
    const json = await fetch_response.json();
    response.json(json);
})

app.listen(port, () => console.log(`server is listening on port: ${port}`))