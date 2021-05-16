const hamburger_menu = document.querySelector(".hamburger-menu");
const container0 = document.querySelector(".container0");
const container1 = document.querySelector(".container1");
const links = document.querySelector(".links");
const link = Array.from(document.querySelectorAll(".linkOption"));
const sideMenuItensLi = document.querySelectorAll('.links2 li');
const menuItems = document.querySelectorAll('.links a[href^="#"]');
const sideMenuItens = document.querySelectorAll('.links2 a[href^="#"]');
const btn1 = document.querySelector('.overlay a[href^="#"]');
const totalSections = document.querySelectorAll('.section').length
let currentSection = 0
let start = null

window.onload = () => {
    if (typeof window.orientation !== 'undefined') { 
        console.log('mobile device')
        document.querySelector("body").style.overflow = "auto"
     }
}

window.addEventListener('scroll', () => {
    // let scrollPos = window.scrollY; //window.scrollY returns the number of pixels that the document is currently scrolled vertically.
    // container1.style.backgroundSize = `${scrollPos/50+100}%`

    if (window.pageYOffset === document.getElementById(`container0`).offsetTop) {
        container0.classList.toggle("active");
        sideMenuItensLi.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("hidden")
                item.classList.remove("shown")
            }, 50 * (index));
        })
    } else {
        container0.classList.remove("active")
        sideMenuItensLi.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove("hidden")
                item.classList.add("shown")
            }, 50 * (index))
        })
    }
})

hamburger_menu.addEventListener("click", () => {
    container0.classList.toggle("active");
})

links.addEventListener("click", (e) => {
    for (let i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    e.target.classList.add('active');
})

const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function goPrev() {
    currentSection--;
    if (currentSection < 0) {
        currentSection = 0;
    }
    return document.getElementById(`container${currentSection}`).scrollIntoView();
}

function goNext() {
    currentSection++;
    if (currentSection > (totalSections - 1)) {
        currentSection = 3;
    }
    return document.getElementById(`container${currentSection}`).scrollIntoView();
}

(() => {
    arrayPositionSection = []
    document.querySelectorAll('.section').forEach(item => {
        objPair = {}
        objPair[item.offsetTop] = item.getAttribute('id')
        arrayPositionSection.push(objPair)
    })
    console.log(arrayPositionSection)
})()

function containerPosition() {
    for (let i = 0; i < totalSections; i++) {
        if (Math.ceil(window.pageYOffset) === document.getElementById(`container${i}`).offsetTop) {
            currentSection = i
        }
    }
}

window.addEventListener('wheel', debounce((event) => {
    containerPosition()

    if (event.deltaY < 0) {
        goPrev()
        console.log('scrolling up');
    } else if (event.deltaY > 0) {
        goNext()
        console.log('scrolling down');
    }
}, 200))

window.addEventListener('touchstart', (event) => {
    start = event.changedTouches[0];
});


window.addEventListener('touchend', (event) => {
    let end = event.changedTouches[0];

    if (end.screenY - start.screenY > 0) {
        goPrev()
        console.log('scrolling up');
    } else if (end.screenY - start.screenY < 0) {
        goNext()
        console.log('scrolling down');
    }
});

btn1.addEventListener('click', scrollToIdOnClick)

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

sideMenuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) /*- 80*/ ;
    scrollToPosition(to);
    containerPosition()
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    })
    // smoothScrollTo(0, to);
}

/*
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 200));
}

elementTest = document.querySelector('.textTest')
Array.from('Meus Serviços').forEach(letra => elementTest.innerHTML += `<span class='letterHidden'>${letra}</span>`)
letters = document.querySelectorAll('.textTest > span')

function typeWriterTest() {
    letters.forEach((caracter, i) => {
        setTimeout(() => {
            caracter.classList.remove('letterHidden')
            caracter.classList.add('letterVisible')
        }, 60 * i)
    });
}
typeWriterTest()

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function sendEmail() {
    Email.send({
            SecureToken: "23951028-0acd-4d29-83be-59a21a309ec5",
            To: "caiqsgaspar@hotmail.com",
            From: "caiqsgaspar@gmail.com",
            Subject: `Mensagem de contato de ${document.getElementById('email').value}`,
            Body: `${document.getElementById('message').value}
            ${document.getElementById('name').value}`,
        })
        .then(
            message => console.log(message)
        )
        .catch(error => console.log("error: " + error))
}