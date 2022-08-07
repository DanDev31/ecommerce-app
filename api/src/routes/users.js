const router = require('express').Router()
const { users } = require('../db')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const passport = require('passport')



//Google Auth

const CLIENT_URL = "http://localhost:3000/"


router.get("/login/success", (req, res) => {
    console.log("REQUEST:", req._passport)
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        //cookies: req.cookies
      });
    }
    res.status(404).send("Fail")
  });

  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });

  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });

  router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

  router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: CLIENT_URL,
      failureRedirect: "/login/failed",
    })
  );


router.post('/register', async(req, res) =>{
    const { name, lastName, email, password } = req.body
    const copyPassword = password
    try {

        const findUser = await users.findOne({
            where:{
                email
            }
        })

        if(findUser) return res.status(500).json({message:"User Already exists, please login"})

            const newUser = await users.create({
                name,
                lastName,
                email,
                password:CryptoJS.AES.encrypt(copyPassword, process.env.SECRET_PHRASE).toString()
        })

        const accessToken = jwt.sign(
            {
                name
            },
                process.env.JWT_SECRET_PHRASE,
            {
                expiresIn:'3d'
            }
            )

        const { password, ...others } = newUser.dataValues
        res.status(200).json({...others, accessToken})
        
    } catch (error) {       
        res.status(500).json(error)
    }
})


router.post('/login', async(req, res) => {
    console.log(req.body.email)
    try {
        const foundUser = await users.findOne({
            where:{
                email: req.body.email
            }
            
        })
        
        if(!foundUser) return res.status(401).json({message:"Email or password invalid"})
        
        const hashedPassword = CryptoJS.AES.decrypt(foundUser.password, process.env.SECRET_PHRASE).toString(CryptoJS.enc.Utf8)

        if(hashedPassword !== req.body.password) return res.status(401).json({message:"Email or password invalid"})
        
        const accessToken = jwt.sign(
        {
            id:foundUser.id,
            isAdmin:foundUser.isAdmin
        },
            process.env.JWT_SECRET_PHRASE,
        {
            expiresIn:'3d'
        }
        )
        
        const { password, ...others } = foundUser.dataValues
        res.status(200).send({... others, accessToken})
    } catch (error) {
        res.status(500).json(error)
    }
})


router.put('/:id', verifyTokenAndAuthorization, async(req, res) => {
    const { id } = req.params
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PHRASE).toString()
    }

    try {

        if(req.body.email){
            const updatedUser = await users.update(
                {
                    email:req.body.email
                },
                {
                    where:{id} 
                })

            res.status(200).send(updatedUser)
        }

        if(req.body.password){
            const updatedUser = await users.update(
                {
                    password:req.body.password
                },
                {
                    where:{id} 
                })

            res.status(200).send(updatedUser)
        }

    } catch (error) {
        res.status(500).send(error)
    }
})


router.delete('/:id', verifyTokenAndAuthorization, async(req, res) => {
    const { id } = req.params
    try {
        await users.destroy({
            where:{
                id
            }
        })
        res.status(200).send("User has been deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get user by admin

router.get('/find/:id', verifyTokenAndAdmin, async(req, res) => {
    const { id } = req.params
    try {
        const user = await users.findByPk(id)
        const { password, ...others } = user.dataValues
        res.status(200).send(others)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.get('/', async(req, res) => {
    try {
        const allUsers = await users.findAll()
        console.log(allUsers)
        res.status(200).send(allUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router