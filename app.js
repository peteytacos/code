const btn = document.querySelector('button');
const audio = new Audio('kendrick_coldplay.wav');

btn.onclick = () => {
  audio.play();
};

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 67 && event.metaKey && event.altKey) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }
});