export default function PuzzleRow({nums}){
    console.log(nums)

    const numberLocations = Array.from({ length: 81 }, (_, i) => i); // Create an array [0, 1, 2, ..., 80]

    return(
        <div class="grid-item">
        {numberLocations.map((numberLocations) => (
            <PuzzleCell key={numberLocations} val={numberLocations} />
        ))}
        </div>
        //<PuzzleCell val={nums[0]}/>
    )
    
}