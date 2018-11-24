const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

router

    .post('/add', async (req, res) => {
        const reservation = new Reservation(req.body);
        await reservation.save();
        console.log(reservation)
        res.json({
            status: 'Reservation saved.'
        });
    })

    .get('/all', async (req, res) => {
        const reservations = await Reservation.find();
        res.json(reservations);
    })

    .get('/only/:id', async (req, res) => {
        const reservation = await Reservation.findById(req.params.id);
        res.json(reservation);
    });


module.exports = router;