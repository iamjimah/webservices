const express = require("express");
const morgan = require("morgan");
const users = require("./data/users");

const port = process.env.PORT || 4000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend is up an active");
});
app.get("/users", (req, res) => {
  res.status(202).json({ success: "success", data: users });
});
app.post("/user", (req, res) => {
  const { fname, lname, dob, school } = req.body;
  const user = { fname, lname, dob, school };

  users.push(user);
  res.status(201).json({ message: "User has been created ", data: user });
});

app.listen(port, () => console.log(` server is up and running on ${port}`));
