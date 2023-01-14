let hero = document.getElementById("hero");
let rock = document.getElementById("rock");
var count = 0;

function score() {
  count++;
  var counter = document.getElementById("score");
  counter.innerHTML = "Score: " + count;
}

function startCounter() {
  score();
  setTimeout(startCounter, 50, window);
}

document.addEventListener("DOMContentLoaded", function () {
  startCounter();
});
const jump = () => {
  hero.classList.add("jump");

  setTimeout(() => {
    hero.classList.remove("jump");
  }, 500);
};

const loop = setInterval(function () {
  var rockPosition = rock.offsetLeft;
  var heroPosition = +window.getComputedStyle(hero).bottom.replace("px", "");
  if (rockPosition < 100 && rockPosition > 0 && heroPosition < 90) {
    rock.style.animation = "none";
    rock.style.left = `${rockPosition}px`;

    hero.style.animation = "none";
    hero.style.bottom = `${heroPosition}px`;

    hero.src = "./images/pixel-skeleton (1).gif";
    hero.style.width = "100px";

    score = 0;

    clearInterval(loop);
  }
}, 10);
document.addEventListener("keydown", jump);
