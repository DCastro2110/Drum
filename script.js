// Rodando o som de acordo com a tecla enviada
document.addEventListener("keypress", (e) => playSound(e.code.toLowerCase()));

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("key"))
    playSound(`key${el.innerText.toLowerCase()}`);
  if (el.classList.contains("play-button")) captureMySong();
});

// Permitindo que apenas as teclas necessárias sejam adicionadas ao input
document.addEventListener("keypress", (e) => {
  const input = document.querySelector("#input");

  if (document.activeElement !== input) return;
  if (e.key === "Enter") return captureMySong();
  e.preventDefault();

  const keys = document.querySelectorAll(".keys .key");

  if (e.key === " ") return (input.value += e.key);

  keys.forEach((key) => {
    if (e.code === `Key${key.innerHTML}`) {
      input.value += e.key;
    }
  });
});

function playSound(key) {
  const audioElement = document.querySelector(`#s_${key}`);

  // Verificando se existe esse elemento
  if (audioElement) {
    const buttonElement = document.querySelector(`div[data-key="${key}"]`);
    audioElement.currentTime = 0;
    audioElement.play();
    buttonElement.classList.add("active");
    setTimeout(() => buttonElement.classList.remove("active"), 300);
  }
}

function captureMySong() {
  const input = document.querySelector("#input").value;
  let i = 0;

  function playMySong() {
    if (i >= input.length) return;
    playSound(`key${input[i]}`);
    i++;
    setTimeout(() => playMySong(), 300);
  }
  playMySong();
}
