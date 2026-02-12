const app = require('./app');
const mongoose = require('mongoose');

const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/subscribers", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
