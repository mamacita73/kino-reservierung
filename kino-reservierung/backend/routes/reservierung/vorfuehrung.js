const express = require("express");
const VorfuehrungDBS = require("../../models/reservierung/VorfuehrungDBS");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const vorfuehrung = await VorfuehrungDBS.create(req.body);
        res.status(201).json(vorfuehrung);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
