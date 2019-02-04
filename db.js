const mongoose = require("mongoose");
const URI = "mongodb://jeancbarreto:Jean_190495@ds135519.mlab.com:35519/apicad";

mongoose
  .connect(URI)
  .then(db => console.log("Db is connected"))
  .catch(error => console.error(error));

module.exports = mongoose;
