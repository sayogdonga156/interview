const express = require("express");
const {
  addSelection,
  getSelection,
} = require("../controllers/selectionController");
const { verifyToken } = require("../helper/auth");

const Router = express.Router();

Router.post("/add/selection",verifyToken, addSelection);
Router.get("/user/selection/:id",verifyToken, getSelection);

module.exports = Router;
