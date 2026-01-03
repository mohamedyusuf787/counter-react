import { useState } from "react";
import "./counter.css";


function Counter() {
  var [number, setnumber] = useState(1)

  function handleIncrement() {
    // setnumber(Math.floor(Math.random(number)*10))
    setnumber(number + 1)
  }
  function handleDecrement() {
    setnumber(number - 1)
    if (number <= 0) {
      alert("mininum limit reached!!!")
      setnumber(0)
    }
  }
  function handleReset() {
    setnumber(0)
  }
  return (
    <div className="container">
      <div className="container-box">
        <h1 style={{fontSize:"70px"}}>Counter</h1>
        <h1 style={{fontSize:"45px"}}>{number}</h1>
        <p style={{textAlign:"center"}}>you can able to increment and decrement the number by clicking the buttons and cant able to decrement  after "0"</p>
     
      </div>
      <div className="buttons">
        <button className="button-project1" onClick={handleDecrement}>Decrement</button>
        <button className="button-project1" onClick={handleIncrement}>Increment</button>
      </div>
       
        <div className="reset" onClick={handleReset}>
          <p>Reset</p>
          <i className="bx bx-refresh border" style={{ fontSize: "24px", color: "#000" }}></i>
        </div>
    </div>
  )
}

export default Counter