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

export const playChance = (row, column, color) => {
    return {
        type : 'CHANCE_PLAYED',
        payload: {
            row,
            column,
            color
        }
    }
}