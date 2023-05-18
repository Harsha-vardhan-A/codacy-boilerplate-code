const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const apiRoutes = require("./routes/apiRoutes");

//MongoDB config
// require("./loaders/db");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));

app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is running and ");
});
// routing for get method
router.get("/", (req, res) => {
  res.status(201).json({
    message: "Welcome to the API.",
  });
  // fun1();
});
// jkdhfuiwfhieuyreiuhjf
function fun1(){
  var a; // is a variable
  // constant condition to check
  if(true){
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);
  }
  // constant condition to check
  if(true){
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);
  }
  // constant condition to check
  if(true){
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);
  }
  // constant condition to check
  if(true){
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);
  }
}
function fun2(){
  let a,b;
  for(a=0;a<23;a++)
  {
    for(b=0;b<23;b++)
    {
      if(a!=0)
      {
        if(b!=0)
        {
          if(a<b)
          {
            a=a+b;
          }
        }
      }
    }
  }
}