const express = require("express");
const cors = require("cors");

const app = express();

var option = {
  origin: "http://localhost:4200"

};

app.use(cors(option));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.mongoose
  .connect(db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./app/routes/routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});