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
  if (rockPosition < 60 && rockPosition > 0 && heroPosition < 60) {
    rock.style.animation = "none";
    rock.style.left = `${rockPosition}px`;

    hero.style.animation = "none";
    hero.style.bottom = `${heroPosition}px`;

    hero.src = "./images/pixel-skeleton (1).gif";
    hero.style.width = "250px";
    hero.style.marginLeft = "34%";
    hero.style.marginRight = "45%";
    hero.style.marginBottom = "20%";

    score = count;

    alert("GAME OVER");
    const name = prompt("Insira seu nome:");

    alert("Parabéns " + name + "!" + "\nSeu score é: " + score);

    clearInterval(loop);
  }
}, 10);
document.addEventListener("keydown", jump);
