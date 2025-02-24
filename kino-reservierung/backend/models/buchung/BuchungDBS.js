const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");


const BuchungDBS = sequelize.define("buchung", {
    kunde: { type: DataTypes.STRING, allowNull: false },
    vorstellungId: { type: DataTypes.INTEGER, allowNull: false },
    preis: { type: DataTypes.FLOAT, allowNull: false },
    status: { type: DataTypes.ENUM("RESERVIERT", "GEKAUFT"), defaultValue: "RESERVIERT" },
});

module.exports = BuchungDBS;
