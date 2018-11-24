const express = require('express');
const router = express.Router();
const Sesiones = require('../models/Sesiones');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const house = new Sesiones(req.body);
        await house.save();
        console.log(house)
        res.json({
            status: 'Sesiones saved.'
        });
    })

    .get('/all', async (req, res) => {
        const houses = await Sesiones.find();
        res.json(houses);
    })

    .get('/only/:id', async (req, res) => {
        const house = await Sesiones.findById(req.params.id);
        res.json(house);
    })

    .put('/:id', async (req, res) => {
        await Sesiones.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Sesiones Updated.'
        });
    })

    .delete('/:id', async (req, res) => {
        await Sesiones.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Sesiones Deleted.'
        });
    });


module.exports = router;
