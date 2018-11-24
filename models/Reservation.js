const mongoose = require("mongoose");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;


const Reservation = new Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    date: {
        type: String,
        default: timeVal
    },
    product: {
        name: {
            type: String
        },
        dimension: {
            type: String
        },
        price: {
            type: Number
        }
    }
});

module.exports = mongoose.model("Reservation", Reservation);