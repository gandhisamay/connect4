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

const gameWinnerReducer = (state, action) =>{
    if(action.type === 'DECLARE_WINNER'){
        state = action.payload.gameWinner;  
        return state;
    }
    return '';
}

const checkWinnerReducer = (state, action) =>{
    if(action.type === 'CHECK_WINNER'){
        state = action.payload.isThereWinner;
        return state;
    }
    return false;
}

const whoseChanceReducer = (state, action) =>{
    if(action.type === 'WHOSE_CHANCE'){
        state = action.payload.chance;
        return state;
    }
    return 1;
}

export default combineReducers({
    game: gameReducer,
    players: playerNamesReducer,
    winner : gameWinnerReducer, 
    checkWinner : checkWinnerReducer,
    chance : whoseChanceReducer,
});