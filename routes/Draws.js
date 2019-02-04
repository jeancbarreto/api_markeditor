const express = require("express");
const router = express.Router();
const Draw = require("../models/Draws");
const moment = require("moment-timezone");
moment()
  .tz("America/Santiago")
  .format();

router

  .post("/add", async (req, res) => {
    const Dibujo = new Draw(req.body);
    await Dibujo.save();
    console.log(house);
    res.json({
      status: "Plano saved."
    });
  })

  .get("/all", async (req, res) => {
    const Dibujo = await Draw.find();
    console.log("llego");
    res.json(Dibujo);
  })

  .get("/:name", async (req, res) => {
    await Draw.findOne({ name: req.params.name }, function(err, draw) {
      if (err) {
        return handledError(err);
      } else {
        res.json(draw);
        console.log(draw);
      }
    });
    //console.log(req.params.name);
    //console.log(res.json(Dibujo));
    //res.json(Dibujo);
  })

  .put("/:id", async (req, res) => {
    await Draw.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: "Plano Updated."
    });
  })

  .delete("/:id", async (req, res) => {
    await Draw.findByIdAndRemove(req.params.id);
    res.json({
      status: "Planos Deleted."
    });
  });

module.exports = router;
