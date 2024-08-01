module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  return Client;
};
