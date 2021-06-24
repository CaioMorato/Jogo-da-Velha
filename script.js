const boardDiv = document.querySelectorAll(".board-div");
const currentPlayer = document.querySelector('.player-marker');

const contentChange = (event) => {
  if (currentPlayer.innerHTML === 'X') {
    event.target.innerHTML = 'X';
    currentPlayer.innerHTML = 'O';
    event.target.removeEventListener('click', contentChange);
  } else if (currentPlayer.innerHTML === 'O') {
    event.target.innerHTML = 'O';
    currentPlayer.innerHTML = 'X';
    event.target.removeEventListener('click', contentChange);
  }
};

const boardFilling = () => {
  boardDiv.forEach(item => {
    item.addEventListener('click', contentChange);
  });
};
boardFilling();
