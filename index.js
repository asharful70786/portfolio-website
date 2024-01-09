const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/portfolio", (req , res) => {
    res.render("portfolio.ejs");
});

app.get("/experiance" , (req,res) =>{
    res.render("experiance.ejs");
});

app.get("/about" , (req , res) => {
    res.render("about.ejs");
})

app.get("/contact" , (req,res) =>{
    res.render("contact.ejs")
})

app.listen(port, () => {
    console.log("Server is running on port", port);
});
