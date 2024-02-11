const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    likedMovies: Array,
    password: String,
});

module.exports = mongoose.model("user", userSchema);