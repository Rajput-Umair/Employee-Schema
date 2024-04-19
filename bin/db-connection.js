const {Sequelize}= require("sequelize")
require("dotenv").config();

const sequelize = new Sequelize({
    port : process.env.DB_PORT,
    host : process.env.DB_HOST,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    dialect : process.env.DB_DIALECT,
    logging: false
})

sequelize.authenticate().then(()=>{
    console.log("database is connected");
}).catch((err)=>{
    console.error("error",err)
})
 module.exports= sequelize
