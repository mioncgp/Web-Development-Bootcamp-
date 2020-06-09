// an array of colors
const buttonColors = ["red", "blue", "green", "yellow"];
// game patter array to keep track of steps
const gamePattern = [];
// random color
let color = buttonColors[nextSequence()];

// generates a random numner
function nextSequence() {
  let ranNum = Math.floor(Math.random() * 4);
  return ranNum;
}
$(`.${color}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

function playAudio(track) {
  let sound = new Audio();
  sound.src = `./sounds/${track}.mp3`;
  sound.play();
}
