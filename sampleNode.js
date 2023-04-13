const express = require("express");
const app = express();
const host = "127.0.0.1";
const port=3000;

app.get("/", (req, res) => {
    res.send(`App is running on this port: ${port}`)
});

app.listen(port, host, () => {
    console.log("App runneing successfully")
})                                                                                           