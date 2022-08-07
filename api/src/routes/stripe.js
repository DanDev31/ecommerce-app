const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)  
const cors = require('cors')


router.use(cors())

router.post('/checkout', async(req, res) => {
    const {id, amount} = req.body
    const parsedAmount = Number(amount) * 100
    console.log(parsedAmount)
    console.log(typeof parsedAmount)
    try {
        const paymentInfo = await stripe.paymentIntents.create({
            amount:parsedAmount,
            currency: "USD",
            description: "Order",
            payment_method: id,
            confirm: true, 
        })
        console.log(paymentInfo)
        res.status(200).json({message:'Successful payment'})
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router