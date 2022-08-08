const { Router } = require('express');
const { categories } = require("../db");
const routes = Router();

routes.get("/", async (req, res) => {
  

    const foundedCategories = await categories.findAll();
    res.status(200).send(foundedCategories)

});


module.exports = routes;