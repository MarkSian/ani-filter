// 1) Create a grid found from DaisyUI 18 filters will be applied and must be centered
// 2) Each Filter will be a button with a mood emoji, Each button will have a hover effect, Each button will have a click effect
// 3)  Each button will have a click effect that will change the color of the button to a different color
import moods from "../assets/mood"
import Button from "./Button"


export default function MoodFilter() {
    return (
        <>

        <h1 className="my-6 grid lg:text-5xl text-4xl font-bold mood-center-container">No idea what to watch? Click on a mood and discover a top-rated anime!</h1>
        <p className="font-semibold text-xl"> Select Below </p>

        <div className="grid lg:grid-cols-3 grid-cols-3 grid-rows-4 lg:gap-6 gap-5 mood-center-container my-5">
            {Object.entries(moods).map(([mood, genre]) => {
                return (
                    <div key={genre}>
                        <Button text={mood} className={"btn-outline"}/>
                 
                   </div>    
                );
        
            })}
            
        </div>

        </>

    )
}