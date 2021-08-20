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
        if(copyGame[0][action.payload.column] === null){
            for(let i = 5 ; i >= action.payload.row; i--){
                if(copyGame[i][action.payload.column] === null){
                    // console.log("turn",action.payload.turn);
                    copyGame[i][action.payload.column] = action.payload.turn;
                    break;
                }
            }
        }else{
            console.log('The column is filled completely!')
        }
        Game = copyGame;
        return Game;
    }
    console.log("After reducer", Game);
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