//https://www.w3schools.com/REACT/react_jsx_attributes.asp

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


    //Nest jsx elements with curly braces
    const combi = (
        <div>
            {myElement}
            {myListEle}
            {varExample}
            {funcCallExample}
            {objectAttributesExample}
            
        </div>
    )


    return combi

}

export default JsxDemo