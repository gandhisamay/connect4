import React from 'react';
import { connect } from 'react-redux';
import { playChance } from '../actions';

class Game extends React.Component {

    state = { chance: 1, isThereWinner : false, winnerName : '' }

    setWinnerName = (value, players)=>{
        if(value === 1){
            this.setState({winnerName : players[0]})
        }else{
            this.setState({winnerName : players[1]})
        }
    }

    checkWinner = () => {
        let { game, players } = this.props.completeState;
        for (let i = 0; i <= 5; i++) {
            for (let j = 0; j <= 3; j++) {
                if (game[i][j] !== null && game[i][j + 1] !== null && game[i][j + 2] !== null && game[i][j + 3] !== null) {
                    if (game[i][j] === game[i][j + 1] && game[i][j + 1] === game[i][j + 2] && game[i][j + 2] === game[i][j + 3]) {
                        this.setWinnerName(game[i][j], players);
                        return true;
                    }
                }
            }
        }
        for (let i = 0; i <= 6; i++) {
            for (let j = 0; j <= 2; j++) {
                if (game[j][i] !== null && game[j + 1][i] !== null && game[j + 2][i] !== null && game[j + 3][i] !== null) {
                    if (game[j][i] === game[j + 1][i] && game[j + 1][i] === game[j + 2][i] && game[j + 2][i] === game[j + 3][i]) {
                        this.setWinnerName(game[j][i], players);
                        return true;
                    }
                }
            }
        }
        for(let i = 0; i <= 2; i++){
            for(let j = 0; j <= 3; j++){
                if (game[i][j] !== null && game[i + 1][j + 1] !== null && game[i + 2][j + 2] !== null && game[i + 3][j + 3] !== null) {
                    if(game[i][j] === game[i + 1][j + 1] && game[i + 1][j + 1] === game[i + 2][j + 2] && game[i + 2][j + 2] === game[i + 3][j + 3]){
                        this.setWinnerName(game[i][j], players);
                        return true;
                    }
                }
            }
        }

        for(let i = 0; i <= 2; i++){
            for(let j = 6; j >= 3; j--){
                if (game[i][j] !== null && game[i + 1][j - 1] !== null && game[i + 2][j - 2] !== null && game[i + 3][j - 3] !== null) {
                    if(game[i][j] === game[i + 1][j - 1] && game[i + 1][j - 1] === game[i + 2][j - 2] && game[i + 2][j - 2] === game[i + 3][j - 3]){
                        this.setWinnerName(game[i][j], players);
                        return true;
                    }
                }
            }
        }

        return false;
    }

    whereActuallyPlayed = (e) => {
        let { game } = this.props.completeState;
        let { id } = e.target;
        if (game[0][id[2]] === null) {
            for (let i = 5; i >= id[0]; i--) {
                if (game[i][id[2]] === null) {
                    this.props.playChance(i, id[2], this.state.chance);
                    this.passChance();
                    if(this.checkWinner()){
                        this.setState({isThereWinner : true})
                    }
                    return true;
                }
            }
        } else {
            return false
        }
    }

    passChance = () => {
        if (this.state.chance === 1) {
            this.setState({ chance: 2 });
        } else {
            this.setState({ chance: 1 });
        }
    }

    createGame = () => {
        let { game } = this.props.completeState;

        return game.map((row, indexRow) => {
            return row.map((col, indexCol) => {
                return (
                    <div className="block" id={`${indexRow}-${indexCol}`} key={`${indexRow}-${indexCol}`} onClick={(e) => this.whereActuallyPlayed(e)}>
                        <div className={`space ${game[indexRow][indexCol] !== null ? game[indexRow][indexCol] === 1 ? 'green' : 'red' : ''}`} id={`${indexRow}-${indexCol}`}>
                        </div>
                    </div>
                );
            })
        })
    }

    winnerDetails = ()=>{
        if(this.state.isThereWinner){
            return (
                <div>
                    <div className="winnerName">
                    <h1>Winner</h1>
                    <h1>{this.state.winnerName}</h1>
                    </div>
                    <div className="newGame">
                        <button> New Game</button>
                    </div>
                </div>
            );                   
        }else{
            return(
                <div></div>
            )
        }
    }

    render() {
        return (
            (
                <div className="game">
                    <div className="gameBoard">
                        {this.createGame()}
                    </div>
                    <div>
                        {this.winnerDetails()}
                    </div>
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => {
    return { completeState: state };
}
export default connect(mapStateToProps, { playChance })(Game);