const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('orders', {
        order_amount:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{timestamps:false})
}