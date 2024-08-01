module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define("Trainer", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  return Trainer;
};
