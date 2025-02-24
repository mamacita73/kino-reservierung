const express = require("express");
const SitzplatzDBS = require("../../models/saal/SitzplatzDBS");
const router = express.Router();

// Sitzplatz erstellen
router.post("/", async (req, res) => {
    try {
        const sitzplatz = await SitzplatzDBS.create({
            reiheId: req.body.reiheId,
            nummer: req.body.nummer
        });
        res.status(201).json(sitzplatz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Sitzplatz reservieren
router.put("/:id/reservieren", async (req, res) => {
    try {
        const sitzplatz = await SitzplatzDBS.findByPk(req.params.id);
        if (!sitzplatz) return res.status(404).json({ error: "Sitzplatz nicht gefunden" });

        sitzplatz.status = "RESERVIERT";
        await sitzplatz.save();
        res.json({ success: true, message: "Sitzplatz reserviert!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Sitzplatz buchen
router.put("/:id/buchen", async (req, res) => {
    try {
        const sitzplatz = await SitzplatzDBS.findByPk(req.params.id);
        if (!sitzplatz) return res.status(404).json({ error: "Sitzplatz nicht gefunden" });

        sitzplatz.status = "GEBUCHT";
        await sitzplatz.save();
        res.json({ success: true, message: "Sitzplatz gebucht!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;