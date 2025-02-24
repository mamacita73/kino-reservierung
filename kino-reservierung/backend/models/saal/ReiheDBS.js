const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Saal = require("./SaalDBS");

const ReiheDBS = sequelize.define("reihe", {
    nummer: { type: DataTypes.INTEGER, allowNull: false }, // Nummer der Reihe
    sitzplaetze: { type: DataTypes.INTEGER, allowNull: false }, // Anzahl Sitzplätze pro Reihe
    kategorie: {
        type: DataTypes.ENUM("PARKETT", "LOGE", "LOGE_SERVICE"),
        allowNull: false
    }
});

// Beziehungen zwischen Saal und Reihen setzen
Saal.hasMany(ReiheDBS, { foreignKey: "saalId", onDelete: "CASCADE" });
ReiheDBS.belongsTo(Saal, { foreignKey: "saalId" });

module.exports = ReiheDBS;
