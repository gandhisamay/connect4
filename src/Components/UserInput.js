import React from "react";
import "../Styles/App.css";
import { connect } from 'react-redux';
import { startGame } from '../actions';
import { Link } from "react-router-dom";

class UserInput extends React.Component {
    state = { player1: '', player2: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.startGame(this.state.player1, this.state.player2);
    }

    on
    render() {
        return (
            <form>
                <div className="userInput">
                    <label>{this.props.message1}</label>
                    <input type="text" maxLength="10" placeholder={this.props.placeholder1} onChange={(e) => { this.setState({ player1: e.target.value }) }} required />
                </div>
                <div className="userInput">
                    <label>{this.props.message2}</label>
                    <input type="text" maxLength="10" placeholder={this.props.placeholder2} onChange={(e) => { this.setState({ player2: e.target.value }) }} required />
                </div>
                <div className="button" onClick={this.onFormSubmit}>
                    <Link to="/game" ><button type="submit">
                        {this.props.buttonMessage}
                    </button>
                    </Link>
                </div>
            </form>
        );
    }
};

const mapStateToProps = (state) => {
    return { players: state.players };
}

export default connect(mapStateToProps, { startGame })(UserInput);