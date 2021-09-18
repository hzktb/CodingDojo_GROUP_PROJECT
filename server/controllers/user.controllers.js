const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    try {
      const queriedUser = await User.findOne({ username: req.body.username });
      if (queriedUser) {
        res.status(400).json({ message: "username already in use" });
        return;
      }
    } catch (err) {
      res.status(400).json(err);
    }

    const newUser = new User(req.body);
    try {
      const newUserObj = await newUser.save();
      const usertoken = jwt.sign(
        { id: newUserObj._id },
        process.env.SECRET_KEY
      );
      res
        .cookie("usertoken", usertoken, process.env.SECRET_KEY, {
          httpOnly: true,
        })
        .json(newUserObj);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  login: async (req, res) => {
    let queriedUser;
    try {
      queriedUser = await User.findOne({ username: req.body.username });
      if (!queriedUser) {
        res.status(400).json({ message: "User not found!" });
        return;
      }
    } catch (err) {
      res.status(400).json(err);
      return;
    }

    const passwordCheck = bcrypt.compareSync(
      req.body.password,
      queriedUser.password
    );
    if (!passwordCheck) {
      res.status(400).json({ message: "Password does not match!" });
      return;
    }

    const usertoken = jwt.sign({ id: queriedUser._id }, process.env.SECRET_KEY);
    res
      .cookie("usertoken", usertoken, process.env.SECRET_KEY, {
        httpOnly: true,
      })
      .json(queriedUser);
  },

  logout: (req, res) => {
    res.clearCookie("usertoken");
    res.json({ message: "logout successful" });
  },

  update: async (req, res) => {
    let queriedUser;
    try {
      queriedUser = await User.findOne({ username: req.body.username });
      if (!queriedUser) {
        res.status(400).json({ message: "user not found" });
        return;
      }
    } catch (err) {
      res.status(400).json(err);
      return;
    }

    try {
      const updatedUser = await User.findOneAndUpdate(
        { username: req.body.username },
        req.body,
        { new: true }
      );
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  findOne: async (req, res) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    try {
      const queriedUser = User.findOne({ _id: decodedJwt.payload.id });
      res.json(queriedUser);
      return;
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
