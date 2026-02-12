const express = require("express");
const app = express();

const subscriberRoutes = require("./routes/subscribers");

app.use(express.json());
app.use("/subscribers", subscriberRoutes);

app.get("/", (req, res) => {
  res.send("Get YouTube Subscribers API is running");
});

module.exports = app;
