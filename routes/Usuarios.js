const express = require('express');
const router = express.Router();
const Usuarios = require('../models/Usuarios');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const house = new Usuarios(req.body);
        await house.save();
        console.log(house)
        res.json({
            status: 'Usuarios saved.'
        });
    })

    .get('/all', async (req, res) => {
        const houses = await Usuarios.find();
        res.json(houses);
    })

    .get('/only/:id', async (req, res) => {
        const house = await Usuarios.findById(req.params.id);
        res.json(house);
    })

    .put('/:id', async (req, res) => {
        await Usuarios.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Usuarios Updated.'
        });
    })

    .delete('/:id', async (req, res) => {
        await Usuarios.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Usuarios Deleted.'
        });
    });


module.exports = router;
