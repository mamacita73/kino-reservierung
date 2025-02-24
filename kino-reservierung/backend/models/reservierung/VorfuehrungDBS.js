const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const VorfuehrungDBS = sequelize.define("vorfuehrung", {
    film: { type: DataTypes.STRING, allowNull: false },
    datum: { type: DataTypes.DATE, allowNull: false }
});

module.exports = VorfuehrungDBS;
