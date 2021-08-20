export const startGame = (player1, player2) => {
    console.log(1);
    console.log(player1);
    console.log(player2);
    return  {
        type: 'START_GAME',
        payload:{
            player1,
            player2
        }
    }
}

export const playChance = (row, column, turn) => {
    console.log(turn);
    return {
        type : 'PLAY_CHANCE',
        payload: {
            row,
            column,
            turn
        }
    }
}