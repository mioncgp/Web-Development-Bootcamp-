let drums = document.querySelectorAll(".drum");

function PlayAudio(el) {
  let song = new Audio();
  song.src = `sounds/drum-${el}.mp3`;
  song.play();
}

for (let oneDrum of drums) {
  oneDrum.addEventListener("click", function () {
    let el = oneDrum.classList[0];
    PlayAudio(el);
    Animate(el);
  });
}

function Animate(el) {
  let activeEl = document.querySelector("." + el);
  activeEl.classList.add("pressed");
  setTimeout(function () {
    activeEl.classList.remove("pressed");
  }, 500);
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 87) {
    PlayAudio("w");
    Animate("w");
  } else if (event.keyCode === 65) {
    PlayAudio("a");
    Animate("a");
  } else if (event.keyCode === 83) {
    PlayAudio("s");
    Animate("s");
  } else if (event.keyCode === 68) {
    PlayAudio("d");
    Animate("d");
  } else if (event.keyCode === 74) {
    PlayAudio("j");
    Animate("j");
  } else if (event.keyCode === 75) {
    PlayAudio("k");
    Animate("k");
  } else if (event.keyCode === 76) {
    PlayAudio("l");
    Animate("l");
  }
});
