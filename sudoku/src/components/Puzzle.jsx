import { useState,useEffect } from "react";
import PuzzleCell from "./puzzleParts/PuzzleCell";

export default function Puzzle({ board }){
    const [isLoading, setLoading] = useState(false);
    /*useEffect(() => {
        setLoading(true);
        const url = `https://sudoku-api.vercel.app/api/dosuku`;
        const parameters = {
          method: "GET",
        };
        fetch(url, parameters)
          .then((r) => r.blob())
          .then((r) => setNewPuzzle(URL.createObjectURL(r)))
          .catch((e) => setNewPuzzle(`${e}`));
      }, [newPuzzle]);
      console.log(newPuzzle);*/

    const numberLocations = Array.from({ length: 81 }, (_, i) => i);

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])
    
    return(
        <div>
        {isLoading ? (<div>loading</div>) :
            <div class="PuzzleBoard">
            {numberLocations.map((numberLocations) => (
                <PuzzleCell key={numberLocations} val={board[Math.floor(numberLocations / 9)][numberLocations % 9]} />
            ))}
            </div>
        }
        </div>
    )
}