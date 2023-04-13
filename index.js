const express = require('express');
const javascriptExexution = require('./callbackFunction');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`App is listening the port is http:\\localhost:${port}`)
});
