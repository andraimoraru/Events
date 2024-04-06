const mongoose = require("mongoose");

const User = mongoose.model('User', {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    eventData: {
        type: Object,
        default: [],
    },
    isStaff: {
        type: Boolean,
        default: false,
    }
})

module.exports = {User}
