const routes = require('express').Router()
const usersRoutes = require('./users')
const productRoutes = require('./products')
const categoriesRoutes=require('./categories')
const stripeRoute=require('./stripe')


routes.use('/users', usersRoutes)
routes.use('/products', productRoutes);
routes.use('/categories',categoriesRoutes);
routes.use('/order', stripeRoute);


module.exports = routes
