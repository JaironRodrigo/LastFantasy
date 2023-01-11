const hero = document.querySelector(".hero");
const rock = document.querySelector(".rock");
const jump = () => {
  hero.classList.add("jump");

  setTimeout(() => {
    hero.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const rockPosition = rock.offsetleft;
  const heroPosition = +window.getComputedStyle(hero).bottom.replace("px", "");

  if (rockPosition <= 120 && heroPosition < 140) {
    rock.style.animation = "none";
  }
}, 10);

document.addEventListener("keydown", jump);
