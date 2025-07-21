// Showing/Hidding Mega-Menu
const megaMenu = document.getElementById("mega-menu");
const otherLinks = document.getElementById("other-links");

otherLinks.addEventListener("click", () => {
  megaMenu.classList.toggle("toggle-menu");
});

// Animate Skills on scroll
const skillsSection = document.querySelector(".our-skills");
const skillBars = document.querySelectorAll(
  ".our-skills .skill .progress span"
);
let skillsOnView = false;

function changeWidth(el) {
  el.style.width = el.dataset.width;
}

// Stats number counting on scroll
const numbersSection = document.querySelector(".stats");
const numbers = document.querySelectorAll(".stats .box .number");
let numbersOnView = false;

function startCount(el) {
  const goal = el.dataset.goal;

  let counter = setInterval(() => {
    el.textContent++;

    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    if (!skillsOnView) {
      skillBars.forEach((skill) => changeWidth(skill));
      skillsOnView = true;
    }
  }

  if (window.scrollY >= numbersSection.offsetTop - 100) {
    if (!numbersOnView) {
      numbers.forEach((num) => startCount(num));
      numbersOnView = true;
    }
  }
};

// Events CountDown Timer
const eventDate = new Date("15 Sep, 2025 8:10:20").getTime();

let counter = setInterval(() => {
  const leftTime = eventDate - new Date().getTime();

  const days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((leftTime % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (leftTime < 0) {
    clearInterval(counter);
  }
}, 1000);

// Debuging the overflowing elements
document.querySelectorAll("*").forEach((el) => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log("Overflowing element:", el);
  }
});
