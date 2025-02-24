const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");


const ReservierungDBS = sequelize.define("reservierung", {
    kunde: { type: DataTypes.STRING, allowNull: false },
    status: {
        type: DataTypes.ENUM("RESERVIERT", "GEBUCHT"),
        defaultValue: "RESERVIERT"
    }
});

module.exports = ReservierungDBS;
