const express = require('express')

const items = express.Router()

const itemsData = require("../models/item")

const { validateURL } = require('../models/validations')

items.get('/', (req, res) => {
    res.json(itemsData)
})

items.get("/:arrayIndex", (req, res) => {
    console.log(req.params);
    const { arrayIndex } = req.params;
    if (itemsData[arrayIndex]) {
        res.json(itemsData[arrayIndex])
    } else {
        return res.redirect('/');
    }
})

items.post("/", validateURL, (req, res) => {
    itemsData.push(req.body);
    res.json(itemsData[itemsData.length - 1]);
});

items.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (itemsData[arrayIndex]) {
        const deletedItems = itemsData.splice(arrayIndex, 1)
        res.status(200).json(deletedItems)
    }

});

items.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (itemsData[arrayIndex]) {
        itemsData[arrayIndex] = req.body
        res.status(200).json(itemsData[arrayIndex])
    }

});

module.exports = items