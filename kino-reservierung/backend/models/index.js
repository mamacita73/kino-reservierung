const SaalDBS = require("./saal/SaalDBS");
const ReiheDBS = require("./saal/ReiheDBS");
const SitzplatzDBS = require("./saal/SitzplatzDBS");

const BuchungDBS = require("./buchung/BuchungDBS");
const ReservierungDBS = require("./reservierung/ReservierungDBS");
const VorfuehrungDBS = require("./reservierung/VorfuehrungDBS");

module.exports = { SaalDBS, ReiheDBS, SitzplatzDBS, BuchungDBS, ReservierungDBS, VorfuehrungDBS };
