const routes = require('express').Router()
const { products, categories } = require('../db')

routes.get('/', async(req, res) => {
    try {
        let latestProducts = await products.findAll({})
        if(!latestProducts) res.status(404).send("Data not found!")

        res.status(200).send(latestProducts)
    } catch (error) {
        console.log("Fail searching data!")
    }
    
})

routes.post('/newproduct', async(req, res) => {
    try {
        const { 
            product_name,
            description,
            product_image,
            price,
            stock,
            category
         } = req.body
    
         if(!product_name || !description || !product_image || !product_image || !price || !stock || !category) return res.json({msg: "Imcomplete data"})
         
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

         if(!foundCategory) return res.json({msg: "Category not found"})

         const categoryId = foundCategory.id

         console.log(categoryId)

         if(!foundProduct){
            await products.create({
                product_name,
                description,
                product_image,
                price,
                stock,
                categoryId
            })
         } else {
            res.json("Product already exists.")
         }

         res.status(200).send("Product created successfully!")

    } catch (error) {
        console.log(error)
    }

})

module.exports = routes;