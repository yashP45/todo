const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/todoRoute')
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("database connected")).catch((err) => console.log(err))

app.listen(5000, () => {
    console.log("app listening on port 5000");
})