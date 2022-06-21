const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('products', {
        product_name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        product_image:{
            type:DataTypes.TEXT,
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        stock:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        num_reviews:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        rate:{
            type:DataTypes.FLOAT,
            defaultValue:0
        }
    },{timestamps:false})
}