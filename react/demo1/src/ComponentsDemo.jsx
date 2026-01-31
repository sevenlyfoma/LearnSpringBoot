function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand="Ford" />
      <Car brand="BMW" />
    </>
  );
}

function ComponentsDemo() {
    return (
            <div>
                <Car brand="Ford" />
                <Car brand="BMW" />
            </div>
        )
}



export default ComponentsDemo