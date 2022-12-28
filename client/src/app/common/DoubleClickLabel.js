import React, { useState } from "react";

function DoubleClickLabel(props) {

const [toggle, setToggle] = useState(true);

  function toggleInput() {
      setToggle(!toggle);
  }

  function handleNameChange(event) {
   // console.log(event.target.value);
    props.setInput(event.target.value);
  }

  return(
    <>
       {toggle ? (<p onDoubleClick={toggleInput}>{props.input}</p>):(
       <input onDoubleClick={toggleInput} type="text" value={props.input} onChange={handleNameChange}/>)}
    </>
  )
}

export default DoubleClickLabel;
