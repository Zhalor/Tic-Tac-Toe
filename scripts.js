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

  const createTitle = () => {
    const titleScreenDiv = document.createElement('div');
    const pWelcome = document.createElement('p');
    const pTitle = document.createElement('p');
    const pSelect = document.createElement('p');
    const selectBtnsDiv = document.createElement('div');

    pWelcome.innerText = "Welcome to";
    pTitle.innerText = "Tic-Tac-Toe";
    pSelect.innerText = "Select your game mode below";
  
    titleScreenDiv.setAttribute('id', 'title-screen');
    document.body.append(titleScreenDiv);
    titleScreenDiv.append(pWelcome, pTitle, pSelect, selectBtnsDiv);
  
    const twoPlayerBtn = document.createElement('button');
    const vsComputerBtn = document.createElement('button');

    selectBtnsDiv.setAttribute('id', 'select-btns');
    twoPlayerBtn.setAttribute('id', 'two-player-btn');
    twoPlayerBtn.classList.add('btn');
    vsComputerBtn.setAttribute('id', 'vs-computer-btn');
    vsComputerBtn.classList.add('btn');

    twoPlayerBtn.innerText = "2 Player";
    vsComputerBtn.innerHTML = "vs Computer";

    selectBtnsDiv.append(twoPlayerBtn, vsComputerBtn);

    twoPlayerBtn.addEventListener('click', () => {
      titleScreenDiv.remove();
      createBoard();
    });
  
    vsComputerBtn.addEventListener('click', () => {
      alert("This feature has not been added yet");
    });
  }

  const createBoard = () => {
    const boardContainerDiv = document.createElement('div');
    const boardDiv = document.createElement('div');
    const btnContainerDiv = document.createElement('div');
    const winAlert = document.createElement('p');

    boardContainerDiv.setAttribute('id', 'board-container');
    btnContainerDiv.setAttribute('id', 'btn-container');
    boardDiv.setAttribute('id', 'board');
    winAlert.setAttribute('id', 'win-alert')
    winAlert.textContent = " ";

    document.body.append(boardContainerDiv);
    boardContainerDiv.append(boardDiv, winAlert, btnContainerDiv);

    for(let i = 0; i < 9; i++){
      const gridDiv = document.createElement('div');
      gridDiv.setAttribute('id', i);
      gridDiv.classList.add('grid');
      boardDiv.append(gridDiv);
    }

    const resetBtn = document.createElement('button');
    resetBtn.setAttribute('id','reset-btn');
    resetBtn.classList.add('btn');
    resetBtn.innerHTML = "Reset";

    resetBtn.addEventListener('click', () => {
      resetBoardDisplay();
    })

    const backBtn = document.createElement('button');
    backBtn.setAttribute('id', 'back-btn');
    backBtn.classList.add('btn');
    backBtn.innerHTML = "Back";

    backBtn.addEventListener('click', () => {
      removeBoard();
    })

    btnContainerDiv.append(resetBtn);
    btnContainerDiv.append(backBtn);

    const grid = document.querySelectorAll('.grid');
    let turnCounter = 0;
    grid.forEach((item) => {
      item.addEventListener('click', () => {
        if (turnCounter % 2 == 0) {
          if (!item.hasChildNodes()){
            item.textContent = "O";
            item.style.color = "rgba(66, 179, 255, 0.5)";
            oPlayer.playerMove("O", Number(item.id));
            turnCounter++;
          }
        } else if (turnCounter % 2 == 1) {
          if (!item.hasChildNodes()){
            item.textContent = "X";
            item.style.color = "rgb(255, 102, 102)";
            xPlayer.playerMove("X", Number(item.id));
            turnCounter++;
          }
        }
      });
    });
  }

  const resetBoardDisplay = () => {
    const boardContainerDiv = document.getElementById('board-container');
    boardContainerDiv.remove();
    createBoard();
    gameBoard.resetBoard();
    xPlayer = Player("X", []);
    oPlayer = Player("O", []);
  }

  const removeBoard = () => {
    const boardContainerDiv = document.getElementById('board-container');
    boardContainerDiv.remove();
    createTitle();
    gameBoard.resetBoard();
    xPlayer = Player("X", []);
    oPlayer = Player("O", []);
  }

  return {createTitle, resetBoardDisplay}
})();

const Player = (tic, moveArray) => {

  const playerMove = (tic, index) => {
    gameBoard.addMove(tic, index)
    moveArray.push(index);
    checkWin();
  }

  const checkWin = () => {
    const winCombo = gameBoard.getWinCombo();

    for(let i = 0; i < winCombo.length; i++ ) {
      let win = winCombo[i].every(item => moveArray.includes(item));
      if(win) {
        const winAlert = document.getElementById('win-alert').innerText = `${tic} Wins! Click reset to play again!`;
        winCombo[i].forEach(item => {
          document.getElementById(item).style.backgroundColor = "rgb(216, 216, 216)";
        });
      }
    }
  }

  const getMoveArray = () => moveArray;

  return {playerMove, getMoveArray}
}

xPlayer = Player("X", []);
oPlayer = Player("O", []);

displayController.createTitle();