const { Sequelize } = require('sequelize')
const user = require('./models/user')
const product = require('./models/product')
const category = require('./models/category')
const cart = require('./models/cart')
const order = require('./models/order')
const review = require('./models/review')

const { preLoadedProducts, preLoadedCategories } = require('./data')

require('dotenv').config()

const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env

 

// const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:${DB_HOST}/api_ecommerce`,
// {   
//     logging: false, 
//     native: false 
// })


let db =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/api_ecommerce`,
        { logging: false, native: false }
      );


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

    preLoadedCategories.map(async(category) => {
        await categories.create({
            category_name: category.category_name
        })
    })
    
   
    preLoadedProducts.forEach(async(product) => {
        const { 
            product_name,
            brand,
            description,
            product_image,
            price,
            stock,
            category
         } = product

         
         const foundProduct = await products.findOne({
            where:{
                product_name 
            }
         })

         const foundCategory = await categories.findOne({
            where:{
                category_name: category 
            }
         })


         const categoryId = foundCategory.id

         if(!foundProduct){
            await products.create({
                product_name,
                brand,
                description,
                product_image,
                price,
                stock,
                categoryId
            })
         } else {
            console.log("Product already exists.")
         }

     })


}


module.exports = {
    ...db.models,
    db,
    loadData
};