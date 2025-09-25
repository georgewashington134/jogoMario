const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const scoreEl = document.getElementById("score");
const btnShowScore = document.getElementById("btnShowScore");

let score = 0;
let isGameOver = false;

const jump = () => {
    if (isGameOver) return;
    if (!mario) return;
    mario.classList.add("jump");

    setTimeout(() => {
        if (mario) mario.classList.remove("jump");
    }, 500);
}

// increase score each time the pipe finishes an animation cycle
if (pipe) {
    pipe.addEventListener("animationiteration", () => {
        if (isGameOver) return;
        score += 1;
        if (scoreEl) scoreEl.textContent = score;
        try {
            const high = Number(localStorage.getItem("marioHighScore") || 0);
            if (score > high) localStorage.setItem("marioHighScore", String(score));
        } catch (e) {
            // localStorage may be unavailable in some contexts
            console.warn('could not access localStorage', e);
        }
    });
}

const loop = setInterval(() => {
    const pipeEl = document.querySelector(".pipe");
    if (!pipeEl || !mario) return;

    const pipePosition = pipeEl.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {

        pipeEl.style.animation = "none";
        pipeEl.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        isGameOver = true;
        clearInterval(loop);

    }

}, 10);

if (btnShowScore) {
    btnShowScore.addEventListener("click", () => {
        let high = 0;
        try {
            high = Number(localStorage.getItem("marioHighScore") || 0);
        } catch (e) {
            console.warn('localStorage unavailable', e);
        }
        alert(`Pontuação atual: ${score}\nMaior pontuação: ${high}`);
    });
}

// Reset button removed — to reset score use the Score dialog or implement a reset control if needed.

document.addEventListener("keydown", jump);
