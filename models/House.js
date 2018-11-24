const mongoose = require("mongoose");
const getUid = require("get-uid");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const House = new Schema({
    prices: {
        installed: {
            type: Number
        },
        notInstalled: {
            type: Number
        }
    },
    dimension: {
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        total: {
            type: Number
        }
    },
    house: {
        houseCode: {
            type: Number,
            default: getUid
        },
        name: {
            type: String
        },
        bath: {
            type: Number
        },
        bedroom: {
            type: Number
        },
        description: {
            type: String
        },
        image: {
            type: String
        }
    },
    publicDate: {
        type: String,
        default: timeVal
    }
});

module.exports = mongoose.model("House", House);