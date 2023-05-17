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

router.get("/", (req, res) => {
  res.status(201).json({
    message: "Welcome to the API.",
  });
});
function fun1(){
  var a;
  if(true){
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);

  }
  if(true){
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);

  }
  if(true){
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);

  }
  if(true){
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);

  }
}

function fun1(){
  var a;
  console.log(a);
}


function fun1(){
  var a;
  console.log(a);
}
