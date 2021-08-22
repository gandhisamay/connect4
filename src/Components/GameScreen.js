import React from 'react';
import {connect } from 'react-redux';
import '../Styles/App.css'
import Game from './Game';

class GameScreen extends React.Component{

    render(){
        return (
        <div className="gameScreen">
            <div className="showPlayerName">
                <h1>Samay</h1>
                <h1>vs</h1>
                <h1>Ansh</h1>
            </div>
            <Game />
        </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {...state}
}

export default connect(mapStateToProps)(GameScreen);