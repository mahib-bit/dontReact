import { useState } from "react";

export default function Score() {

    const handleScore = () => {
      setRuns(runs + 6)
    }

    const [runs, setRuns] = useState(0)
  
    const scoreStyle = {
      border : '2px solid darkblue',
      borderRadius : '10px',
      padding : '10px',
      margin : '10px',
    }

    return (
    <div>
      <h2>Score : {runs}</h2>
      <button style={scoreStyle} onClick={() => setRuns(runs + 1)}>Singles </button>
      <button style={scoreStyle} onClick={() => setRuns(runs + 4)}>Four </button>
      <button style={scoreStyle} onClick={handleScore}>Six </button>
    </div>
  )
}