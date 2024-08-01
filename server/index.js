const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/connect.js");
// const bodyParser = require("body-parser");
const trainerRouter = require("./routes/trainerRouter");
const clientRouter = require("./routes/clientRouter.js");

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/trainer", express.json(), trainerRouter);
app.use("/clients", express.json(), clientRouter);

const PORT = process.env.PORT || "8080";

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
