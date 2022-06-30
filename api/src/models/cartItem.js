const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('cartItems',{
        quantity:{
            type:DataTypes.INTEGER,
            defaultValue: 0,
            allowNull:false
        }
    },{timestamps:false})
}