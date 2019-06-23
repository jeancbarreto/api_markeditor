const express = require("express");
const router = express.Router();
const Archive = require("../models/Archivos");
const moment = require("moment-timezone");

moment()
  .tz("America/Santiago")
  .format();

router

  .post("/add", async (req, res) => {
    
    var fs = require('fs');

    var arrayPush = []
    
    var readME = fs.readFileSync('./data.txt', 'utf8');
    var jsonExist = JSON.parse(readME);
    arrayPush.push(JSON.stringify(jsonExist.Document[0]));
    //console.log(req.body.Document);
    arrayPush.push(JSON.stringify(req.body.Document[0]));
    jsonExist.Document = arrayPush;

    console.log(jsonExist);
    fs.writeFileSync('./data.txt', JSON.stringify(jsonExist));
    res.json({
      status: "Plano Updated."
    });
  })

  .get("/all", async (req, res) => {
    var fs = require('fs');

    var readME = fs.readFileSync('./data.txt', 'utf8');
    var jsonExist = JSON.parse(readME);



    res.json({
      status :"200",
      data:jsonExist
    })
  })

  .get("/:name", async (req, res) => {
    var fs = require('fs');
    var readME = fs.readFileSync('./data.txt', 'utf8');
    var jsonExist = JSON.parse(readME);

    console.log(req.param.name);
  })

  .put("/:id", async (req, res) => {
    await archive.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: "Plano Updated."
    });
  })

  .delete("/:id", async (req, res) => {
    await archive.findByIdAndRemove(req.params.id);
    res.json({
      status: "Planos Deleted."
    });
  });

module.exports = router;
