const imageOne = document.querySelector(".img1");
const imageTwo = document.querySelector(".img2");
const output = document.querySelector("h1");

let randomNumOne = Math.floor(Math.random() * 6) + 1;
let randomNumTwo = Math.floor(Math.random() * 6) + 1;

let attImageOne = imageOne.setAttribute(
  "src",
  `./images/dice${randomNumOne}.png`
);
let attImageTwo = imageTwo.setAttribute(
  "src",
  `./images/dice${randomNumTwo}.png`
);

if (randomNumOne > randomNumTwo) {
  output.innerText = "Player 1 wins!";
} else if (randomNumOne < randomNumTwo) {
  output.innerText = "Player 2 wins";
} else if (randomNumTwo === randomNumTwo) {
  output.innerText = "It's a draw";
}
