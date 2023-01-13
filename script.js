let hero = document.getElementById("hero");
let rock = document.getElementById("rock");
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

    hero.src = "./images/youdied.webp";
    hero.style.width = "250px";
    hero.style.marginBottom = "200px";
    hero.style.marginLeft = "350px";

    clearInterval(loop);
  }
}, 10);
document.addEventListener("keydown", jump);
