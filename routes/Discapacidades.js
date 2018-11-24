const express = require('express');
const router = express.Router();
const Discapacidades = require('../models/Discapacidades');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const house = new Discapacidades(req.body);
        await house.save();
        console.log(house)
        res.json({
            status: 'Discapacidades saved.'
        });
    })

    .get('/all', async (req, res) => {
        const houses = await Discapacidades.find();
        res.json(houses);
    })

    .get('/only/:id', async (req, res) => {
        const house = await Discapacidades.findById(req.params.id);
        res.json(house);
    })

    .put('/:id', async (req, res) => {
        await Discapacidades.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Discapacidades Updated.'
        });
    })

    .delete('/:id', async (req, res) => {
        await Discapacidades.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Discapacidades Deleted.'
        });
    });


module.exports = router;
