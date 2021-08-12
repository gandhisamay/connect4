import React from 'react';
import UserInput from './UserInput';
import '../Styles/App.css';

const StartGameScreen = () => {
    return (
        <div className="startGameScreen">
            <h1>Connect 4</h1>
            <UserInput 
                message1="Player 1" 
                message2="Player 2" 
                placeholder1="Enter your name" 
                placeholder2="Enter your name" 
                buttonMessage="Start Game!" 
            />
        </div>
    );
}

export default StartGameScreen;