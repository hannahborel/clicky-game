import React from "react";
import "./Header.css";

const Header = props => (
    <div id="headerContainer" className="container">
        <div id="title">BOBS BURGERS <br /> Memory Game</div>
        <div id="directions">DON'T CLICK THE SAME IMAGE TWICE<br />OR YOU START OVER // HIT 12 POINTS TO WIN</div>
        <div id="scoreDiv">Score: {props.score}</div>
    </div>
);
export default Header;