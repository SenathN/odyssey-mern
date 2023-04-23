const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpaceSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    peopleCount: { type: String, required: true },
    rate: { type: String, required: true },
    images: { type: [String] }
}, {
    timestamps: true,
})

module.exports = Space = mongoose.model("spaces", SpaceSchema);