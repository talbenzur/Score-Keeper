const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 5;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;

    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disable = true; //bulma
      opponent.button.disable = true; //bulma
    }
    player.display.textContent = player.score;
  }
}

p1Button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2Button.addEventListener("click", () => {
  updateScore(p2, p1);
});

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("winner", "loser");
    p.button.disable = false;
  }
}

resetButton.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
