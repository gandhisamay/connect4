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
    if(action.type === 'PLAY_CHANCE'){
        copyGame[action.payload.row][action.payload.column] = action.payload.turn;
        Game = copyGame;
        console.log('Game Reducer', Game);
        return Game;
    }
    return Game;
}

const playerNamesReducer = (state,action) => {
    if(action.type === 'START_GAME'){
        return  state.players =  [
                action.payload.player1,
                action.payload.player2,
            ]
    }
    return [];
}

export default combineReducers({
    game: gameReducer,
    players: playerNamesReducer,
});