let grid = document.querySelectorAll('.cell');


let gameboard = (() => {
    let boardArray = [null,null,null,null,null,null,null,null,null];
    
    grid.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '' && boardArray[cell.dataset.id] == null) {
                boardArray.splice(cell.dataset.id, 1 , currentPlayer.symbol)
            displayArray();
            checkGame();
            switchPlayer();
            displayTurn()
            }
            else console.log("can't click here")
        })
    })

    function displayArray() {
        for (i = 0; i < 9; i++) {
            grid[i].textContent = boardArray[i];
        } 
    }
    
    let checkGame = () => {
        let count = 0;
        let sym = currentPlayer.symbol
        let message = document.querySelector('.message')

        boardArray.forEach(cell => {
            if (cell !== null){
                count += 1;
            }
        })

        function endGame() { 
            console.log('ending')
            
            boardArray = [null,null,null,null,null,null,null,null,null];
            if (count === 9) return message.textContent ='Tie Game!';
        }

        if ((boardArray[0]=== sym && boardArray[1]=== sym && boardArray[2]=== sym) ||
            (boardArray[3]=== sym && boardArray[4]=== sym && boardArray[5]=== sym) ||
            (boardArray[6]=== sym && boardArray[7]=== sym && boardArray[8]=== sym) ||
            (boardArray[0]=== sym && boardArray[3]=== sym && boardArray[6]=== sym) ||
            (boardArray[1]=== sym && boardArray[4]=== sym && boardArray[7]=== sym) ||
            (boardArray[2]=== sym && boardArray[5]=== sym && boardArray[8]=== sym) ||
            (boardArray[0]=== sym && boardArray[4]=== sym && boardArray[8]=== sym) ||
            (boardArray[2]=== sym && boardArray[4]=== sym && boardArray[6]=== sym)) {
                message.textContent= `${currentPlayer.playerNum} won!`;
                for (i = 0;i< boardArray.length; i++) {
                    if (boardArray[i] == null) {
                        boardArray[i] = '';
                    }
                } 
        }
        else if (count === 9) endGame();
        
        let resetBtn = document.querySelector('.resetBtn')
        resetBtn.onclick = (reset) => {
            console.log('resset')
            count = 0;
            endGame();
            grid.forEach(cell => cell.textContent ='');
            message.textContent =''
        }
    }

    let playerBtn = document.querySelector('.playerBtn');
        playerBtn.addEventListener('click', changeType);
        
    function changeType() {
        let symbolCount = 0
        for (i = 0; i < boardArray.length; i++){
            console.log(symbolCount)
            if (boardArray[i] != null){
             symbolCount +=1;
            }
        }
        if (symbolCount >= 1) {
            return alert("You can't switch during a game")
        }
        let btn = event.currentTarget;
        if (btn.dataset.id === 'X') {
            btn.textContent = "Player 1: O";
            btn.dataset.id = 'O';
            player1 = player('Player 1', 'O', 'red');
            player2 = player('Player 2', 'X', 'blue')
            currentPlayer = player1;
        }
        else {
            btn.dataset.id = 'X';
            btn.textContent ='Player 1: X'; 
            player1 = player('Player 1', 'X', 'blue');
            player2 = player('Player 2', 'O', 'red');
            currentPlayer = player1;
        }
        displayTurn();
    }
})()

let player = (playerNum, symbol, color) => {
    return {playerNum, symbol, color}
}    

let player1 = player('Player 1', 'X', 'blue');
let player2 = player('Player 2', 'O', 'red');
let currentPlayer = player1;

let switchPlayer = () => {
    (currentPlayer == player1) ?
     currentPlayer = player2: 
     currentPlayer = player1;
}

let displayTurn = () => {
    let turn = document.querySelector('.turn');
    turn.textContent = `${currentPlayer.playerNum}'s Turn`;
}
