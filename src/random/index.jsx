import { useState } from "react"
import "./random.css"

const Random = () => {

    const [rnumber, setrnumber] = useState(`“No number generated yet” before the first click.`);
    function handlerandom() {
        setrnumber(`Generated number is - ${Math.floor(Math.random() * 100)}`)
    }

    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>Random Number Generator</h1>
                        <p style={{border:"white 2px solid", padding:"4px", borderRadius:"8px"}}>Hover me</p>
                    </div>
                        
                        <div className="flip-card-back">
                            <h3>{rnumber}</h3>
                            <button className="button-project2" onClick={handlerandom}> Random Number</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Random