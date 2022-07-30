const express = require('express')
const app = express();
const cors = require('cors')

app.use(express.json());

app.use(cors())

app.use((req, res, next) => {
    console.log("8.4 Budgeting App");
    next();
});

const itemsData = require('./models/item')

const itemsController = require('./controllers/itemsController')

app.get('/', (req, res) => {
    res.send("Welcome to my Budgeting App!!")
})

app.use('/items', itemsController)

app.get("*", (req, res) => {
    res.status(404).json({ error: "page not found" })
})

module.exports = app;