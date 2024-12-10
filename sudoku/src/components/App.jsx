import { useEffect, useState } from "react";
import "./App.css";
import Puzzle from "./Puzzle";
import { useAuthentication } from "../services/authService";
import { fetchRecent, updateScore } from "../services/playerService";
import { SignIn, SignOut } from "./Auth";

export default function App() {
  const [puzzle, setPuzzle] = useState([]);
  const [solution, setSolution] = useState([]);
  const user = useAuthentication();
  const [score, setScore] = useState();

  useEffect(() => {
    const url = `https://sudoku-api.vercel.app/api/dosuku`;
    const parameters = {
      method: "GET",
    };
    fetch(url, parameters)
      .then((r) => r.json())
      .then((r) => setPuzzle(r.newboard.grids[0]))
      .catch((e) => setPuzzle(`${e}`));
    //setSolution(puzzle.solution);
  }, []);

  function refresh() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <header>
        <img src="/sudoku_logo.png" alt="image here" />
        <button>
          <img
            src="/refresh.png"
            class="refresh"
            alt="image here"
            onClick={refresh}
          />
        </button>
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? <h2>Sign in to play!</h2> : <h2>{puzzle.difficulty}</h2>}

      {!user ? "" : <Puzzle board={puzzle.value} class="grid-container" />}
    </div>
  );
}
