const express = require("express");
const router = express.Router();

// Saal-Module
const saalRoutes = require("./saal/saal");
const reiheRoutes = require("./saal/reihen");
const sitzplatzRoutes = require("./saal/sitzplatz");

// Buchung & Reservierung
const buchungRoutes = require("./buchung/buchung");
const reservierungRoutes = require("./reservierung/reservierung");
const vorfuehrungRoutes = require("./reservierung/vorfuehrung");

// API-Pfade definieren
router.use("/saal", saalRoutes);
router.use("/reihen", reiheRoutes);
router.use("/sitzplaetze", sitzplatzRoutes);
router.use("/buchung", buchungRoutes);
router.use("/reservierung", reservierungRoutes);
router.use("/vorfuehrung", vorfuehrungRoutes);

module.exports = router;
