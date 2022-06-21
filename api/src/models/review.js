const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('reviews', {
        review_content:{
            type:DataTypes.STRING,
            allowNull:false
        },
        rate:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{timestamps:false})
}