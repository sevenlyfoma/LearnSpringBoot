//https://www.w3schools.com/REACT/react_useeffect.asp

import { useState, useEffect  } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
  <div>
    <h2>My favorite color is {color}! Gotten from state</h2>
    <button
        type="button"
        onClick={() => {setColor("blue"); updateColor()}}
    >Blue</button>
    <h2>My {car.brand}</h2>
    <p>
        It is a {car.color} {car.model} from {car.year}.
    </p>
    <p>Gotten from an object in state</p>

  </div>
  )
  
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

function HooksDemo() {
     return (
            <div>
                 <FavoriteColor/>
                 <Timer/>
            </div>
        )
}



export default  HooksDemo