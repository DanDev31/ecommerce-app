const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('users', {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isEmail:true
            },
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            unique:true
        },
        address:{
            type:DataTypes.STRING,
        },
        isAdmin:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
    }, {timestamps:false})
}