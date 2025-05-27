const express = require("express");
const app = require("./app");
const port = 3000;
const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/", express.static("public"));

app.use("/mytest", testRoutes);

app.use("/calculator", calculatorRoutes);

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
