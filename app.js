const express = require('express')
const app = express();
const cors = require('cors')

app.use(express.json());

app.use(cors())

app.use((req, res, next) => {
    console.log("8.4 IS THE COOLEST!@#!@#!@!@");
    next();
});


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get("*", (req, res) => {
    res.status(404).json({ error: "page not found" })
})

module.exports = app;