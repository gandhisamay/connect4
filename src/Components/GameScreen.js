import React from 'react';
import {connect } from 'react-redux';
import '../Styles/App.css'
// import Circle from './Circle';

class GameScreen extends React.Component{

    

    render(){
        console.log("props",this.props)
        return (
        <div className="gameScreen">
            <div className="showPlayerName">
                {/* <h1>{this.props.players[0]}</h1> */}
                <h1>Samay</h1>
                <h1>Ansh</h1>
            </div>
            <div className="game">
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state)=>{
    console.log("Game Screen",state);
    return {...state}
}

export default connect(mapStateToProps)(GameScreen);