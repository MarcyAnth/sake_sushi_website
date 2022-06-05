const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const app = express();
const port =  process.env.PORT || 3000





app.set('view engine', 'ejs');




app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/home",function(req,res){
  res.render("home")
})

app.get("/menu",function(req,res){
  res.render("menu");
});

app.get("/reserve",function(req,res){
  res.render("reserve");
});



app.listen(port, () => console.log(`Listening on port ${port}`));
