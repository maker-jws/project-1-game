// YOUR CODE HERE

// MODEL - your variables for game data ( currentPlayer, winConditions, etc) and DOM references (gameboard, cells,etc)
let currentPlayer = 0;
let moveCount = 0;
let options = ["X", "O"];
let moves = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let wins = 0;
let cells = document.querySelectorAll(".cell");
let display = document.querySelector("#game-messages");

// VIEW - a grouping functions that modify or affect the DOM
function updateDisplay(node, value) {
  node.textContent = value;
}

// CONTROLLER - functions and listeners here

function startGame() {
  document.getElementById("startGame").removeEventListener('click', startGame)
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", playerTurn);
  }
  updateDisplay(display, "Current Move: "+options[currentPlayer]);
}

function playerTurn(evt) {
  // use the options array to place "x" or "o"
  const mark = options[currentPlayer];
  // store the position of the selected cell
  const { x, y } = evt.target.dataset;

  // if there is no mark on a cell > update view, state, check for win, and trigger endgame
  if (evt.target.textContent === "") {
    // state changes
    moveCount++;
    moves[x][y] = mark;
    // modify display
    updateDisplay(evt.target, mark);
    if (mark == "O") {
      updateDisplay(display, "Current Move: X");
    } else {
      updateDisplay(display, "Current Move: O");
    }
    // check win conditions
    if (!checkWin(moves)) {
      switchPlayer(evt.target);
    } else {
      return endGame(options[currentPlayer]);
    }
  }
  if (moveCount === 9) {
    return endGame("Tie");
  }
}

function switchPlayer(node) {
  if (currentPlayer > 0) {
    currentPlayer--;
  } else {
    currentPlayer++;
  }
  node.removeEventListener("click", playerTurn);
}

// return booleans
function checkWin(state) {
  const lD = state[0][0] + state[1][1] + state[2][2];
  const rD = state[0][2] + state[1][1] + state[2][0];
  const r1 = state[0][0] + state[0][1] + state[0][2];
  const r2 = state[1][0] + state[1][1] + state[1][2];
  const r3 = state[2][0] + state[2][1] + state[2][2];
  const c1 = state[0][0] + state[1][0] + state[2][0];
  const c2 = state[0][1] + state[1][1] + state[2][1];
  const c3 = state[0][2] + state[1][2] + state[2][2];
  const currentState = [lD, rD, r1, r2, r3, c1, c2, c3];
  return currentState.includes("XXX") || currentState.includes("OOO");
}

// triggered by conditional in playerTurn
function endGame(winner) {
  if (winner === "Tie") {
    updateDisplay(display, "Tie: no winner");
    setTimeout(resetGame, 3000);
  } else {
    updateDisplay(display, "game over, the winner is " + winner);
    wins++;
    setTimeout(resetGame, 3000);
  }
}

// clear board and remove all listeners
function resetGame() {
  updateDisplay(display, "Press Start To Begin");
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.removeEventListener("click", playerTurn);
  });
  currentPlayer = 0
}

// setup game listener
function init(){
    document.getElementById("startGame").addEventListener("click", startGame);
    
}

// setup game listener
document.getElementById("resetGame").addEventListener("click", resetGame);

init()