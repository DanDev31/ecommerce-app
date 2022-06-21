const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('orders', {
        order_amount:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        track_number:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{timestamps:false})
}