const express = require('express');
const router = express.Router();
const House = require('../models/House');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const house = new House(req.body);
        await house.save();
        console.log(house)
        res.json({
            status: 'House saved.'
        });
    })

    .get('/all', async (req, res) => {
        const houses = await House.find();
        res.json(houses);
    })

    .get('/only/:id', async (req, res) => {
        const house = await House.findById(req.params.id);
        res.json(house);
    })

    .put('/:id', async (req, res) => {
        await House.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'House Updated.'
        });
    })

    .delete('/:id', async (req, res) => {
        await House.findByIdAndRemove(req.params.id);
        res.json({
            status: 'House Deleted.'
        });
    });


module.exports = router;