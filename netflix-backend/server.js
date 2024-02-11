const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/UserRoutes");

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/netflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use("/api/user", userRoutes);


app.listen(5000, () => {
    console.log("server started");
});