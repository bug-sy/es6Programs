var game = function () {
    var turnCount = 1;
    var winner;
    var gameOver = false;
    var checkForGameOver = function () {
        if (gameOver === true) {
            console.log("Your game is complete. Please use ticTacToe.startNewGame(); to begin again.");
            return;
        }
    };
    var isEqual = function (arr) {
        return arr.reduce(function (a, b) {
            console.log("a = " + a + " b = " + b);
            if (a === ' ') {
                return false;
            }
            else {
                winner = arr[0];
                return (a === b) ? a : false;
            }
        }) === arr[0];
    };
    var testInput = function (position, letter) {
        if (position > 8) {
            console.log('Please enter a number between 1 and 8');
            return;
        }
        else if (placement[position] !== ' ') {
            console.log('That spot is taken!');
            return;
        }
        if (letter === 'x' || letter === 'X') {
            placement[position] = 'X';
        }
        else if (letter === 'o' || letter === 'O') {
            placement[position] = 'O';
        }
        else {
            console.log('Please enter a valid letter! (X or O)');
        }
    };
    var findWinner = function () {
        if (isEqual([placement[0], placement[1], placement[2]]) ||
            isEqual([placement[3], placement[4], placement[5]]) ||
            isEqual([placement[6], placement[7], placement[8]]) ||
            isEqual([placement[0], placement[3], placement[6]]) ||
            isEqual([placement[1], placement[4], placement[7]]) ||
            isEqual([placement[2], placement[5], placement[8]]) ||
            isEqual([placement[0], placement[4], placement[8]]) ||
            isEqual([placement[2], placement[4], placement[6]])) {
            return true;
        }
    };
    return {
        drawBoard: function (firstRun) {
            if (firstRun) {
                placement = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                console.log('***************************');
                console.log('* Welcome to Tic Tac Toe! *');
                console.log('***************************');
                console.log('');
                console.log('Board Positions: \n');
            }
            var row1 = placement[0] + ' | ' + placement[1] + ' | ' + placement[2] + '\n';
            var row2 = placement[3] + ' | ' + placement[4] + ' | ' + placement[5] + '\n';
            var row3 = placement[6] + ' | ' + placement[7] + ' | ' + placement[8] + '\n';
            var structureRow = '--|---|--' + '\n';
            console.log(row1);
            console.log(structureRow);
            console.log(row2);
            console.log(structureRow);
            console.log(row3);
            if (firstRun) {
                placement = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
            }
        },
        place: function (position, letter) {
            if (gameOver === true) {
                checkForGameOver();
                return;
            }
            testInput(position, letter);
            turnCount++;
            if (findWinner()) {
                this.drawBoard();
                console.log('********** GAME OVER! **********');
                console.log('********** The ' + winner + '\'s ************* Have Won!');
                gameOver = true;
                return true;
            }
            else if (turnCount > 9) {
                console.log('********** GAME OVER! **********');
                console.log('********** Stalemate! **********');
                return true;
            }
            else {
                this.drawBoard();
            }
        },
        startNewGame: function () {
            placement = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
            turnCount = 1;
            gameOver = false;
            this.drawBoard(true);
        },
    };
};
var ticTacToe = game();
ticTacToe.startNewGame();
var readline = require('readline-sync');
var token = 0;
for (var t = 0; t < 9; t++) {
    if ((token % 2) === 0) {
        var position = readline.question("Player number 1 position ");
        var breakingCond = ticTacToe.place(position, 'x');
        token = token + 1;
        if (breakingCond === true) {
            break;
        }
    }
    else {
        var position = readline.question("Player number 2 position ");
        var breakingCond = ticTacToe.place(position, 'o');
        token = token + 1;
        if (breakingCond === true) {
            break;
        }
    }
}
//# sourceMappingURL=tictactoe.js.map