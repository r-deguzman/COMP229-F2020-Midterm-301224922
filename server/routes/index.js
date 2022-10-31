/*
Filename: COMP229-F2020-MidTerm-Start
Author's name: Ruth Jocelyn De Guzman
Student's Name: Ruth Jocelyn De Guzman
Student ID: 301224922
Date: October 23, 2022
*/

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let book = require("../models/books");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    books: "",
  });
});
module.exports = router;
