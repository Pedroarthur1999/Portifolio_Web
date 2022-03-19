let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
  let sideBar = document
    .querySelector(".container")
    .classList.toggle("show-menu");
});
let conteudos = document.querySelector(".menu-item-2");
const button_event = document.querySelector(".button");

button_event.addEventListener("click", function () {
  console.log("clicou");
});
const menuLinks = document.querySelectorAll('a[href^="#"]');

 console.log(menuLinks);
function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target);
  smoothScrollTo(0, distanceFromTheTop, 1300);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

window.onscroll = function () {
  myFunction();
  visivel();
};

function myFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("myP").className = "arrow-up";
  } else {
    document.getElementById("myP").className = "arrow";
  }
}

function visivel() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    document.getElementById("teste").className = "conhecimentos";
  }
}

function visivel2() {
  if (
    document.body.scrollTop > 750 ||
    document.documentElement.scrollTop > 750
  ) {
    document.getElementsById("teste2").className = "image_groups2";
  }
}

// efeito carregamento

function spin() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  setTimeout(function () {
    document.querySelector(".spin").classList.toggle("-true");
  }, 0);

  setTimeout(function () {
    document.querySelector(".spin").classList.remove("-true");
  }, 1 * 1000);

  setTimeout(function () {
    document.querySelector(".cover").classList.toggle("-true");
  }, 0);

  setTimeout(function () {
    document.querySelector(".cover").classList.toggle("-true");
  }, 1000);
}
