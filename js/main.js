var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissor_div = document.getElementById("scissor");

 document.getElementById("validatname").onclick = function() {name()};
 function name(){
   var name = document.getElementById("entername").value;
   if(name.length >= 2) {
      document.getElementById("name").style.display="none";
      document.getElementById("user-label").innerHTML = name;
      document.getElementById("allgame").style.display="inline-block";
    }
  }


function getComputerChoice(){
  var choices = ["rock", "paper","scissor"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];

}


function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  var smallUserWord = "user".fontsize(3).sup();
  var smallComputerWord = "computer".fontsize(3).sup();
  result_p.innerHTML = userChoice + smallUserWord + " " +  "beats" + " " +  computerChoice  + smallComputerWord + " " + ".You win!";
  document.getElementById(userChoice).classList.add("green-glow");
  document.getElementById("myImg").src = "img/body2.gif";
}

function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  var smallUserWord = "user".fontsize(3).sup();
  var smallComputerWord = "computer".fontsize(3).sup();
  result_p.innerHTML = userChoice + smallUserWord + " " +  "loses to" + " " +  computerChoice  + smallComputerWord + " " + ".You lost!";
  document.getElementById("myImg").src = "img/body3.gif";
}

function draw(userChoice, computerChoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  var smallUserWord = "user".fontsize(3).sup();
  var smallComputerWord = "computer".fontsize(3).sup();
  result_p.innerHTML = userChoice + smallUserWord + " " +  "equals" + " " +  computerChoice  + smallComputerWord + " " + ".It is a draw!";
  document.getElementById("myImg").src = "img/body4.gif";
}

function main() {
  rock_div.addEventListener("click", function(){
    play("rock");
  })

  paper_div.addEventListener("click", function(){
    play("paper");
  })

  scissor_div.addEventListener("click", function(){
    play("scissor");
  })
}

main();

function play(userChoice){
  var computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
  case "rockscissor":
  case "paperrock":
  case "scissorpaper":
  win(userChoice, computerChoice);
  break;
  case "rockpaper":
  case "paperrock":
  case "scissorrock":
  lose(userChoice, computerChoice);
  break;
  case "rockrock":
  case "paperpaper":
  case "scissorscissor":
  draw(userChoice, computerChoice);
  break;
  }
  if(userScore== 3){
    alert("j'ai gagne");
  }if(computerScore === 3){
    alert("vous avez perdu");
  }
}
