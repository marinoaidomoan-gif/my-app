import { useState } from "react";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Bienvenue dans votre espace</h2>
      ) : (
        <h2>Veuillez vous connecter</h2>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Déconnexion" : "Connexion"}
      </button>
    </div>
  );
}
