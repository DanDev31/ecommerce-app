const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('carts',{
        
    },{timestamps:false})
}