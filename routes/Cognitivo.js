const express = require('express');
const router = express.Router();
const Cognitivo = require('../models/Cognitivo');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const house = new Cognitivo(req.body);
        await house.save();
        console.log(house)
        res.json({
            status: 'Cognitivo saved.'
        });
    })

    .get('/all', async (req, res) => {
        const houses = await Cognitivo.find();
        res.json(houses);
    })

    .get('/only/:id', async (req, res) => {
        const house = await Cognitivo.findById(req.params.id);
        res.json(house);
    })

    .put('/:id', async (req, res) => {
        await Cognitivo.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Cognitivo Updated.'
        });
    })

    .delete('/:id', async (req, res) => {
        await Cognitivo.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Cognitivo Deleted.'
        });
    });


module.exports = router;
