const pianoKeys = document.querySelectorAll(".piano .key");

let audio = new Audio("notes/A.mp3");

const playTune = (key) => {
  audio.src = `notes/${key}.mp3`
  audio.play();

  const clickedkey = document.querySelector(`[data-key="${key}"]`);
  clickedkey.classList.add("active");
}

pianoKeys.forEach(key => {
  key.addEventListener("click" , ()=> playTune(key.dataset.key))

});

const pressedkey = (a) => {
  playTune(a.key);
}

document.addEventListener("keydown" , pressedkey);
