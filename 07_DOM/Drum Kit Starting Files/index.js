let drums = document.querySelectorAll(".drum");
let d1 = document.querySelector(".w");

function PlayAudio(el) {
  let song = new Audio();
  song.src = `sounds/drum-${el}.mp3`;
  song.play();
}

for (let oneDrum of drums) {
  oneDrum.addEventListener("click", function () {
    let el = oneDrum.classList[0];
    PlayAudio(el);
  });
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 87) {
    PlayAudio("w");
  } else if (event.keyCode === 65) {
    PlayAudio("a");
  } else if (event.keyCode === 83) {
    PlayAudio("s");
  } else if (event.keyCode === 68) {
    PlayAudio("d");
  } else if (event.keyCode === 74) {
    PlayAudio("j");
  } else if (event.keyCode === 75) {
    PlayAudio("k");
  } else if (event.keyCode === 76) {
    PlayAudio("l");
  }
});
