const routes = require('express').Router()
const { Router } = require('express')
const { products, categories } = require('../db')

routes.get('/', async(req, res) => {
    try {

        const { category } = req.query
        if(category) {
            
            const foundedCategories = await categories.findAll({
                where:{
                    category_name: category
                }
            })
            
            const category_id = foundedCategories[0].id

           

            const productsByCategory = await products.findAll({
                where:{
                    categoryId:category_id
                }
            })
                res.send(productsByCategory)
            }

        
    } catch (error) {
        console.log("Fail searching data by category!")
    }
    
})

routes.get('/latestproducts', async(req,res) => {
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
        // const { 
        //     product_name,
        //     description,
        //     product_image,
        //     price,
        //     stock,
        //     category
        //  } = req.body


        //////////To load bulk of products, Remove when app is done!!!!/////////////////

         const bulkProducts = req.body
         
         bulkProducts.forEach(async(product) => {
            const { 
                product_name,
                description,
                product_image,
                price,
                stock,
                category
             } = product

             if(!product_name || !description || !product_image || !product_image || !price || !stock || !category) return res.json({msg: "Incomplete data"})

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

         })


    /////////////////////// Uncomment when end application//////////////////////////////
        //  if(!product_name || !description || !product_image || !product_image || !price || !stock || !category) return res.json({msg: "Imcomplete data"})
         
        //  const foundProduct = await products.findOne({
        //     where:{
        //         product_name 
        //     }
        //  })

       
        //  const foundCategory = await categories.findOne({
        //     where:{
        //         category_name: category 
        //     }
        //  })

        //  if(!foundCategory) return res.json({msg: "Category not found"})

        //  const categoryId = foundCategory.id

        //  if(!foundProduct){
        //     await products.create({
        //         product_name,
        //         description,
        //         product_image,
        //         price,
        //         stock,
        //         categoryId
        //     })
        //  } else {
        //     res.json("Product already exists.")
        //  }

        //  res.status(200).send("Product created successfully!")

         res.status(200).send("Products created successfully!")


    } catch (error) {
        console.log(error)
    }

})

module.exports = routes;