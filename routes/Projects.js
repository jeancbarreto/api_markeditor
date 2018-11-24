const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const moment = require('moment-timezone');
moment().tz("America/Santiago").format();

router

    .post('/add', async (req, res) => {
        const project = new Project(req.body);
        await project.save();
        console.log(project)
        res.json({
            status: 'Project saved.'
        });
    })

    .get('/all', async (req, res) => {
        const projects = await Project.find();
        res.json(projects);
    })

    .get('/only/:id', async (req, res) => {
        const project = await Project.findById(req.params.id);
        res.json(project);
    });


module.exports = router;