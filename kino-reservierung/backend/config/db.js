require("dotenv").config();
//const dotenv = require("../../config/.env");
const { Sequelize } = require("sequelize");



const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER || "postgres",
    process.env.PG_PASSWORD || "fhdwfhwd",
    {
        host: process.env.PG_HOST,
        dialect: "postgres",
        logging: false,
        //port: process.env.PG_PORT
    }
);

module.exports = sequelize;
