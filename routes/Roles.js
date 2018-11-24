const express = require('express');
const router = express.Router();
const Roles = require('../models/Roles');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const house = new Roles(req.body);
        await house.save();
        console.log(house)
        res.json({
            status: 'Roles saved.'
        });
    })

    .get('/all', async (req, res) => {
        const houses = await Roles.find();
        res.json(houses);
    })

    .get('/only/:id', async (req, res) => {
        const house = await Roles.findById(req.params.id);
        res.json(house);
    })

    .put('/:id', async (req, res) => {
        await Roles.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Roles Updated.'
        });
    })

    .delete('/:id', async (req, res) => {
        await Roles.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Roles Deleted.'
        });
    });


module.exports = router;
