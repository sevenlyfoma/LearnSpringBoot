//https://www.w3schools.com/REACT/react_useref.asp

import { useState, useEffect, useContext, createContext,  useRef  } from 'react';
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

  return <h2>I've rendered {count} times!</h2>;
}

function Timer2() {
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount2((count2) => count2 + 1);
    }, 1000);
  }, []); // <-- Empty brackets prevent reuse

  return <h2>I've rendered {count2} times!</h2>;
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

  return <h2>I've rendered {count4} times!</h2>;
}

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Max");

  return (
    <UserContext.Provider value={user}>
      <h2>{`Hello ${user}!`}</h2>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h2>Component 3</h2>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

function RefDemo() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Render Count: {count.current}</h2>
    </>
  );
}

function HooksDemo() {
     return (
            <div>
                 <FavoriteColor/>
                 {/* <Timer/> */}
                 <Timer2/>
                 <Counter/>
                 <Timer3/>
                 <Component1/>
                 <RefDemo/>
            </div>
        )
}



export default  HooksDemo