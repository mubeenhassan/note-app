import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Todo = db.define('todos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    class:{
        type: DataTypes.STRING
    },
    attachment:{
        type: DataTypes.BLOB
    }
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Todo;