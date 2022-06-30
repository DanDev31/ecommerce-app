const router = require('express').Router()
const { users } = require("../db");


router.get('/', async (req, res) =>{
    const user = await users.findAll({})
    res.send(user)
})



module.exports = router