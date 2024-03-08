let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//step-3
const genComChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor( Math.random() * 3); /* math.floor take round of value. And if we want valur from 0 to 2, have to multiply by 3(ek number extra lena) */
  return options[randIdx];
};

//step-4 
const drawGame = () => {
  msg.innerText = "Game was draw.Play again!!";
  msg.style.backgroundColor = "#29274C";
};

//step-5
const shoWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Congratulations !! You win !! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `Hmmmm....You lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};

//step-2
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //Generate computer choice
  const compChoice = genComChoice();
  console.log("comp choice = ", compChoice);

  //We'll consider what users and computers suggest, and then figure out which one to go with.
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //comp choice will be - paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //comp choice will be - rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //comp choice will be - rock, paper
      userWin = compChoice ==="rock" ? false : true;
    }

    shoWinner(userWin, userChoice, compChoice);
  }
};

//step - 1
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
