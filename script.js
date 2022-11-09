let grid = document.querySelectorAll('.cell');


let gameboard = (() => {
    let boardArray = [null,null,null,null,null,null,null,null,null];

    grid.forEach(cell => {
        //checks if cell spot is valid for placement
        cell.addEventListener('click', () => {
            if (cell.textContent === '' && boardArray[cell.dataset.id] == null) {
                boardArray.splice(cell.dataset.id, 1 , currentPlayer.symbol)
            displayArray();
            checkGame();
            switchPlayer();
            }
            else console.log("can't click here")
        })
    })

    function displayArray() {
        for (i = 0; i < 9; i++) {
            //replace with player object 
            grid[i].textContent = boardArray[i];
        } 
    }
    
    function checkGame() {
        console.log(boardArray)
        let count = 0;
        boardArray.forEach(cell => {
            if (cell !== null){
                count += 1;
            }
        })
        if (count === 9) return endGame();
        //replace winning patterns with player.symbol
        else if ((boardArray[0]==='X' && boardArray[1]==='X' && boardArray[2]==='X') ||
                (boardArray[3]==='X' && boardArray[4]==='X' && boardArray[5]==='X') ||
                (boardArray[6]==='X' && boardArray[7]==='X' && boardArray[8]==='X') ||
                (boardArray[0]==='X' && boardArray[3]==='X' && boardArray[6]==='X') ||
                (boardArray[1]==='X' && boardArray[4]==='X' && boardArray[7]==='X') ||
                (boardArray[2]==='X' && boardArray[5]==='X' && boardArray[8]==='X') ||
                (boardArray[0]==='X' && boardArray[4]==='X' && boardArray[8]==='X') ||
                (boardArray[2]==='X' && boardArray[4]==='X' && boardArray[6]==='X')) {
            console.log('someone Won');
            return endGame();
        }
    }
    
    function endGame() {
        console.log('end');
        grid.forEach(cell => cell.textContent ='');
        boardArray = [null,null,null,null,null,null,null,null,null];
    }
    
})()

function player(symbol, color) {
    return {color, symbol}
}    
    let player1 = player('X', 'blue');
    let player2 = player('O', 'red');
    let currentPlayer = player1;

function switchPlayer() {
    (currentPlayer == player1) ?
     currentPlayer = player2: 
     currentPlayer = player1;
}

console.log(player1.color)
console.log(gameboard)
/* 
create click event listener 
    -runs function to place this.object(x, o) at given cell 
    -store object into array

create function to display array onto html

create object constructor to 

Function to check if someone won by checking array
    -Bunch of if else statements to see if three in a row
    - if array full & no 3 in a row, return tie, 
    display array onto gameboard with for dom qs all then foreach 
 */