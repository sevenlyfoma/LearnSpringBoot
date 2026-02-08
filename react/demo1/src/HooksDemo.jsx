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

function Timer2() {
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount2((count2) => count2 + 1);
    }, 1000);
  }, []); // <-- Empty brackets prevent reuse

  return <h1>I've rendered {count2} times!</h1>;
}


function Counter() {
  const [count3, setCount3] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count3 * 2);
  }, [count3]); // <- add the count variable here

  return (
    <>
      <p>Count: {count3}</p>
      <button onClick={() => setCount3((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

function Timer3() {
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount4((count4) => count4 + 1);
    }, 1000);

    return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count4} times!</h1>;
}

function HooksDemo() {
     return (
            <div>
                 <FavoriteColor/>
                 {/* <Timer/> */}
                 <Timer2/>
                 <Counter/>
                 <Timer3/>
            </div>
        )
}



export default  HooksDemo