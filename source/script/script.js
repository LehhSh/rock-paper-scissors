const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  let playerMoveDisplay = "";

  if (playerMove === "rock") {
    if (computerMove === "&#128074;") {
      result = "TIE";
    } else if (computerMove === "&#9995;") {
      result = "LOSE";
    } else if (computerMove === "&#9996;") {
      result = "WIN";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "&#128074;") {
      result = "WIN";
    } else if (computerMove === "&#9995;") {
      result = "TIE";
    } else if (computerMove === "&#9996;") {
      result = "LOSE";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "&#128074;") {
      result = "LOSE";
    } else if (computerMove === "&#9995;") {
      result = "WIN";
    } else if (computerMove === "&#9996;") {
      result = "TIE";
    }
  }

  if (result === "WIN") {
    score.wins += 1;
  } else if (result === "LOSE") {
    score.losses += 1;
  } else if (result === "TIE") {
    score.ties += 1;
  }

  if (playerMove === "rock") {
    playerMoveDisplay = "&#128074;";
  } else if (playerMove === "paper") {
    playerMoveDisplay = "&#9995;";
  } else if (playerMove === "scissors") {
    playerMoveDisplay = "&#9996;";
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You ${playerMoveDisplay} ${computerMove} Computer`;

  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

function resetScoreElement() {
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
}

function pickComputerMove() {
  const randomNum = Math.random();

  let computerMove = "";

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "&#128074;";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "&#9995;";
  } else {
    computerMove = "&#9996;";
  }

  return computerMove;
}
