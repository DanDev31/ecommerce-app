const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
    const authHeader =  req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET_PHRASE, (err, user) => {
            if(err) res.status(403).json('Token is not valid!')
            req.user = user
            next()
        })
    }else{
        return res.status(401).send('You are not authenticated')
    }
}

//Middleware to verify token and credentials

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.id === Number(req.params.id) || req.user.isAdmin){
            next()
        }else{
            res.status(403).send('You are not allowed to do that!')
        }
    })
}

//Middleware to verify if is admin 

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).send('You are not allowed to do that!')
        }
    })
}

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}