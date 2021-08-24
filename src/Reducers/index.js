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
    if(action.type === 'NEW_GAME'){
        copyGame = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]
        ];
        Game = copyGame; 
        return Game;
    }
    return Game;
}

const playerNamesReducer = (state = [],action) => {
    if(action.type === 'START_GAME'){
        state =  [
                action.payload.player1,
                action.payload.player2,
        ]
    }
   
    if(action.type === 'NEW_GAME'){
        
    }
    return state;
}

const gameWinnerReducer = (state = '', action) => {
    if(action.type === 'DECLARE_WINNER'){
        state = action.payload.gameWinner;  
    }
    if(action.type === 'NEW_GAME'){
        state = '';
    }
    return state;
}

const checkWinnerReducer = (state, action) => {
    if(action.type === 'CHECK_WINNER'){
        state = action.payload.isThereWinner;
        return state;
    }
    return false;
}

const whoseChanceReducer = (state, action) => {
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