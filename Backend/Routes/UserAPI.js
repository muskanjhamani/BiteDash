const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "dwfwfinmyomoqsbu9phr0grevn9@&$/?";

router.post(
  "/createUser",
  [
    body("email", "Incorrect Email").isEmail(),
    body("name", "Name should be more than 5 characters").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10); // they return a promise that's why await
    let securePassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log("Failed to create User with an exception" + err);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginUser",
  [
    body("email", "Incorrect Email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;

    try {
      const userData = await User.findOne({ email }); // sends document if present else returns empty
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      ); // return type true false
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ errors: "Try login with correct credentials" });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);

      return res.json({ success: true, authToken: authToken });
    } catch (err) {
      console.log("Failed to login with an exception" + err);
      res.json({ success: false });
    }
  }
);

module.exports = router;
