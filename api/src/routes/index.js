const routes = require('express').Router()
const usersRoutes = require('./users')
const productRoutes = require('./products')

routes.use('/users', usersRoutes)
routes.use('/products', productRoutes)

module.exports = routes
