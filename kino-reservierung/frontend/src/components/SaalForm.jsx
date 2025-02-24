import React, { useState } from "react";
import { createSaal } from "../services/api.js";

const SaalForm = ({ onSaalCreated }) => {
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createSaal(name);
        setName(""); // Formular zurücksetzen
        onSaalCreated(); // Saal-Liste aktualisieren
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Neuer Saal</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name des Saals"
                required
            />
            <button type="submit">Erstellen</button>
        </form>
    );
};

export default SaalForm;
