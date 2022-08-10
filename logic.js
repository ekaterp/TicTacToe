let players = ['x', 'o'];
let activePlayer = 0;
let GameField = null;

function createGameField() {
  return [
    ['','',''],
    ['','',''],
    ['','','']
  ]
}

function playerIsWin (Field, Symbol) {
  console.log (Symbol);
  if (CheckRows(Field, Symbol) || CheckColumns(Field, Symbol) || CheckDiagonals(Field, Symbol)) {
    return true;
  } else {
    return false;
  }
}

function CheckRows(Field, Symbol) {
  let multiplication;
  for (let i = 0; i < 3; i++) {
    multiplication = 1;
    for (let j = 0; j < 3; j++) {
      if (Field [i][j] !== Symbol) {
        multiplication = multiplication * 0;
      } else {
        multiplication = multiplication * 1;
      }
    }
    if (multiplication) {
      return true;
    }
  }
  return false
}

function CheckColumns(Field, Symbol) {
  let multiplication;
  console.log (Symbol);
  for (let j = 0; j < 3; j++) {
    multiplication = 1;
    for (let i = 0; i < 3; i++) {
      if (Field [i][j] !== Symbol) {
        multiplication = multiplication * 0;
      } else {
        multiplication = multiplication * 1;
      }
    }
    if (multiplication) {
      return true;
    }
  }
  return false
}

function CheckDiagonals(Field, Symbol) {
  let multiplication1 = 1;
  let multiplication2 = 1;
  for (let i = 0; i < 3; i++) {
    if (Field [i][i] !== Symbol) {
      multiplication1 = multiplication1 * 0;
    } else {
      multiplication1 = multiplication1 * 1;
    }
    if (Field [2-i][i] !== Symbol) {
      multiplication2 = multiplication2 * 0;
    } else {
      multiplication2 = multiplication2 * 1;
    }
  }
  if (multiplication1 || multiplication2) {
    return true;
   } else {
     return false
   }
}

function startGame() {
  GameField = createGameField();
  activePlayer = 0;
  renderBoard(GameField);
}

function click (row, column) {
  let playerSymbol = players[activePlayer];
  GameField[row][column] = playerSymbol;
  renderBoard(GameField);

  if (playerIsWin(GameField, playerSymbol) === true) {
    showWinner (activePlayer);
  }
  
  activePlayer = (activePlayer + 1) % players.length;
}