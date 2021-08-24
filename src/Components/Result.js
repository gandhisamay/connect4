import React from 'react'; 
import {connect} from 'react-redux';
import Button from './Button';
import { newGame} from '../actions';
// import Game from './Game';

class Result extends React.Component{

    render(){
        return (
            <div className="result">
                <h1>Winner</h1>
                <h2>{this.props.winner}</h2>
                <Button message="New Game" onClick={this.props.newGame} link="/"/>
            </div> 
        );
    }
}

const mapStateToProps = (state)=>{
    return {winner : state.winner};
}

export default connect(mapStateToProps, {newGame})(Result);