import React from "react";
import Fighter from "./Fighter";


const FighterList = ({fighter}) => (
    <div className="fighter-list">
        { fighter.map(fighter => <Fighter name={fighter.name} image={fighter.image_url}/>) }
    </div>


)

export default FighterList;