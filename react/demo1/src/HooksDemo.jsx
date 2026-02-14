//https://www.w3schools.com/REACT/react_useref.asp

import { useState, useEffect, useContext, createContext,  useRef, useReducer, useCallback, memo, useMemo  } from 'react';
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


function RefDemoDom() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

function RefDemoState() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}


const initialScore = [
  {
    id: 1,
    score: 0,
    name: "John",
  },
  {
    id: 2,
    score: 0,
    name: "Sally",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    default:
      return state;
  }
};

function Score() {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  return (
    <>
      {score.map((player) => (
        <div key={player.id}>
          <label>
            <input
              type="button"
              onClick={() => handleIncrease(player)}
              value={player.name}
            />
            {player.score}
          </label>
        </div>
      ))}
    </>
  );
}

// Child component that receives a function prop
const Button = memo(({ onClick, text }) => {
  console.log(`${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

// Parent component with useCallback
function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // These functions are memoized and only recreated when dependencies change
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  console.log("Parent rendered");
  return (
    <div>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

const MemoDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
};



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
                 <RefDemoDom/>
                 <RefDemoState/>
                 <Score/>
                 <WithCallbackExample/>
                 <MemoDemo/>
            </div>
        )
}



export default  HooksDemo