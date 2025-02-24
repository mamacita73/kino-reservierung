const API_URL = "http://localhost:7000"; // Backend-URL





// alle Kinosäle
export const getSaale = async () => {
    try {
        const res = await fetch(`${API_URL}/api/saal`);
        return res.json();
    } catch (e) {
        console.error("Fehler beim Laden der Säle: ", e);
        return [];
    }
};

// erstellt einen neuen Saal
export const createSaal = async (name) => {
    const res = await fetch(`${API_URL}/api/saal`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    });
    return res.json();
};

// Saal freigeben (Ticketverkauf)
export const releaseSaal = async (id) => {
    const res = await fetch(`${API_URL}/api/saal/${id}/freigeben`, {
        method: "PUT",
    });
    return res.json();
};

// neue Stitzreihe hinzufügen
export const addReihe = async (saalId, nummer, sitzplaetze, kategorie) => {
    const res = await fetch(`${API_URL}/api/reihe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ saalId, nummer, sitzplaetze, kategorie })
    });
    return res.json();
};

// Sitzplatz hinzufügen
export const addSitzplatz = async (reiheId, nummer) => {
    const res = await fetch(`${API_URL}/api/sitzplatz`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reiheId, nummer })
    });
    return res.json();
};

// Sitzplatz reservieren
export const reserveSitzplatz = async (id) => {
    const res = await fetch(`${API_URL}/api/sitzplatz/${id}/reservieren`, {
        method: "PUT",
    });
    return res.json();
};

// Sitzplatz buchen
export const bookSitzplatz = async (id) => {
    const res = await fetch(`${API_URL}/api/sitzplatz/${id}/buchen`, {
        method: "PUT",
    });
    return res.json();
};