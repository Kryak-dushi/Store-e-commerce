const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goodSchema = new Schema({
    image: {
        type: String,
        default: "./assets/empty.png",
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        match: /^[a-zA-Z]+$/,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [50, "Price is too low"],
        max: [5000000000, "Price is too big"],
    },
    price_before_discount: {
        type: Number,
        validate: function (val) {
            return val > this.price;
        },
        min: [50, "Price is too low"],
        max: [5000000000, "Price is too big"],
    },
    rate: {
        type: Number,
        required: true,
        min: [0.0, "Rate should be more than 0"],
        max: [5.0, "Max rate is 5"],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        lowerCase: true,
        enum: {
            values: ['wind', 'percussion', 'keyboard', 'stringed', 'other'],
            message: '{VALUE} is not supported'
        },
    },
    vendor_code: {
        type: String,
        required: [true, 'Vendor code is required'],
        unique: [true, 'Vendor code should be unique'],
    }
})

const Good = mongoose.model("Good", goodSchema);

module.exports = Good;