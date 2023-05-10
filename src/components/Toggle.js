import React, { useState } from "react";

function Toggle() {
  const [click, setClick] = useState(false)

  function clicked() {
    setClick((click) => !click)
  }
  const color = click ? "Red" : "Green"
  return (
    <button style={{ background: color }} onClick={clicked} >
      {click ? "ON" : "OFF"}
    </button >
  )
}

export default Toggle;
