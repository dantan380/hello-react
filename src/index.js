import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  //reset was passed down as props so it can be used in onClick in the return statement.
  const {reset} = props;
  return (
    <button onClick={reset}>{props.children}</button>
  )
};

const Application = () => {
  //Using useState to set a default name and a way to change the name (setName).
  const [name, setName] = useState("");
  
  //Variable with short-circuit evaluation to show the word "Hello" only once 'name' has some value. If not, "Hello" does not show.
  const showHello = name ? (`Hello ${name}`) : "";

  //Reset will console.log the string 'reset' and call setName with an empty string.
  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      //input field is turned into a controlled component.
      <input 
      //onChange allows the input from the user to show through event. User input is then given to setName.
      placeholder='Type your name'
      value={name}
      onChange={(event) => setName(event.target.value)}
      />
      //Passing down reset as props to the Button component.
      <Button reset={reset}>Reset</Button>
      //An h1 element to show "Hello" and the user's inputted name, provided they input something.
      <h1>{showHello}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
