const express = require('express');
const router = express.Router();
const Tratamientos = require('../models/Tratamientos');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const house = new Tratamientos(req.body);
        await house.save();
        console.log(house)
        res.json({
            status: 'Tratamientos saved.'
        });
    })

    .get('/all', async (req, res) => {
        const houses = await Tratamientos.find();
        res.json(houses);
    })

    .get('/only/:id', async (req, res) => {
        const house = await Tratamientos.findById(req.params.id);
        res.json(house);
    })

    .put('/:id', async (req, res) => {
        await Tratamientos.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Tratamientos Updated.'
        });
    })

    .delete('/:id', async (req, res) => {
        await Tratamientos.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Tratamientos Deleted.'
        });
    });


module.exports = router;
