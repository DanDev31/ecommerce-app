const { Sequelize } = require('sequelize')
const user = require('./models/user')
const product = require('./models/product')
const category = require('./models/category')
const cart = require('./models/cart')
const cartItem = require('./models/cartItem')
const order = require('./models/order')
const orderItem = require('./models/orderItem')
const review = require('./models/review')

const { test_products, test_categories } = require('./data')

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
cartItem(db)
order(db)
orderItem(db)
review(db)

const { users, products, carts, cartItems, categories, orders, orderItems, reviews } = db.models

////////User Associations////////
users.belongsToMany(products, {through: "user_products", timestamps:false})
products.belongsToMany(users, {through: "user_products", timestamps:false})

users.hasOne(carts)
carts.belongsTo(users)

users.hasMany(orders)
orders.belongsTo(users)

users.hasMany(reviews)
reviews.belongsTo(users)


/////////Product Associations///////////

products.belongsTo(categories)
categories.hasMany(products)

cartItems.hasOne(products)
products.belongsTo(cartItems)

orderItems.hasOne(products)
products.belongsTo(orderItems)

// products.belongsToMany(orders, {through: "product_order", timestamps:false})
// orders.belongsToMany(products, {through: "product_order", timestamps:false})

products.hasMany(reviews)
reviews.belongsTo(products)


///////Cart Associations/////////

carts.hasMany(cartItems)
cartItems.belongsTo(carts)


/////////Order Associations///////////

orders.hasMany(orderItems)
orderItems.belongsTo(orders)




const loadData = () => {
    // test_products.map(async(product) => {
        
    //     await products.create({
    //         product_name: product.product_name,
    //         description:product.description,
    //         product_image:product.product_image,
    //         price:product.price,
    //         stock:product.stock,
    //         num_reviews:product.num_reviews,
    //         rate:product.rate,
    //     })
    // })

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