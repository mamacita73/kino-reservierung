const express = require("express");
const SaalDBS = require("../../models/saal/SaalDBS"); // Großbuchstaben beachten

const router = express.Router();

// neuen Saal erstellen
router.post("/", async (req, res) => {
    try {
        const { name, reihen } = req.body; // Name des Saals + Reihenstruktur
        const saal = await SaalDBS.create(req.body);

        // Reihen & Sitzplätze erstellen
        for (const reiheData of reihen) {
            const reihe = await Reihe.create({
                saalId: saal.id,
                nummer: reiheData.nummer,
                kategorie: reiheData.kategorie,
            });

            // Sitzplätze für jede Reihe hinzufügen
            for (let i = 1; i <= reiheData.anzahlPlaetze; i++) {
                await Sitzplatz.create({
                    reiheId: reihe.id,
                    nummer: i,
                    status: "frei", // Standardstatus: frei
                });
            }
        }

        res.status(201).json(saal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// List der Kinosäle
router.get("/", async (req, res) => {
    try {
        const saele = await SaalDBS.findAll({
            include: {
                model: Reihe,
                include: Sitzplatz,
            },
        });
        res.json(saale);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Saal für den Verkauf freigeben
router.put("/:id/freigeben", async (req, res) => {
    try {
        const saal = await SaalDBS.findByPk(req.params.id);
        if (!saal) return res.status(404).json({ error: "Saal nicht gefunden" });

        saal.freigegeben = true;
        await saal.save();
        res.json({ success: true, message: "Saal freigegeben!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
