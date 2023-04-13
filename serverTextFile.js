const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const requestListener =  ((req, res) => {
    res.setHeader('Content-type', 'text/plain');
    res.writeHead(200);
    res.end("This is a test node js on local computer");
})
const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`App is running successfully on port:`, port)
})

// const requestListener = function (req, res) {
//     res.setHeader("Content-Type", "application/json");
//     res.writeHead(200);
//     res.end(`{"message": "This is a JSON response"}`);
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });