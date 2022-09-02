const gameBoard = (function() {

  let board = [];

  const addMove = (tic) => {
    board.push(tic);
    if(board.length === 9) {
      const winAlert = document.getElementById('win-alert').innerText = "It's a tie! Click reset to play again!";
    }
  }

  const resetBoard = () => {
    board = [];
  }

  const winCombo = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,4,8],
                    [2,4,6],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8]];
  
  const getWinCombo = () => winCombo;

  return {resetBoard, addMove, getWinCombo}
})();

const displayController = (function() {

  let turnCounter = 0;

  const twoPlayerBtn = document.getElementById('two-player-btn');
  twoPlayerBtn.addEventListener('click', () => {
    document.getElementById('title-screen').classList.add('display-off');
    document.getElementById('board-container').classList.remove('display-off');
    resetBoardDisplay();
    addGridListener();
  });
  
  const vsComputerBtn = document.getElementById('vs-computer-btn');
  vsComputerBtn.addEventListener('click', () => {
    alert("This feature has not been added yet");
  });
  
  const resetBtn = document.getElementById('reset-btn');
  resetBtn.addEventListener('click', () => {
    resetBoardDisplay();
    addGridListener();
  })

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => {
    document.getElementById('title-screen').classList.remove('display-off');
    document.getElementById('board-container').classList.add('display-off');
  })

  const addGridListener = () => {
    const grid = document.querySelectorAll('.grid');
    grid.forEach(item => {
    item.addEventListener('click', addTic);
  });
  }

  function addTic() {
    if (turnCounter % 2 == 0) {
      if (!this.hasChildNodes()){
        this.textContent = "O";
        this.style.color = "rgba(66, 179, 255, 0.5)";
        oPlayer.playerMove("O", Number(this.id));
        turnCounter++;
      }
    } else if (turnCounter % 2 == 1) {
      if (!this.hasChildNodes()){
        this.textContent = "X";
        this.style.color = "rgb(255, 102, 102)";
        xPlayer.playerMove("X", Number(this.id));
        turnCounter++;
      }
    }
  }
  

  const resetBoardDisplay = () => {
    turnCounter = 0;
    document.getElementById('win-alert').innerText = "";
    const grid = document.querySelectorAll('.grid');
    grid.forEach(item => {
      item.innerText = "";
      item.style.backgroundColor = "white";
    });
    
    gameBoard.resetBoard();
    xPlayer = Player("X", []);
    oPlayer = Player("O", []);
  }

  return {addTic}

})();

const Player = (tic, moveArray) => {

  const playerMove = (tic, index) => {
    gameBoard.addMove(tic, index)
    moveArray.push(index);
    checkWin();
  }

  const checkWin = () => {
    const winCombo = gameBoard.getWinCombo();

    winCombo.forEach(combo => {
      let win = combo.every(winningGridId => moveArray.includes(winningGridId));
      if(win) {
        document.getElementById('win-alert').innerText = `${tic} Wins! Click reset to play again!`;

        combo.forEach(winningGridId => {
          document.getElementById(winningGridId).style.backgroundColor = "rgb(216, 216, 216)";
        });

        const grid = document.querySelectorAll('.grid');
        grid.forEach(gridId => {
          gridId.removeEventListener('click', displayController.addTic);
        });
      }
    });
  }

  return {playerMove}
}

xPlayer = Player("X", []);
oPlayer = Player("O", []);