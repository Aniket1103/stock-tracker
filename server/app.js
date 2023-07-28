// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000', 'https://stock-tracker-react.netlify.app/'];
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

app.post('/api/fetchStockData', async (req, res) => {
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION
    try {
        const { ticker, date } = req.body;

        // Input Validation
        if (!ticker || !date || typeof ticker !== 'string' || typeof date !== 'string') {
        return res.status(400).json({ error: 'Invalid request. Please provide valid ticker and date.' });
        }

        const url = `https://api.polygon.io/v2/aggs/ticker/${ticker.toUpperCase()}/range/5/day/${date}/${date}?adjusted=true&sort=asc&limit=120&apiKey=${process.env.API_KEY}`;

        const response = await axios.get(url);

        const { data } = response;

        // Response Validation
        if (!data || !data.results || !Array.isArray(data.results) || data.results.length === 0) {
        return res.status(500).json({ error: 'No response data from server.' });
        }

        const { o, h, l, c, v } = data.results[0];

        const requiredData = {
            ticker: ticker.toUpperCase(),
            results: { o, h, l, c, v },
        };

        return res.status(200).json(requiredData);
        
  } catch (error) {
        return res.status(500).json({ error: 'An error occurred while fetching stock data.' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));