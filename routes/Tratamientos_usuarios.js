const express = require('express');
const router = express.Router();
const Tratamientos_usuarios = require('../models/Tratamientos_usuarios');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const house = new Tratamientos_usuarios(req.body);
        await house.save();
        console.log(house)
        res.json({
            status: 'Tratamientos_usuarios saved.'
        });
    })

    .get('/all', async (req, res) => {
        const houses = await Tratamientos.find();
        res.json(houses);
    })

    .get('/only/:id', async (req, res) => {
        const house = await Tratamientos_usuarios.findById(req.params.id);
        res.json(house);
    })

    .put('/:id', async (req, res) => {
        await Tratamientos_usuarios.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Tratamientos_usuarios Updated.'
        });
    })

    .delete('/:id', async (req, res) => {
        await Tratamientos_usuarios.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Tratamientos_usuarios Deleted.'
        });
    });


module.exports = router;
