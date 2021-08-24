import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../Styles/App.css'
import Game from './Game';

class GameScreen extends React.Component {

    render() {
        let { checkWinner, players } = this.props.state;
        if (checkWinner) {
            return <Redirect to="/result" />
        }
        console.log(players);
        return (
            <div className="gameScreen">
                <div className="showPlayerName">
                    <div className="icon">
                        <h1>P1 - {players[0]}</h1>
                        <div style={{borderRadius: "50%", backgroundColor: "green", height: "2rem", width : "2rem"}}></div>
                    </div>
                    <h1>vs</h1>
                    <div className="icon">
                        <h1>P2 - {players[1]}</h1>
                        <div style={{borderRadius: "50%", backgroundColor: "red", height: "2rem", width : "2rem"}}></div>
                    </div>
                </div>
                <Game />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(GameScreen);