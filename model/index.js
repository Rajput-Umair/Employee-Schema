const sequelize = require("../bin/db-connection");

const USERS = require("./defination/user")

const models ={ 
    users : USERS
}

const db= {};
db.sequelize =sequelize;
sequelize.models =models

module.exports = {db,models}