const {Model,DataTypes}= require("sequelize")
const sequelize = require("../../bin/db-connection");

class USERS extends Model{};

USERS.init({
    userId:{
        primaryKey : true,
        type : DataTypes.STRING(),
    },
    userName :{
        type: DataTypes.STRING(),
        allowNull:false,
        unique: true
    },
    password:{
        type : DataTypes.STRING(),
        allowNull: false

},
},{
    timestamps: true,
    paranoid: true,
    name: "users",
    sequelize
})

module.exports = USERS;