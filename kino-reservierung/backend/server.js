const express = require("express"); // Erstellt Webserver mit GET, POST usw.
const dotenv = require("dotenv"); // Umgebungsvariablen laden (.env-Datei)
const cors = require("cors"); // Erlaubt API-Anfragen von Frontend (React)
const { Pool } = require("pg"); // PostgreSQL Verbindung
const { speichereStatistik } = require("./statisticsService");
const amqp = require("amqplib"); // RabbitMQ-Bibliothek
const apiRoutes = require("./routes"); // Alle API-Routen gebündelt
const { SaalDBS, ReiheDBS, SitzplatzDBS, BuchungDBS, ReservierungDBS, VorfuehrungDBS } = require("./models");


dotenv.config(); // Umgebungsvariablen laden
const app = express(); // Express-Server erstellen

// Middleware-Konfiguration
app.use(cors()); // Erlaubt Cross-Origin-Anfragen
app.use(express.json()); // JSON-Body-Parsing für API-Anfragen

app.use("/api", apiRoutes); // API-Routen einbinden

// Test-Route
app.get("/", (req, res) => {
    res.send("Kino Reservierungssystem läuft!");
});

// PostgreSQL Verbindungspool für die gesamte Anwendung
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

pool.connect()
    .then(() => console.log("PostgreSQL verbunden!"))
    .catch(err => console.error("PostgreSQL-Fehler:", err.message));

// Test-Route für die Datenbank
app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({ success: true, time: result.rows[0] });
    } catch (error) {
        console.error("Datenbankfehler:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Verbindung zum RabbitMQ
async function connectRabbitMQ() {
    try {
        const connection = await amqp.connect("amqp://rabbitmq");
        const channel = await connection.createChannel();
        await channel.assertQueue("kinoQueue", { durable: false });

        console.log("Verbunden mit RabbitMQ");

        // Beispiel: Nachricht senden
        channel.sendToQueue("kinoQueue", Buffer.from(JSON.stringify({ message: "Hallo von RabbitMQ" })));
        console.log("Nachricht an RabbitMQ gesendet!");

        return channel;
    } catch (error) {
        console.error("Fehler bei RabbitMQ:", error);
    }
}

// Server starten & RabbitMQ verbinden
const PORT = process.env.PORT || 7000;
app.listen(PORT, async () => {
    console.log(`Server läuft auf Port ${PORT}`);
    await connectRabbitMQ(); // RabbitMQ direkt nach Serverstart verbinden
});
