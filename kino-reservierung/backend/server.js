const express = require("express"); // Erstellt Webserver mit GET, POST usw.
const dotenv = require("dotenv"); // Umgebungsvariablen verwalten (z. B. Anmeldedaten nicht im festen Code)
const cors = require("cors"); // Erlaubt API-Anfragen von Frontend (React) -> Express
const { Pool } = require("pg"); // PostgreSQL Verbindung importieren

dotenv.config(); // Lädt Konfigurationen aus der .env-Datei
const app = express();

app.use(cors()); // Erlaubt Cross-Origin-Anfragen
app.use(express.json()); // Verarbeitung von JSON

// Test-Route
app.get("/", (req, res) => {
    res.send("Kino Reservierungssystem läuft!");
});

// PostgreSQL Verbindung
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

// Test-Route für die Datenbank
app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({ success: true, time: result.rows[0] });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Server starten
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`🚀 Server läuft auf Port ${PORT}`));
