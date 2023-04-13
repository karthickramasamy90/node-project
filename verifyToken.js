const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const app = express();

dotenv.config();
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello World")
})
app.listen(port, () => {
    console.log(`Server is uping on the port: ${port}`)
})

console.log("process.env.JWT_SECRET_KEY", process.env)

app.post('/user/generateToken', (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12
    }

    const token = jwt.sign(data, jwtSecretKey);

    res.send(token)
});

app.get('/user/validateToken', (req, res) => {
    let tokenHeaderKey = process.env.JWT_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        console.log("token", token);
        console.log("verified", verified);
        
        if  (verified) {
            console.log("Token verified successfully");
            return res.send(`Token verified successfully`)
        } else {
            return res.status(401).send('Unauthorized')
        }
    } 
    catch (error) {
        return res.status(401).send(error);
    }
})