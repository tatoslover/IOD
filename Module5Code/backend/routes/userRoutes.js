// routes/userRoutes.js
const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hsien Loong", country: "SG" },
];

// GET all users
router.get("/", (req, res) => {
  res.status(200).json({ result: users });
});

// POST request to create a new user
router.post("/", (req, res) => {
  const newUser = req.body;
  console.log(newUser);

  // Basic validation
  if (!newUser.name || !newUser.country) {
    return res
      .status(400)
      .json({ error: "User must contain a name and country" });
  }

  // Auto-generate ID if not provided
  if (!newUser.id) {
    newUser.id = users.length + 1;
  }

  // Add the new user and respond with it
  users.push(newUser);
  res.status(201).json(newUser);
});

router.get("/headers", (req, res) => {
  console.log(req.headers);
  res.json(req.headers);
});

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.status(200).json({ result: user });
  } else {
    res.status(404).json({ result: `User ${userId} not found` });
  }
});

module.exports = router;
