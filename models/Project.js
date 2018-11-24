const mongoose = require("mongoose");
const moment = require("moment-timezone");
let timeVal = moment()
    .tz("America/Santiago")
    .format();

const {
    Schema
} = mongoose;

const Project = new Schema({
    product: {
        name: {
            type: String
        },
        dimension: {
            type: String
        },
        price: {
            type: Number
        },
        houseCode: {
            type: Number
        }
    },
    dates: {
        dateInit: {
            type: String
        },
        dateEnd: {
            type: String
        }
    },
    payment: {
        total: {
            type: Number
        },
        status: {
            type: String
        },
        remaining: {
            type: Number
        }
    },
    user: {
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
        address: {
            type: String
        },
        commune: {
            type: String
        },
        country: {
            type: String
        }
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model("Project", Project);