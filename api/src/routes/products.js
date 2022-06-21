const routes = require('express').Router()
const { products } = require('../db')

routes.get('/', async(req, res) => {
    try {
        let latestProducts = await products.findAll({})
        if(!latestProducts) res.status(404).send("Data not found!")

        res.status(200).send(latestProducts)
    } catch (error) {
        console.log("Fail searching data!")
    }
    
})

module.exports = routes;