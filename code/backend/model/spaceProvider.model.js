const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpaceProviderSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    langType: { type: String, required: true },
    telNo: { type: String, required: true },
    address: { type: String, required: true },
    nic: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true,
})

module.exports = SpaceProvider = mongoose.model("spaceProviders", SpaceProviderSchema);