const mongoose = require("mongoose");
const URI = "mongodb://jeancbarreto:Jean_190495@ds341837.mlab.com:41837/markeditor"

mongoose
  .connect(URI)
  .then(db => console.log("Db is connected"))
  .catch(error => console.error(error));

module.exports = mongoose;
