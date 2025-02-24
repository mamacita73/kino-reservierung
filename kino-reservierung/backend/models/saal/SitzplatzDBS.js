const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Reihe = require("./ReiheDBS");

const SitzplatzDBS = sequelize.define("sitzplatz", {
    nummer: { type: DataTypes.INTEGER, allowNull: false }, // Nummer des Sitzplatzes innerhalb der Reihe
    status: {
        type: DataTypes.ENUM("FREI", "RESERVIERT", "GEBUCHT"),
        defaultValue: "FREI"
    }
});

// Beziehungen setzen
Reihe.hasMany(SitzplatzDBS, { foreignKey: "reiheId", onDelete: "CASCADE" });
SitzplatzDBS.belongsTo(Reihe, { foreignKey: "reiheId" });


module.exports = SitzplatzDBS;
