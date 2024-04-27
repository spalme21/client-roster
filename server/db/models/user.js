module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    credits: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    trainer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return User;
};
