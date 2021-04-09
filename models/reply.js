const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Reply extends Model {}

Reply.init(
    {
        id:{
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name:{
          type: DataTypes.STRING,
          allowNull: false,  
        },
        post:{
          type: DataTypes.STRING,
          allowNull: false, 
         },
         user_id: {
           type: DataTypes.INTEGER,
           foreignKey: true,
         }
    },
    {
      sequelize,
    }
)




module.exports = Reply;