const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const DATABASE_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/subscribers";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

mongoose.connection.on("error", (err) => {
  console.error("Database connection error:", err);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});