// an array of colors
const buttonColors = ["red", "blue", "green", "yellow"];
// game patter array to keep track of steps
const gamePattern = [];
// create a new variable
let level = 0;
// user clicked patttern
const userClickedPattern = [];

// start game
$(document).keypress(function (event) {
  if (event.keyCode === 97) {
    $("h1").text("Level: 0");
    nextSequence();
  }
});

function checkAnswer(currentLevel) {}

// random number
function nextSequence() {
  let ranNum = Math.floor(Math.random() * 4);
  level++;
  $("h1").text(`Level: ${level}`);
  let color = buttonColors[ranNum];
  $(`.${color}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

// game start func
function startGame(color) {
  gamePattern.push(color);
}

// play audio
function playAudio(track) {
  let sound = new Audio();
  sound.src = `./sounds/${track}.mp3`;
  sound.play();
}
// animate
function animatePress(pressedBtn) {
  console.log(pressedBtn);
  $(`#${pressedBtn}`).addClass("pressed");
  setTimeout(function () {
    $(`#${pressedBtn}`).removeClass("pressed");
  }, 100);
}
// detect click
$(".btn").click(function (event) {
  handler(event);
  playAudio(event.target.id);
  animatePress(event.target.id);
  nextSequence();
});

function handler(event) {
  let userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
}
