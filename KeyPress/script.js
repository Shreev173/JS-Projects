window.addEventListener("keydown", (e) => {
  document.querySelector(
    ".result"
  ).innerHTML = `The key has been pressed <h2>${e.key}</h2>

  <p>the key code is ${e.keyCode}</p>
  `;
});
