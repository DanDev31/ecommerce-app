const { Sequelize } = require('sequelize')
const user = require('./models/user')
const product = require('./models/product')
const category = require('./models/category')
const order = require('./models/order')
const review = require('./models/review')
const test_products = require('./data')

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
order(db)
review(db)

const {users, products, categories, orders, reviews} = db.models

users.belongsToMany(products, {through: "user_products", timestamps:false})
products.belongsToMany(users, {through: "user_products", timestamps:false})

users.hasMany(orders)
orders.belongsTo(users)

users.hasMany(reviews)
reviews.belongsTo(users)

products.belongsTo(categories)
categories.hasMany(products)

products.belongsToMany(orders, {through: "product_order", timestamps:false})
orders.belongsToMany(products, {through: "product_order", timestamps:false})

products.belongsToMany(reviews, {through: "product_review", timestamps:false})
reviews.belongsToMany(products, {through: "product_review", timestamps:false})

const loadData = () => {
    test_products.map(async(product) => {
        
        await products.create({
            product_name: product.product_name,
            description:product.description,
            product_image:product.product_image,
            price:product.price,
            stock:product.stock,
            num_reviews:product.num_reviews,
            rate:product.rate
        })
    })
}


module.exports = {
    ...db.models,
    db,
    loadData
};