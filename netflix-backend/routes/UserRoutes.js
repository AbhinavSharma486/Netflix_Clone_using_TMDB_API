const {
    addToLikedMoves,
    getLikedMovies,
    removeFromLikedMovies,
} = require("../controllers/UserController");
const express = require("express");
const router = express.Router();


router.get("/liked/:email", (req, res) => getLikedMovies);
router.post("/add", (req, res) => addToLikedMoves);
router.put("/remove", (req, res) => removeFromLikedMovies);


module.exports = router;