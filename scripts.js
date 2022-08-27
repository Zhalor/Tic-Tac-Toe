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
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[3] === "X" && board[4] === "X" && board[5] === "X"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[6] === "X" && board[7] === "X" && board[8] === "X"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[0] === "X" && board[4] === "X" && board[8] === "X"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[2] === "X" && board[4] === "X" && board[6] === "X"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[0] === "X" && board[3] === "X" && board[6] === "X"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[1] === "X" && board[4] === "X" && board[7] === "X"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[2] === "X" && board[5] === "X" && board[8] === "X"){
      console.log("Winner Winner Chicken Dinner!");
    }
  }

  const winCheckO = () => {
    if(board[0] === "O" && board[1] === "O" && board[2] === "O") {
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[3] === "O" && board[4] === "O" && board[5] === "O"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[6] === "O" && board[7] === "O" && board[8] === "O"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[0] === "O" && board[4] === "O" && board[8] === "O"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[2] === "O" && board[4] === "O" && board[6] === "O"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[0] === "O" && board[3] === "O" && board[6] === "O"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[1] === "O" && board[4] === "O" && board[7] === "O"){
      console.log("Winner Winner Chicken Dinner!");
    } else if(board[2] === "O" && board[5] === "O" && board[8] === "O"){
      console.log("Winner Winner Chicken Dinner!");
    }
  }
  return {playerMove}
})();

const test = document.querySelectorAll('.test');
let counter = 0;
test.forEach((item) => {
  item.addEventListener('click', () => {
    if (counter % 2 == 0) {
      if (!item.hasChildNodes()){
        item.textContent = "O";
        item.style.color = "blue";
        gameBoard.playerMove("O", item.id);
        counter++;
      }
    } else if (counter % 2 == 1) {
      if (!item.hasChildNodes()){
        item.textContent = "X";
        item.style.color = "red";
        gameBoard.playerMove("X", item.id);
        counter++;
      }
    }
  });
});