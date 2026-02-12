const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
