export const startGame = (player1, player2) => {
    return  {
        type: 'START_GAME',
        payload:{
            player1,
            player2,
        }
    }
}

export const playChance = (row, column, turn) => {
    return {
        type : 'PLAY_CHANCE',
        payload: {
            row,
            column,
            turn
        }
    }
}

export const declareWinner = (gameWinner) => {
    return {
        type : 'DECLARE_WINNER',
        payload : {
            gameWinner
        }
    }
}

export const checkForWinner = (isThereWinner) => {
    return {
        type : 'CHECK_WINNER',
        payload : {
            isThereWinner
        }
    }
}

export const whoseChance = (chance) => {
    return {
        type : 'WHOSE_CHANCE',
        payload : {
            chance
        }
    }
}

export const newGame = () => {
    return {
        type : 'NEW_GAME'
    };
}