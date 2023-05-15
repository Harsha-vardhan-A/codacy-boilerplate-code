const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const auth = require("../middleware/jwt");
const Movie = require("../models/movie");

router.get("/", (req, res) => {
  res.status(201).json({
    message: "Welcome to the API.",
  });
});

router.post("/login", (req, res) => {
  console.log("logging");
  console.log("you are login is successfull");
  console.log("codacy sample code ");
  console.log("you are login is successfull");
  console.log("codacy sample code ");
  let a="jkshrjkhjhw";
  res.status(201).send({message:"successfully login"})
});

router.post("/register", async (req, res) => {});

router.get("/user/:uid", auth.checkToken, (req, res) => {

});

router.get("/movie", (req, res) => {

});

router.get("/movie/:id", (req, res) => {

});

router.delete("/movie/:id", (req, res) => {

});

router.post("/movie", (req, res) => {
  const body = req.body;
  //const movie = new Movie(body);
 
});
module.exports = router;
