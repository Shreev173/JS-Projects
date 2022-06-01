window.addEventListener("keydown", (e) => {
  //   console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"] `);
  console.log(audio);
  console.log(key);
  if (!audio) return;
  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");

const removeTransition = (e) => {
  // console.log(e);

  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
};

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
a;
