import React from 'react';
import UserInput from './UserInput';
import '../Styles/App.css';

const StartGameScreen = ()=>{
    return ( 
    <div className="startGame">
        <h1>Connect 4</h1>
        <div className="playerNames">
        <UserInput message="Player 1" placeholder="Enter your name"/>
        <UserInput message="Player 2" placeholder="Enter your name"/>
        </div>
    </div>
    );
}

export default StartGameScreen;