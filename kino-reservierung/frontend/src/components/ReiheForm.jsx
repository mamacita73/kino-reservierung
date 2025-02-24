import React, { useState } from "react";
import { addReihe } from "../services/api.js";

const ReiheForm = ({ saalId, onReiheAdded }) => {
    const [nummer, setNummer] = useState("");
    const [sitzplaetze, setSitzplaetze] = useState("");
    const [kategorie, setKategorie] = useState("PARKETT");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addReihe(saalId, nummer, sitzplaetze, kategorie);
        onReiheAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>➕ Sitzreihe hinzufügen</h3>
            <input type="number" placeholder="Reihen-Nummer" onChange={(e) => setNummer(e.target.value)} required />
            <input type="number" placeholder="Sitze" onChange={(e) => setSitzplaetze(e.target.value)} required />
            <select onChange={(e) => setKategorie(e.target.value)}>
                <option value="PARKETT">Parkett</option>
                <option value="LOGE">Loge</option>
                <option value="LOGE_SERVICE">Loge mit Service</option>
            </select>
            <button type="submit">Hinzufügen</button>
        </form>
    );
};

export default ReiheForm;
