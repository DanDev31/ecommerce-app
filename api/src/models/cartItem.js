const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('cartItems',{
        quantity:{
            type: DataTypes.INTEGER
        }
    },{timestamps:false})
}