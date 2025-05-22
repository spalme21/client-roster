const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const db = require("../db/connect.js");
const { createToken } = require("../utils/createToken.js");

const Trainer = db.trainer;
const saltRounds = 10;

// Register new user
exports.register = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      res.status(500).send("There was a problem hashing the password.");
    } else {
      Trainer.findOne({
        where: { email: email },
      }).then((user) => {
        console.log(user);
        if (user) {
          res.send({ userExists: true });
        } else {
          Trainer.create({
            last_name: lastName,
            first_name: firstName,
            email: email,
            password: hashedPassword,
          }).then((user) => {
            res.send(user);
          });
        }
      });
      // Trainer.findOrCreate({
      //   where: { email: email },
      //   defaults: {
      //     password: hashedPassword,
      //     last_name: lastName,
      //     first_name: firstName,
      //   },
      // })
      //   .then((user, created) => {
      //     console.log(created);
      //     if (created) {
      //       res.send({ userExists: false });
      //     } else {
      //       res.send({ userExists: true });
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     res.status(500).send({ message: err.message });
      //   });
    }
  });
});

// Login user
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Trainer.findOne({ where: { email: email } });
  if (user === null) {
    res.send("No account exists with that email.");
  } else {
    bcrypt.compare(password, user.password, (err, match) => {
      if (match) {
        res.json({ user: user, token: createToken(user.id) });
      } else {
        res.send("Incorrect password.");
      }
    });
  }
});

// GET users
exports.get_trainers = asyncHandler(async (req, res) => {
  const trainers = await Trainer.findAll();
  res.json({ users: users });
});
