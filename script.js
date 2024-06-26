let hamburguer = document.querySelector(".hamburguer");
let conteudos = document.querySelector(".menu-item-2");


hamburguer.addEventListener("click", function () {
    let sideBar = document
        .querySelector(".container")
        .classList.toggle("show-menu");
});

const menuLinks = document.querySelectorAll('a[href^="#"]');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
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
const button_left = document.querySelector(".arrow-left");
const button_right = document.querySelector(".arrow-right");
const projects_row = document.querySelector(".projects");

let row_right = 0;

button_right.addEventListener("click", function () {
    if (row_right > 288 * 2 * -1) {
        row_right -= 288;
        projects_row.style.transform = `translateX(${row_right}px)`; //row_right + "px";
    }
});

button_left.addEventListener("click", function () {
    if (row_right < 0) {
        row_right += 288;
        projects_row.style.transform = `translateX(${row_right}px)`;
        console.log(row_right);
    }
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('.father-box', { duration: 1000 })
sr.reveal('secao-header', { duration: 1000 })
ScrollReveal().reveal('.flex-test', { duration: 1000 })
