import React, { Component } from "react";
import "./Grid.css";
import iconBlocks from "../../characters.json";
import Card from "../Card";
import Header from "../Header/Header";


class Grid extends Component {
    state = {
        icons: iconBlocks,
        score: 0
    }

    resetGame = () => {
        this.setState({
            score: 0,
            icons: iconBlocks
        })
    }

    handleCorrect = newicons => {
        this.setState({
            icons: this.shuffleArray(newicons),
            score: this.state.score + 1,
        });

        if (this.state.score === 11) {
            this.resetGame();
            console.log("You won!");
        }

    };

    handleWrong = () => {
        this.resetGame();
    };

    handleClick = name => {
        let guessedCorrect = false;
        const newicons = this.state.icons.map(femme => {
            const newPic = { ...femme };
            if (newPic.name === name) {
                if (!newPic.clicked) {
                    console.log("Already guessed------------");
                    newPic.clicked = true;
                    guessedCorrect = true;
                }

            }
            return newPic;
        })
        console.log("GUESSED CORRECT: ", guessedCorrect)
        guessedCorrect ? this.handleCorrect(newicons) : this.handleWrong(newicons)
    };

    shuffleArray = icons => {
        for (let i = icons.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [icons[i], icons[j]] = [icons[j], icons[i]];
        }
        return (icons);
    };

    render() {
        return (
            <div>
                <Header score={this.state.score} />
                <div className="gridWrapper">
                    <div className="grid">
                        {this.state.icons.map(icon => {
                            return (<Card
                                name={icon.name}
                                key={icon.name}
                                handleClick={this.handleClick}
                                src={icon.image}
                                alt={icon.name}
                            />)
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

export default Grid;