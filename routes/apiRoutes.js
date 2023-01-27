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
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(401).json({
        message: "Auth failed",
      });
    }
    if (!user) {
      console.log("No user found.");
      res.status(401).json({
        message: "Auth failed",
      });
    }
    if (!user.validPassword(req.body.password)) {
      req.flash("error", "Wrong password");
      res.status(401).json({
        message: "Auth failed",
      });
    }
    if (user) {
      console.log("logged in");
      const token = jwt.sign(
        {
          email: user.email,
          userId: user._id,
        },
        process.env.SECRET,
        {
          expiresIn: "12h",
        }
      );
      return res.status(200).json({
        message: "Auth successful",
        token: token,
        uid: user._id,
      });
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  });
});

router.post("/register", async (req, res) => {
  try {
    const user = new User();
    (user.email = req.body.email),
      (user.password = user.encryptPassword(req.body.password)),
      (user.created_At = Date.now());
    user.save((error, result) => {
      if (error) {
        console.log(err);
        res.status(500).json({
          message: "An error has occured.",
        });
      } else {
        res.status(201).json({
          message: "User created.",
        });
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "An error has occured.",
    });
  }
});

router.get("/user/:uid", auth.checkToken, (req, res) => {
  User.findOne({ _id: req.params.uid }, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(401).json({
        message: "User does not exist.",
      });
    }
    if (user) {
      console.log("logged in");
      return res.status(200).json({
        message: "user found",
        uid: user._id,
        email: user.email,
        joined: user.created_At,
      });
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  });
});

router.get("/movie", (req, res) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      console.log(err);
      return res.status(401).json({
        message: "Movie does not exist.",
      });
    } else if (movies.length === 0) {
      console.log(movies);
      return res.status(200).json({ message: "Movie list is empty", movies });
    } else {
      return res.status(200).json({ message: "Fetched successfully", movies });
    }
  }).catch((err) => {
    console.log(err);
    return res.status(500).json({ err });
  });
});

router.get("/movie/:id", (req, res) => {
  Movie.findOne({ _id: req.params.id }, (err, movie) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server errror.",
      });
    } else if (!movie) {
      return res.status(401).json({
        message: "Movie not found",
      });
    } else {
      return res.status(200).json({
        message: "Fetched successfully",
        movie,
      });
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  });
});

router.delete("/movie/:id", (req, res) => {
  var movieId = req.params.id;
  Movie.findByIdAndDelete(movieId, (err, movie) => {
    if (err) {
      console.log(err);
      return res.status(401).json({
        message: "movie does not exist.",
      });
    } else if (!movie) {
      return res.status(401).json({
        message: "Movie not found",
      });
    } else {
      console.log(movie);
      return res.status(200).json({
        message: "Deleted successfully",
        movie,
      });
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  });
});

router.post("/movie", (req, res) => {
  const body = req.body;
  const movie = new Movie(body);
  try {
    movie.save((err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ message: "Something went wrong", error: err });
      } else {
        return res.status(201).json({ message: "Movie created successfully" });
      }
    });
  } catch (error) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
});
module.exports = router;
