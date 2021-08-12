import { combineReducers } from "redux";

const gameReducer = (Game = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
], action)=>{
    let copyGame = [...Game];
    if(action.type === 'CHANCE'){
        copyGame[action.payload.row][action.payload.column] = action.payload.color;
        Game = copyGame;
        return Game;
    }
    return Game;
}

const playerNamesReducer = (players = [],action) => {
    if(action.type === 'START_GAME'){
        players = [...players, action.payload.player1, action.payload.player2];
        return players;
    }
    return players;
}

export default combineReducers({
    game : gameReducer,
    players : playerNamesReducer,
});