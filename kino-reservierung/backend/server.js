
const express = require("express"); //erstellt Webservers get, post usw
const dotenv = require("dotenv"); // Umgebungsvariablen verwalten zB anmeldedaten nicht im fest code
const cors = require("cors"); // erlaubt api anfragen von frontend react -> express

dotenv.config(); //lädt Konfigurationen, falls vorhanden
const app = express();


app.use(cors()); // erlaubt Cross-Origin-Anfragen
app.use(express.json()); // verarbeitung von json

// Test-Route
app.get("/", (req, res) => {
    res.send("Kino Reservierungssystem läuft!");
});

// Server starten
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
