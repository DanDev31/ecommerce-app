const { Sequelize } = require('sequelize')
const user = require('./models/user')
const product = require('./models/product')
const category = require('./models/category')
const cart = require('./models/cart')
const order = require('./models/order')
const review = require('./models/review')

const { test_categories } = require('./data')

require('dotenv').config()

const {
    DB_USER, DB_PASSWORD, DB_HOST
} = process.env

 

const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:${DB_HOST}/api_ecommerce`,
{   
    logging: false, 
    native: false 
})

user(db)
product(db)
category(db)
cart(db)
order(db)
review(db)

const { users, products, carts, categories, orders, reviews } = db.models


users.belongsToMany(products, {through: "user_products", timestamps:false})
products.belongsToMany(users, {through: "user_products", timestamps:false})

users.belongsToMany(orders, {through:"user_orders", timestamps:true})
orders.belongsToMany(users, {through:"user_orders", timestamps:true})

users.hasOne(carts)
carts.belongsTo(users)

users.hasMany(orders)
orders.belongsTo(users)

users.hasMany(reviews)
reviews.belongsTo(users)

products.belongsTo(categories)
categories.hasMany(products)

products.belongsToMany(carts, {through: "cartItems", timestamps:true})
carts.belongsToMany(products, {through: "cartItems", timestamps:true})

products.belongsToMany(orders, {through: "product_order", timestamps:false})
orders.belongsToMany(products, {through: "product_order", timestamps:false})

products.hasMany(reviews)
reviews.belongsTo(products)


const loadData = () => {
  
    test_categories.map(async(category) => {
        
        await categories.create({
            category_name: category.category_name
        })
    })
}


module.exports = {
    ...db.models,
    db,
    loadData
};