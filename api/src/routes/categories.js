const { Router } = require('express');
const { Op } = require("sequelize");
const { categories } = require("../db");
const routes = Router();

routes.get("/", async (req, res) => {
  

    const foundedCategories = await categories.findAll(
    );
    res.send(foundedCategories)

});


module.exports = routes;