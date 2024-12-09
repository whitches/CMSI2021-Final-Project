import {useEffect, useState} from "react"
import "./App.css"
import Puzzle from "./Puzzle"
import { useAuthentication } from "../services/authService"
import { fetchPuzzle, createPuzzle } from "../services/playerService"
import { SignIn, SignOut } from "./Auth"

export default function App() {
    const [puzzle, setPuzzle] = useState([])
    const [solution, setSolution] = useState([])
    const [score, setScore] = useState(0)
    const [loading, setLoading] = useState(false)
    const user = useAuthentication()

    useEffect(() => {
        const url = `https://sudoku-api.vercel.app/api/dosuku`;
        const parameters = {
          method: "GET",
        };
        fetch(url, parameters)
          .then((r) => r.json())
          .then((r) => setPuzzle(r.newboard.grids[0]))
          .catch((e) => setPuzzle(`${e}`));
          setSolution(puzzle.solution);
      }, []);
      console.log(puzzle);
      console.log(solution);

    return(<div className="App">
        <header>
            Serene Sudoku
            {!user ? <SignIn /> : <SignOut />}
        </header>

        {!user ? <h2>Sign in to play!</h2> : <h2>{puzzle.difficulty}</h2>}
        {!user ?"" : <Puzzle board={puzzle.value} class="grid-container"/>}
        
    </div>)
}