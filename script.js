
document.addEventListener('keypress', e => playSound(e.code.toLowerCase()));
document.addEventListener('click', e => {
    const el = e.target;
    if (el.classList.contains('key')) playSound(`key${el.innerText.toLowerCase()}`)
    if (el.classList.contains('play-button')) captureMySong()
})

function playSound(key) {
    const audioElement = document.querySelector(`#s_${key}`);

    if (audioElement) {
        const buttonElement = document.querySelector(`div[data-key="${key}"]`);
        audioElement.currentTime = 0;
        audioElement.play();    
        buttonElement.classList.add('active');
        setTimeout(() => buttonElement.classList.remove('active'), 300)
    }
}

function captureMySong() {
    const input = document.querySelector('#input').value;
    let i = 0;

    function playMySong() {
        if (i >= input.length) return;
        playSound(`key${input[i]}`);
        i++
        setTimeout (() => playMySong(), 300);
    }
    playMySong()
}







