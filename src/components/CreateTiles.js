import React, { useState } from "react";
import Tile from "./Tile";
import Filter from "./Filter";

function CreateTiles({ hogsData }) {

    const [greased, setGreased] = useState("All")

    function hogsToFilterGreased(greased) {
        setGreased(greased)
    }

    const hogsToShow = hogsData.filter((hog) => {
        if (greased === "All") {
            return true;
        } else if (greased === "Greased") {
            return hog.greased
        } else {
            return !hog.greased
        }
    })

    return (
        <div>
            <Filter hogsToFilterGreased={hogsToFilterGreased}/>
            {hogsToShow.map((hog) => {
            return (<Tile 
                key={hog.name}
                name={hog.name} 
                img={hog.image}
                specialty={hog.specialty}
                weight={hog.weight}
                medal={hog["highest medal achieved"]}
                greased={hog.greased ? "Greased" : null}
            />)})}
        </div>
    )
}

export default CreateTiles