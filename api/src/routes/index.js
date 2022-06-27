const routes = require('express').Router()
const usersRoutes = require('./users')
const productRoutes = require('./products')
const categories=require('./categories')

routes.use('/users', usersRoutes)
routes.use('/products', productRoutes);
routes.use('/categories',categories);



module.exports = routes
