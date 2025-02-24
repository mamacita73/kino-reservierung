const express = require("express");
const ReservierungDBS = require("../../models/reservierung/ReservierungDBS");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const reservierung = await ReservierungDBS.create(req.body);
        res.status(201).json(reservierung);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
