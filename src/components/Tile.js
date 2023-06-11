import React, { useState } from "react";

function Tile({ name, img, specialty, weight, medal, greased }) {

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(!isClicked)
    }

    return (
        <div className="pigTile" onClick={handleClick}>
            <h3>{name}</h3>
            <img src={img} alt="Pig" className="minPigTile" />
            {isClicked ? (
                <div>
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}</p>
                    <p>{greased}</p>
                    <p>Highest Medal Achieved: {medal}</p>
                </div>
            ) : null}
        </div>
    )
}

export default Tile