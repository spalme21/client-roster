require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.trainer = require("./models/trainer.js")(sequelize, DataTypes);
db.client = require("./models/client.js")(sequelize, DataTypes);

module.exports = db;
