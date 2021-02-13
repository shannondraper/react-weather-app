require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const request = require('request')
const fetch = require('node-fetch')

app.use(cors());


app.get('/weather', async (request, response) => {
    const weatherURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/43.585891,-79.5835271?units=si`;
    const fetch_response = await fetch(weatherURL);
    const json = await fetch_response.json();
    response.json(json);
})

app.listen(port, () => console.log(`listening on port: ${port}`))