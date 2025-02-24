const sequelize = require("./config/db");

const models = require("./models");

sequelize.sync({ force: true }).then(() => {
    console.log("Datenbank erfolgreich synchronisiert!");
    process.exit();
}).catch(err => {
    console.error("Fehler beim Synchronisieren:", err);
    process.exit(1);
});
