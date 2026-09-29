import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Formulaire from './Formulaire'

function UserCard(props) {
  return (
    <div>
      <h3>Nom : {props.name}</h3>
      <p>Age : {props.age}</p>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <UserCard name="Vanessa" age={28} />
      <UserCard name="Nathan" age={35} />

      <Counter />

      <Formulaire />
    </div>
  );
}

