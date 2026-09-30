// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import Formulaire from './Formulaire'
// import Login from "./Login";
// import ListeNoms from './ListeNoms'

// function UserCard(props) {
//   return (
//     <div>
//       <h3>Nom : {props.name}</h3>
//       <p>Age : {props.age}</p>
//     </div>
//   );
// }

// function Counter(){
//   const [count, setCount] = useState(0);

//   return(
//     <div>
//       <p>Compteur : {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <UserCard name="Vanessa" age={28} />
//       <UserCard name="Nathan" age={35} />

//       <Counter />

//       <Formulaire />

//       <Login />

//       <ListeNoms />
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">À propos</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}


function App() {
  return (
    <>
    <Menu />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
  
}

export default App;
