document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const statusText = document.getElementById("status");
  const resetButton = document.getElementById("reset");
  let currentPlayer = "X";
  let gameActive = true;
  let gameState = Array(9).fill(null);

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  function checkWin() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      statusText.textContent = `${currentPlayer} Wins!`;
      gameActive = false;
      return true;
    }
    if (!gameState.includes(null)) {
      statusText.textContent = "Game Draw!";
      gameActive = false;
      return true;
    }
    return false;
  }

  function handleCellPlayed(clickedCell, clickedIndex) {
    if (gameState[clickedIndex] !== null || !gameActive) {
      return;
    }
    gameState[clickedIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
  }

  function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }

  function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedIndex = parseInt(clickedCell.getAttribute("data-cell-index"));

    handleCellPlayed(clickedCell, clickedIndex);
    if (!checkWin()) {
      handlePlayerChange();
    }
  }

  function handleResetButton() {
    currentPlayer = "X";
    gameActive = true;
    gameState = Array(9).fill(null);
    statusText.textContent = `Player X's turn`;
    document
      .querySelectorAll(".cell")
      .forEach((cell) => (cell.textContent = ""));
  }

  function setupGame() {
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-cell-index", i);
      cell.addEventListener("click", handleCellClick);
      grid.appendChild(cell);
    }
    resetButton.addEventListener("click", handleResetButton);
  }

  setupGame();
});
