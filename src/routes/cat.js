const express = require("express");

const catRouter = new express.Router();

catRouter.get("", async (req, res) => {
  res.render("index", {
    title: "Cats!",
    age: 5,
    catName: "San"
  });
});

module.exports = catRouter;
