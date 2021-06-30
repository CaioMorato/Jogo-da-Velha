const boardDiv = document.querySelectorAll(".board-div");
const currentPlayerField = document.querySelector('.player-marker');
const currentPlayerContainer = document.querySelector('.current-player')
const firstPlayer = 'X';
const secondPlayer = 'O';


const winner = (currentPlayer) => {
  const a1 = boardDiv[0].classList[1];
  const a2 = boardDiv[1].classList[1];
  const a3 = boardDiv[2].classList[1];
  const b1 = boardDiv[3].classList[1];
  const b2 = boardDiv[4].classList[1];
  const b3 = boardDiv[5].classList[1];
  const c1 = boardDiv[6].classList[1];
  const c2 = boardDiv[7].classList[1];
  const c3 = boardDiv[8].classList[1];

  if (a1 && a1 === a2 && a1 === a3) {
    currentPlayerContainer.innerHTML = `${currentPlayer} is the winner!`;
  } else if (b1 && b1 === b2 && b1 === b3) {
    currentPlayerContainer.innerHTML = `${currentPlayer} is the winner!`;
  } else if (c1 && c1 === c2 && c1 === c3) {
    currentPlayerContainer.innerHTML = `${currentPlayer} is the winner!`;
  } else if (a1 && a1 === b1 && a1 === c1) {
    currentPlayerContainer.innerHTML = `${currentPlayer} is the winner!`;
  } else if (a2 && a2 === b2 && a2 === c2) {
    currentPlayerContainer.innerHTML = `${currentPlayer} is the winner!`;
  } else if (a3 && a3 === b3 && a3 === c3) {
    currentPlayerContainer.innerHTML = `${currentPlayer} is the winner!`;
  } else if (a1 && a1 === b2 && a1 === c3) {
    currentPlayerContainer.innerHTML = `${currentPlayer} is the winner!`;
  } else if (a3 && a3 === b2 && a3 === c1) {
    currentPlayerContainer.innerHTML = `${currentPlayer} is the winner!`;
  }
};

const boardFilling = (event) => {
  if (currentPlayerField.innerHTML === 'X') {
    event.target.innerHTML = 'X';
    currentPlayerField.innerHTML = secondPlayer;
    event.target.classList.add('X');
    event.target.removeEventListener('click', boardFilling);
    winner(firstPlayer);
  } else if (currentPlayerField.innerHTML === 'O') {
    event.target.innerHTML = 'O';
    currentPlayerField.innerHTML = firstPlayer;
    event.target.classList.add('O');
    event.target.removeEventListener('click', boardFilling);
    winner(secondPlayer);
  }
};

const boardEvent = () => {
  boardDiv.forEach(item => {
    item.addEventListener('click', boardFilling);
  });
};
boardEvent();

window.onload = () => {
  currentPlayerField.innerHTML = firstPlayer;
};