const express = require("express");
const BuchungDBS = require("../../models/buchung/BuchungDBS");
const sendMessage = require("../../message-qeue/rabbitProducer");

const router = express.Router();

router.post("/", async (req, res) => {

    try {
        const buchung = await BuchungDBS.create(req.body);
        await sendMessage("buchung", buchung);

        res.status(201).json(buchung);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
