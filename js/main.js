var game = {
  tieRound: " This round is a draw.",
  winRound: " You win this round.",
  loseRound: " You lose this round.",
  winGameHead: "Congratulations!",
  loseGameHead: "You lost this game.",
  winGameMsg: "You&rsquo;ve won the game!",
  loseGameMsg: "Better luck next time!",
  rockScissors: "Rock breaks scissors.",
  scissorsPaper: "Scissors cut paper.",
  paperRock: "Paper covers rock."
};

var player = {
  move: "?",
  score: 0
};

var computer = {
  moves: ["rock", "paper", "scissors"],
  move: "?",
  score: 0
};

// DOM HANDLES
var playerMove = document.getElementById("playerMove");
var computerMove = document.getElementById("computerMove");
var playByPlay = document.getElementById("playByPlay");
var turnScore = document.getElementById("turnScore");
var playerPt = document.getElementsByClassName("playerPt");
var computerPt = document.getElementsByClassName("computerPt");
var gameOverBox = document.getElementById("gameOverBox");
var gameOverHead = document.getElementById("gameOverHead");
var gameOverMsg = document.getElementById("gameOverMsg");


document.getElementById("validatname").onclick = function() {name()};
function name(){
  var name = document.getElementById("entername").value;
  if(name.length >= 2) {
     document.getElementById("name").style.display="none";
     document.getElementById("user-label").innerHTML = name;
     document.getElementById("game").style.display="inline-block";
   }
 }

// GAME FUNCTIONS
function getPlayerMove(move) {
  player.move = move;
  getcomputerMove();
  displayMoves();
  resolveTurn();
  checkForWin();
}

function getcomputerMove() {
  computer.move = computer.moves[ Math.floor(Math.random() * 3) ];
}

function displayMoves() {
  switch (player.move) {
    case "rock":
      playerMove.innerHTML = "<i class='fa fa-hand-rock-o'></i>";
      break;
    case "paper":
      playerMove.innerHTML = "<i class='fa fa-hand-paper-o'></i>";
      break;
    default: // "scissors"
      playerMove.innerHTML = "<i class='fa fa-hand-scissors-o fa-flip-horizontal'></i>";
      break;
    }

  switch (computer.move) {
    case "rock":
      computerMove.innerHTML = "<i class='fa fa-hand-rock-o'></i>";
      break;
    case "paper":
      computerMove.innerHTML = "<i class='fa fa-hand-paper-o'></i>";
      break;
    default: // "scissors"
      computerMove.innerHTML = "<i class='fa fa-hand-scissors-o'></i>";
      break;
    }
}

function resolveTurn() {
  if ( player.move === computer.move ) {
    playByPlay.innerHTML = ( "Both players chose " + player.move + ".");
    turnScore.innerHTML = ( game.tieRound );
  }

  else {
    switch (player.move) {
      case "rock":
        if ( computer.move === "paper" ) {
          playByPlay.innerHTML = ( game.paperRock );
          computerScore();
        }
        else {
          playByPlay.innerHTML = ( game.rockScissors );
          incPlayerScore();
        }
        break;

      case "paper":
        if ( computer.move === "scissors" ) {
          playByPlay.innerHTML = ( game.scissorsPaper );
          computerScore();
        }
        else {
          playByPlay.innerHTML = ( game.paperRock);
          incPlayerScore();
        }
        break;

      default: // "scissors"
        if ( computer.move === "rock" ) {
          playByPlay.innerHTML = ( game.rockScissors );
          computerScore();
        }
        else {
          playByPlay.innerHTML = ( game.scissorsPaper );
          incPlayerScore();
        }
    }
  }
}

function incPlayerScore() {
  turnScore.innerHTML = ( game.winRound );
  playerPt[player.score].setAttribute( "style", "background-color: royalblue;" );
  player.score++;
}

function computerScore() {
  turnScore.innerHTML = ( game.loseRound );
  computerPt[computer.score].setAttribute( "style", "background-color: orange;" );
  computer.score++;
}

function checkForWin() {
  if (player.score === 3) {
    gameOverBox.setAttribute(
      "style",
      "display: block; background-color: lightgreen; border-color: darkgreen;"
    );
    gameOverHead.innerHTML = game.winGameHead;
    gameOverMsg.innerHTML = game.winGameMsg;
  }
  else if (computer.score === 3) {
    gameOverBox.setAttribute(
      "style",
      "display: block; background-color: rgb(256,164,164); border-color: rgb(128,0,0);"
    );
    gameOverHead.innerHTML = game.loseGameHead;
    gameOverMsg.innerHTML = game.loseGameMsg;
  }
}


function playAgain() {
  gameOverBox.setAttribute("style", "display: none;");
  playByPlay.innerHTML = "Playing again?";
  turnScore.innerHTML = "Choose your first move.";
  for (var i = 0; i < 3; i++) {
    playerPt[i].setAttribute("style", "background-color: #ccc;");
    computerPt[i].setAttribute("style", "background-color: #ccc;");
  }
  playerMove.innerHTML = ("<i class='fa fa-question'></i>");
  computerMove.innerHTML = ("<i class='fa fa-question'></i>");
  player.score = 0;
  computer.score = 0;
}
