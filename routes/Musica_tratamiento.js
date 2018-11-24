const express = require('express');
const router = express.Router();
const Musica_tratamiento = require('../models/Musica_tratamiento');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const house = new Musica_tratamiento(req.body);
        await house.save();
        console.log(house)
        res.json({
            status: 'Musica_tratamiento saved.'
        });
    })

    .get('/all', async (req, res) => {
        const houses = await Musica_tratamiento.find();
        res.json(houses);
    })

    .get('/only/:id', async (req, res) => {
        const house = await Musica_tratamiento.findById(req.params.id);
        res.json(house);
    })
    .get('/type/:type', async (req, res) => {
        const house = await Musica_tratamiento.find({Type: req.params.type});
        res.json(house);
    })

    .put('/:id', async (req, res) => {
        await Musica_tratamiento.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: 'Musica_tratamiento Updated.'
        });
    })

    .delete('/:id', async (req, res) => {
        await Musica_tratamiento.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Musica_tratamiento Deleted.'
        });
    });


module.exports = router;
