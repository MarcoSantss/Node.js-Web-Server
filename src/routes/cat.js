const express = require("express");
const { validatesNothing } = require("./../middlewares");

const catRouter = new express.Router();

catRouter.get("", validatesNothing, async (req, res) => {
  res.render("index", {
    title: "Cats!",
    age: 5,
    catName: "San"
  });
});

module.exports = catRouter;
