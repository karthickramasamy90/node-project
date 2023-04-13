const express = require('express');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
    res.send("Hello Karthick");
});

app.listen(port, hostname, () => {
    console.log(`Host is listening on port: http://${hostname}:${port}`)
})
