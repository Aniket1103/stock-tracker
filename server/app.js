// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.enable('trust proxy');

app.post('/api/fetchStockData', (req, res) => {
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION
    axios.get("https://api.polygon.io/v2/aggs/ticker/AAPL/range/5/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=MEu8Ti20ywkRNwGLpVuaiRRAmz3YwggX")
    .then(response => {
        // console.log(response);
        if(!response || !response.data || !response.data.results || !Array.isArray(response.data.results) || !response.data.results.length) {
            return res.status(500).json({error : "No Response from Server"});
        }

        const {o, h, l, c, v} = response.data.results[0];

        const requiredData = {o, h, l, c, v};

        return res.status(200).json(requiredData);
    })
    .catch(error => {
        console.log(error);
        return res.status(500).json({error : error})
    })
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));