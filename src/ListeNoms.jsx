export default function ListeNoms() {
  const noms = ["Marino", "Allons Allons", "Le Père Kdos", "JB"];

  return (
    <ul>
      {noms.map((nom, index) => (
        <li key={index}>{nom}</li>
      ))}
    </ul>
  );
}
