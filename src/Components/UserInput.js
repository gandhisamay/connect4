import React from "react";
import "../Styles/App.css";
import { connect } from 'react-redux';
import { startGame } from '../actions';

class UserInput extends React.Component {
    state = { player1: '', player2: '' };

    onFormSubmit = (e) =>{
        e.preventDefault(); 
        startGame(this.state.player1, this.state.player2); 
        console.log(this.state.player1);
    }

    on
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="userInput">
                    <label>{this.props.message1}</label>
                    <input type="text" maxLength="10" placeholder={this.props.placeholder1} onChange={(e) => { this.setState({ player1: e.target.value }) }} />
                </div>
                <div className="userInput">
                    <label>{this.props.message2}</label>
                    <input type="text" maxLength="10" placeholder={this.props.placeholder2} onChange={(e) => { this.setState({ player2: e.target.value }) }} />
                </div>
                <div className="button">
                    <button type="submit">{this.props.buttonMessage}
                    </button>
                </div>
            </form>
        );
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {};
}

export default connect(mapStateToProps, { startGame })(UserInput);