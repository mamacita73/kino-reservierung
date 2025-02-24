const express = require("express");
const ReihenDBS = require("../../models/saal/ReiheDBS");

const router = express.Router();

//  neue Sitzreihe anlegen
router.post("/", async (req, res) => {
    try {
        const reihe = await ReihenDBS.create({
            saalId: req.body.saalId,
            nummer: req.body.nummer,
            sitzplaetze: req.body.sitzplaetze,
            kategorie: req.body.kategorie
        });
        res.status(201).json(reihe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
