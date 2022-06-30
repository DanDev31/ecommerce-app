const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('orderItems', {
       
    },{timestamps:false})
}