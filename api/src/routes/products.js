const routes = require('express').Router()
const { Op } = require("sequelize");
const { products, categories } = require('../db')
const randomArray = require('../helpers/randomArray')

routes.get('/', async(req, res) => {
    const { category, search, brandValue } = req.query
    try {

        if(search){
            const searchResults = await products.findAll({
                where:{
                    product_name: {
                        [Op.iLike]: `%${search}%`
                    }
                }
            })

            if(searchResults.length > 0){  
                
                if(brandValue){
                    const filteredResults = searchResults.filter(item => brandValue.includes(item.brand))
                    res.status(200).send(filteredResults)
                }
                 res.send(searchResults)

            }else{
                res.send([])
            }

        }


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

            
            if(brandValue){
                const filterByCategory = productsByCategory.filter(item => brandValue === item.brand)
                res.status(200).send(filterByCategory)
            }
                res.status(200).send(productsByCategory)
 
            }

          

        
    } catch (error) {
        console.log("Fail searching data")
    }
    
})



routes.get('/latestproducts', async(req,res) => {
    try {
        let allProducts = await products.findAll({})
        if(!allProducts) res.status(404).send("Data not found!")

        let randomArrayResult = randomArray(allProducts)

        res.status(200).send(randomArrayResult)
    } catch (error) {
        console.log("Fail searching data!")
    }
})


routes.get('/detail/:id', async (req, res) => {
    const { id } = req.params
    if(id){
        try {

            const productDetail = await products.findByPk(id)
            if(!productDetail) res.status(404).send("Data not found!")
            
            res.send(productDetail)
        } catch (err) {
            console.log(err)
        }
    }else{
        res.status(404).send("id not valid")
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
                brand,
                description,
                product_image,
                price,
                stock,
                category
             } = product

             if(!product_name || !brand || !description || !product_image || !product_image || !price || !stock || !category) return res.json({msg: "Incomplete data"})

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
                    brand,
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