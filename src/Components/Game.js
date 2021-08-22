import React from 'react'; 
import {connect } from 'react-redux';
import {playChance} from '../actions';

class Game extends React.Component{

    state = {chance : 1}

    whereActuallyPlayed = (e)=>{
        let {game} = this.props;
        let {id} = e.target;
        if(game[0][id[2]] === null){
            for(let i = 5 ; i >= id[0]; i--){
                if(game[i][id[2]] === null){
                    game[i][id[2]] = this.state.chance;
                    this.passChance();
                    this.props.playChance(i, id[2], this.state.chance);
                    return true;
                }
            }
        }else{
            return false
        }
    }

    passChance = ()=>{
        if(this.state.chance === 1){
            this.setState({chance : 2});
        }else{
            this.setState({chance : 1});
        }
    }

    createGame = ()=>{
        let {game} = this.props;

        return game.map((row, indexRow) => {
            return row.map((col, indexCol) => {
                return (
                    <div className="block" id={`${indexRow}-${indexCol}`} key={`${indexRow}-${indexCol}`}  onClick={(e) => this.whereActuallyPlayed(e)}>
                        <div className={`space ${game[indexRow][indexCol] !== null? game[indexRow][indexCol] === 1? 'green' : 'red' : ''}`} id={`${indexRow}-${indexCol}`}>
                        </div>
                    </div>
                );
            })
        })
    }


    render(){
        return (
            <div className="game">
                {this.createGame()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {game : state.game};
}
export default connect(mapStateToProps, {playChance})(Game);