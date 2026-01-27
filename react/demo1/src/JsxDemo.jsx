//https://www.w3schools.com/REACT/react_jsx_expressions.asp next page

function JsxDemo() {
    //Curly braces are computed
    //className must be used instead of class
    const myElement = <h1 className="myclass">React is {5 + 5} times better with JSX</h1>;

    //Comments in {/* */} which is weird
    const myListEle =  (
        <ul>
            <li>Apples {/* Wonderful */} </li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    );

    //Nest jsx elements with curly braces
    const combi = (
        <div>
            {myElement}
            {myListEle}
        </div>
    )


    return combi

}

export default JsxDemo