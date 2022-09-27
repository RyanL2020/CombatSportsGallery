import React from "react";

const Fighter = ({name, image_url}) => {
    <div className="fighter">
        <img src={image_url} alt={name} />
        <h3>{name}</h3>
    </div>
};

export default Fighter;