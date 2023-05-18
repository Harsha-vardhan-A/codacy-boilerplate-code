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
  let a;
  a = "jkshrjkhjhw";
  let b=c+d;

  // console.log(a);
  //logic for complexity
  for(i=0;i<10;i++) ///nsbdv
  /** iueiurierifuhujfrejkr */
  let b,jd,kdiufr;
  for(i=0;i<10;i++)
  {
    for(j=0;j<=10;j++)
    { 
      for(k=0;k<=10;k++)
      { 
        for(l=0;l<=10;l++)
        { 
          for(m=0;m<=10;m++)
          { 
            for(n=0;n<=10;n++)
            { 
              if(i<j)
              {
                if(j<k)
                {
                  if(k<m)
                  {
                    console.log("i+j",i+j)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  res.status(201).send({message:'successfully login'})
});

router.post("/login", (req, res) => {
  console.log("logging");
  console.log("you are login is successfull");
  console.log("codacy sample code ");
  console.log("you are login is successfull");conflict
  console.log("codacy sample code ");
  let a;
  a = "jkshrjkhjhw";
  // console.log(a);
  for(i=0;i<10;i++)
  {
        for(j=0;j<=10;j++)
        { 
          if(i=>j)
            console.log("i+j",i+j)
        }
  }
  res.status(201).send({message:'successfully login'})
});


router.post("/register", async (req, res) => {});

router.get("/user/:uid", auth.checkToken, (req, res) => {});

router.get("/movie", (req, res) => {});

router.get("/movie/:id", (req, res) => {});

router.delete("/movie/:id", (req, res) => {});

router.post("/movie", (req, res) => {
  const body = req.body;
  //const movie = new Movie(body);
 
});
module.exports = router;
