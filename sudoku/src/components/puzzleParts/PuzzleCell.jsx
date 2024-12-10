import "../App.css";
import { useState, useEffect } from "react";

export default function PuzzleCell({ val, key }) {
  const [num, setNum] = useState(val);

  if (val == 0) {
    return (
      <input
        className="cell"
        value={key}
        onChange={(e) => setNum(e.target.value)}
      ></input>
    );
  }
  return <div className="cell">{val}</div>;
}
