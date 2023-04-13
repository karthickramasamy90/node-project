const express = require("express");
const cookieParser = require("cookie-parser");
const { cookieValidator } = require("./cookieValidator");
const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
    console.log("LOGGED");
    next()
}

const requestTime = (req,res,next) => {
    req.requestTime = new Date();
    next();
}

async function validateCoockies(req, res, next) {
    await cookieValidator(req.cookies);

    next()
}

app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`);
    res.send('Cookie have been saved successfully');
});

app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    res.send(req.cookies);
});

app.use(myLogger);
app.use(cookieParser());
// app.use(validateCoockies);
app.use(requestTime);
app.use((err, req, res, next) => {
    res.status(400).send(err.message)
})

// app.get('/', (req, res) => {
//     let responseText = 'Hello World!<br>'
//     responseText += `<small>Requested at: ${req.requestTime}</small>`
//     res.send(responseText)
//   })

app.get('/', (req, res) => {
    const reqText = `This is a time which is request made: ${req.requestTime}`;
    res.send(reqText);
})

// app.get('/', (req, res, next) => {
//     res.send(`App listing in port: ${port}`)
//     // next();
// });


app.listen(port, () => {
    console.log(`App is successfully running in port: ${port}`)
})