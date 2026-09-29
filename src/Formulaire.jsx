import { useState } from "react";

export default function Formulaire() {
    const [nom, setNom] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        alert("Bonjour " + nom);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Entrez votre nom"
            />
            <button type="submit">Envoyer</button>
        </form>    
    );
}