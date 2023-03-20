const scoreElement = document.getElementById("score");
const rollButton = document.getElementById("roll-button");
const diceElement = document.getElementById("dice");
const messageElement = document.getElementById("message");

let score = 0;

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceElement.src = `dice${roll}.png`;
  diceElement.alt = `Dice ${roll}`;
  return roll;
}

function updateScore(roll) {
  if (roll === 1) {
    score = 0;
    messageElement.textContent = "You lost! Try again.";
    messageElement.classList.add("lost");
    messageElement.classList.remove("won");
  } else {
    score += roll;
    scoreElement.textContent = `Score: ${score}`;
    if (score >= 20) {
      messageElement.textContent = "You won! Play again.";
      score = 0;
      messageElement.classList.add("won");
      messageElement.classList.remove("lost");
    } else {
      messageElement.textContent = "";
      messageElement.classList.remove("won");
      messageElement.classList.remove("lost");
    }
  }
}

rollButton.addEventListener("click", () => {
  const roll = rollDice();
  updateScore(roll);
});