import React, { useEffect, useState } from "react";
import { getSaale, releaseSaal } from "../services/api.js";

const SaalListe = () => {
    const [saale, setSaale] = useState([]);

    useEffect(() => {
        // lädt Kinosäle beim Laden der Komponente
        async function loadSaele() {
            const data = await getSaale();
            setSaele(data);
        }
        loadSaele();
    }, []);

    const handleFreigeben = async (id) => {
        await releaseSaal(id);
        setSaale(await getSaale()); // Liste aktualisieren
    };

    return (
        <div>
            <h2>Kinosäle</h2>
            {saele.length === 0 ? (
                <p>Keine Säle verfügbar.</p>
            ) : (
                saele.map((saal) => (
                    <div key={saal.id} style={{ border: "1px solid black", padding: 10, margin: 10 }}>
                        <h3>{saal.name}</h3>
                        {saal.Reihen.map((reihe) => (
                            <div key={reihe.id} style={{ marginLeft: 20 }}>
                                <h4>Reihe {reihe.nummer} ({reihe.kategorie})</h4>
                                <div style={{ display: "flex", gap: 5 }}>
                                    {reihe.Sitzplaetze.map((sitz) => (
                                        <div key={sitz.id} style={{
                                            width: 30, height: 30,
                                            border: "1px solid gray",
                                            backgroundColor: sitz.status === "frei" ? "green" : "red",
                                            textAlign: "center",
                                        }}>
                                            {sitz.nummer}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            )}
        </div>
    );
};

export default SaalListe;
