const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const authRoutes = require("./routes/authRoutes");
authRoutes(app);
//require("./routes/authRoutes")(app)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
