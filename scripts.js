
const gameBoard = (function() {
  board = ["", "", "",
          "", "", "",
          "", "", ""];
  const playerMove = (tic, index) => {
    board[index] = tic;
    winCheckX();
    winCheckO();
  }
  
  const winCheckX = () => {
    if(board[0] === "X" && board[1] === "X" && board[2] === "X") {
      alert("Winner Winner Chicken Dinner!");
    } else if(board[3] === "X" && board[4] === "X" && board[5] === "X"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[6] === "X" && board[7] === "X" && board[8] === "X"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[0] === "X" && board[4] === "X" && board[8] === "X"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[2] === "X" && board[4] === "X" && board[6] === "X"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[0] === "X" && board[3] === "X" && board[6] === "X"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[1] === "X" && board[4] === "X" && board[7] === "X"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[2] === "X" && board[5] === "X" && board[8] === "X"){
      alert("Winner Winner Chicken Dinner!");
    }
  }

  const winCheckO = () => {
    if(board[0] === "O" && board[1] === "O" && board[2] === "O") {
      alert("Winner Winner Chicken Dinner!");
    } else if(board[3] === "O" && board[4] === "O" && board[5] === "O"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[6] === "O" && board[7] === "O" && board[8] === "O"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[0] === "O" && board[4] === "O" && board[8] === "O"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[2] === "O" && board[4] === "O" && board[6] === "O"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[0] === "O" && board[3] === "O" && board[6] === "O"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[1] === "O" && board[4] === "O" && board[7] === "O"){
      alert("Winner Winner Chicken Dinner!");
    } else if(board[2] === "O" && board[5] === "O" && board[8] === "O"){
      alert("Winner Winner Chicken Dinner!");
    }
  }
  return {playerMove, board}
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
    const btnContainerDiv = document.createElement('div');
    boardContainerDiv.setAttribute('id', 'board-container');
    btnContainerDiv.setAttribute('id', 'btn-container');
    document.body.append(boardContainerDiv);
    document.body.append(btnContainerDiv);

    for(let i = 0; i < 9; i++){
      const gridDiv = document.createElement('div');
      gridDiv.setAttribute('id', i);
      gridDiv.classList.add('test');
      boardContainerDiv.append(gridDiv);
    }

    const resetBtn = document.createElement('button');
    resetBtn.setAttribute('id','reset-btn');
    resetBtn.classList.add('btn');
    resetBtn.innerHTML = "Reset";

    resetBtn.addEventListener('click', () => {
      resetBoard();
    })

    const backBtn = document.createElement('button');
    backBtn.setAttribute('id', 'back-btn');
    backBtn.classList.add('btn');
    backBtn.innerHTML = "Back";

    backBtn.addEventListener('click', () => {
      backToTitle();
    })

    btnContainerDiv.append(resetBtn);
    btnContainerDiv.append(backBtn);

    const test = document.querySelectorAll('.test');
    let counter = 0;
    test.forEach((item) => {
      item.addEventListener('click', () => {
        if (counter % 2 == 0) {
          if (!item.hasChildNodes()){
            item.textContent = "O";
            item.style.color = "rgba(66, 179, 255, 0.5)";
            gameBoard.playerMove("O", item.id);
            counter++;
          }
        } else if (counter % 2 == 1) {
          if (!item.hasChildNodes()){
            item.textContent = "X";
            item.style.color = "rgb(255, 102, 102)";
            gameBoard.playerMove("X", item.id);
            counter++;
          }
        }
      });
    });
  }

  const resetBoard = () => {
    const boardContainerDiv = document.getElementById('board-container');
    const btnContainerDiv = document.getElementById('btn-container');

    boardContainerDiv.remove();
    btnContainerDiv.remove();

    createBoard();
  }

  const backToTitle = () => {
    const boardContainerDiv = document.getElementById('board-container');
    const btnContainerDiv = document.getElementById('btn-container');

    boardContainerDiv.remove();
    btnContainerDiv.remove();

    createTitle();
  }

  return {createTitle}
})();

const player = (marker) => {

  return {marker}
}

const playerX = player('X');
const playerO = player('O');

displayController.createTitle();