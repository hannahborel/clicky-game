import React from "react";
import "./Card.css";

const Card = props => {
    return(
        <div
            className="block"
            style={{backgroundImage:`url(${props.src})`}}
            alt={props.alt}
            onClick={() => props.handleClick(props.name)}>
        </div>
    )
};

export default Card;