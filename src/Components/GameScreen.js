import React from 'react';
import {connect } from 'react-redux';

class GameScreen extends React.Component{
    render(){
        return <div>Game Screen</div>
    }
}

const mapStateToProps = (state)=>{
    console.log("Game Screen",state);
    return {...state}
}

export default connect(mapStateToProps)(GameScreen);