const mongoose = require('mongoose');
const URI = 'mongodb://equi1:equila2@ds113849.mlab.com:13849/temuco';

mongoose.connect(URI)
    .then(db => console.log('Db is connected'))
    .catch(error => console.error(error));

module.exports = mongoose;
