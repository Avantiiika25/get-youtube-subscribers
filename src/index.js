const app = require('./app');
const mongoose = require('mongoose');

// Use Render PORT if available, else local 3000
const port = process.env.PORT || 3000;

// Use env Mongo URL if available, else local MongoDB
const DATABASE_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/subscribers";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
