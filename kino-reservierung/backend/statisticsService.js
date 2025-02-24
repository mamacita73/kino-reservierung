const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB für Statistiken verbunden!"))
    .catch(err => console.error("Fehler bei der MongoDB-Verbindung:", err));

// Schema für Statistikdaten
const StatistikSchema = new mongoose.Schema({
    film: String,
    vorstellung: String,
    eingenommen: Number, // Einnahmen in €
    ticketsVerkauft: Number,
    datum: Date
});

const Statistik = mongoose.model("Statistik", StatistikSchema);

// Funktion zum Speichern einer Statistik
const speichereStatistik = async (film, vorstellung, eingenommen, ticketsVerkauft) => {
    const statistik = new Statistik({ film, vorstellung, eingenommen, ticketsVerkauft, datum: new Date() });
    await statistik.save();
    console.log(`Statistik für ${film} gespeichert!`);
};

module.exports = { speichereStatistik };
