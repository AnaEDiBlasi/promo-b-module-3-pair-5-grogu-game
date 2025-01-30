import { useState } from "react"
import Grogu from "./Grogu"


function Board({positionGrogu}) {

  const cells = Array(7).fill(null)
  const cellsHTML = cells.map((cell, index) => <div key={index} className="cell">
    {positionGrogu === index ? <Grogu/> : null }
  </div> )

  return (
    <section className="board">
      

       {cellsHTML}
    </section>
  )
}

export default Board