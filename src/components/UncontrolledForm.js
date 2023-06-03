import { useState, useRef } from "react";

export default function UncontrolledForm(props) {
  const [counter, setCounter] = useState({
    value: 1,
  });
  console.log("rendered");
  const input = useRef(null);
  // this is where it creates the ref

  function changeValue() {

    const newState = { ...counter };
    console.log(input);
    newState.value = parseInt(input.current.value);
    // Number (), parseInt() constructors can be used interchangeably
    console.log(input);

    if (counter.value !== newState.value){
      setCounter(newState);
    }
  //  You dont want to update if there is no change, by doing so you optimized the renders on your app, would be reat if you can avoid using arrays as your state
  }

  return (
    <div>
      <h1>{counter.value}</h1>
      <input type="number" ref={input} />
      <button onClick={changeValue}>Update State</button>
    </div>
  );
}
