const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");


const SaalDBS = sequelize.define("saal", {
    name: { type: DataTypes.STRING, allowNull: false }, // Name des Saals
    reihenanzahl: { type: DataTypes.INTEGER, allowNull: false } // Anzahl der Reihen im Saal
});

module.exports = SaalDBS;
