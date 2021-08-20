import React from 'react';
import '../Styles/App.css';
import {connect} from 'react-redux';
import {playChance} from '../actions';

class Block extends React.Component{

    state = {chance : 1};

    passChance = ()=>{
        if(this.state.chance === 1){
            this.setState({chance : 2});
        }else{
            this.setState({chance : 1});
        }
    }

    onBlockClick= ()=>{
       let previousGame = this.props.game.toString();
       this.props.playChance(this.props.id[0], this.props.id[2], this.state.chance);
       let afterPlayGame = this.props.game.toString();
       if(previousGame !==  afterPlayGame){
        this.passChance();
       }
       console.log("String", this.props.game.toString());
    }
    render(){
        this.BlockRef = React.createRef(); 
        return (
            <div className="block" onClick={this.onBlockClick} id={this.props.id} ref={this.BlockRef}>
                <div className= {`space ${this.props.game[this.props.row][this.props.column] !== null? this.props.game[this.props.row][this.props.column] === 1? 'green' : 'red' : ''}`}>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {game : state.game};
}

export default connect(mapStateToProps, {playChance})(Block);