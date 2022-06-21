const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('categories', {
        category_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{timestamps:false})
}