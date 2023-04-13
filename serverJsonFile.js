const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const testObj = {
    name: "karthick",
    age: 33,
    gender: 'Male'
}
const requestListener = ((req,res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(testObj));
});

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log("App is running successfully...")
});