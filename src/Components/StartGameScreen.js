import React from 'react';
import UserInput from './UserInput';
import '../Styles/App.css';
import Button from './Button';

const StartGameScreen = () => {
    return (
        <div className="startGameScreen">
            <h1>Connect 4</h1>
            <div className="startGame">
                <div className="playerNames">
                    <UserInput message="Player 1" placeholder="Enter your name" />
                    <UserInput message="Player 2" placeholder="Enter your name" />
                </div>
                <Button message="Start Game!" />
            </div>
        </div>
    );
}

export default StartGameScreen;