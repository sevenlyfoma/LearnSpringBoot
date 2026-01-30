//https://www.w3schools.com/REACT/react_components.asp

function MultByFive(num) {
    return num * 5
}

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

    const hp = 218 * 1.36;

    const varExample = (
        <p>My car has {hp} horsepower found from a variable</p>
    );

    const funcCallExample = (
        <p>The result of 4*5 from a function call is {MultByFive(4)}</p>
    )

    const myobj = {
        name: "Fiat",
        model: "500",
        color: "white"
     };

    const objectAttributesExample = (
        <p>My car is a {myobj.color} {myobj.name} {myobj.model} these info gotten from objects fields</p>
    );

    const myfunc = () => {
    alert('Hello World');
    };

    const storedFunction = (
        <button onClick={myfunc}>Click me</button>
    )
    
    const disabledButton = <button onClick={myfunc} disabled={true}>I cant be clicked</button>

    const mystyles = {
        color: "red",
        fontSize: "20px",
        backgroundColor: "lightyellow",
    };


    const attrCSS = <h1 style={mystyles}>Attribute changed my CSS</h1>

    const x = 5;

    const ternExample =  <p>{(x) < 10 ? "Banana" : "Apple"}</p>



    //Nest jsx elements with curly braces
    const combi = (
        <div>
            {myElement}
            {myListEle}
            {varExample}
            {funcCallExample}
            {objectAttributesExample}
            {storedFunction}
            {disabledButton}
            {attrCSS}
            {ternExample}
        </div>
    )


    return combi

}

export default JsxDemo