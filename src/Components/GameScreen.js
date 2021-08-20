import React from 'react';
import {connect } from 'react-redux';
import '../Styles/App.css'
import Block from './Block';

class GameScreen extends React.Component{

    makeGrid = ()=>{
        let list = this.props.game.map((e, index1)=> e.map((w, index2)=> <Block key={`${index1}-${index2}`} id={`${index1}-${index2}` }
        //   colorClass= {this.props.game[index1][index2] !== null? this.props.game[index1][index2] === 1? 'green' : 'red' : ''}
        row={index1} column={index2}
        />));
        return list;
    }

    render(){
        return (
        <div className="gameScreen">
            <div className="showPlayerName">
                {/* <h1>{this.props.players[0]}</h1> */}
                <h1>Samay</h1>
                <h1>Ansh</h1>
            </div>
            <div className="game">
                {this.makeGrid()}
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