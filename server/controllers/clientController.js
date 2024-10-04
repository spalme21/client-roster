const asyncHandler = require("express-async-handler");
const db = require("../db/connect.js");

const Client = db.client;

// Create new client
exports.create_client = asyncHandler(async (req, res) => {
  const { lastName, firstName, email, phone } = req.body;

  Client.findOrCreate({
    where: { last_name: lastName, first_name: firstName },
    defaults: {
      email: email,
      phone: phone,
      balance: 0,
    },
  })
    .then((client, created) => {
      if (created) {
        res.send(client);
      } else {
        res.send({ clientExists: true });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

// GET all clients
exports.get_all_clients = asyncHandler(async (req, res) => {
  const clients = await Client.findAll();
  if (clients == null) {
    res.send("You have no clients yet!");
  } else {
    res.json({ clients: clients });
  }
});

// GET one client by id
exports.get_client = asyncHandler(async (req, res) => {
  const clientId = req.params.id;
  const client = await Client.findByPk(clientId);
  res.send(client);
});

// PATCH edit client
exports.edit_client = asyncHandler(async (req, res) => {
  const { lastName, firstName, email, phone } = req.body;
  const clientId = req.params.id;

  Client.update(
    {
      last_name: lastName,
      first_name: firstName,
      email: email,
      phone: phone,
    },
    {
      where: {
        id: clientId,
      },
    }
  )
    .then((client) => {
      res.send(client);
    })
    .catch((err) => res.send(err));
});

//PATCH update balance
exports.update_balance = asyncHandler(async (req, res) => {
  const { balance } = req.body;
  const clientId = req.params.id;

  Client.update(
    {
      balance: balance,
    },
    {
      where: {
        id: clientId,
      },
    }
  )
    .then((client) => {
      res.send(client);
    })
    .catch((err) => res.send(err));
});

//DELETE client
exports.delete_client = asyncHandler(async (req, res) => {
  const clientId = req.params.id;

  Client.destroy({
    where: {
      id: clientId,
    },
  });
});
