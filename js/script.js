const hamburger_menu = document.querySelector(".hamburger-menu")
const container0 = document.querySelector(".container0")
const container1 = document.querySelector(".container1")
const links = document.querySelector(".links")
const links2 = document.querySelector(".links2")
const link = Array.from(document.querySelectorAll(".linkOption"))
const sideMenuItensLi = document.querySelectorAll('.links2 li')
const sideHamburger_menu = document.querySelector('.side-hamburger-menu')
const menuItems = document.querySelectorAll('.links a[href^="#"]')
const sideMenuItens = document.querySelectorAll('.links2 a[href^="#"]')
const btn1 = document.querySelector('.overlay a')
const totalSections = document.querySelectorAll('.section').length
let currentSection = 0
let start = null

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

window.onload = () => {
    if (typeof window.orientation !== 'undefined') {
        console.log('mobile device', window.navigator.userAgent)
    } else console.log('desktop', window.navigator.userAgent)
}

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
    let emailValidation = /\S+@\S+\.\S+/
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value

    if (email.match(emailValidation) && name !== '' && message !== '') {
        Email.send({
                SecureToken: "23951028-0acd-4d29-83be-59a21a309ec5",
                To: "caiqsgaspar@hotmail.com",
                From: "caiqsgaspar@gmail.com",
                Subject: `Mensagem de contato de ${email}`,
                Body: `${message}
            ${name}
            ${phone}`,
            })
            .then(
                message => {
                    alert("Email enviado com sucesso.")
                    console.log(message)
                }
            )
            .catch(error => console.log("error: " + error))
    } else {
        alert("Preencha corretamente os campos obrigatórios!")
    }

}

let currentSlide = 0;

function goPrevCard(clickedElement) {
    let ancorName = clickedElement.closest('div').getAttribute('id')
    let totalSlides = document.querySelectorAll(`.${ancorName} .slide-container .slide .card`).length;
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMarginCard(ancorName);
}

function goNextCard(clickedElement) {
    let ancorName = clickedElement.closest('div').getAttribute('id')
    let totalSlides = document.querySelectorAll(`.${ancorName} .slide-container .slide .card`).length;
    currentSlide++;
    if (currentSlide > (totalSlides) - 1) {
        currentSlide = 0;
    }
    updateMarginCard(ancorName);
}

function updateMarginCard(element) {
    let sliderWidth = document.querySelector(`.${element} .slide-container .slide .card`).clientWidth;
    let newMargin = (currentSlide * sliderWidth)
    document.querySelector(`.${element} .slide-container .slide`).style.marginLeft =
        `-${newMargin * 2}px`;
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

const doc = document.documentElement
doc.style.setProperty('--app-height', `${window.innerHeight}px`)

let totalHeight = window.innerHeight * totalSections
let sectionHeight = totalHeight / totalSections
document.querySelector(`.fullpage`).style.height = `${totalHeight}px`
document.querySelectorAll('.section').forEach(item => {
    item.style.height = `${sectionHeight}px`
})

function goPrev() {
    currentSection--;
    if (currentSection < 0) {
        currentSection = 0;
    }

    document.querySelectorAll('.section').forEach(item => {
        if (item.classList.contains('activeSection')) {
            item.classList.remove('activeSection')
        }
    })
    document.getElementById(`container${currentSection}`).classList.add('activeSection')

    document.querySelector(`.fullpage`).style.transform = `translate3d(0px, -${sectionHeight * currentSection}px, 0px)`

    animeScroll()
    typeWriterTest()
    hamburger_menu_animation()
}

function goNext() {
    currentSection++;
    if (currentSection > (totalSections - 1)) {
        currentSection = 3;
    }

    document.querySelectorAll('.section').forEach(item => {
        if (item.classList.contains('activeSection')) {
            item.classList.remove('activeSection')
        }
    })
    document.getElementById(`container${currentSection}`).classList.add('activeSection')

    document.querySelector(`.fullpage`).style.transform = `translate3d(0px, -${sectionHeight * currentSection}px, 0px)`

    animeScroll()
    typeWriterTest()
    hamburger_menu_animation()
}

window.addEventListener('wheel', debounce((event) => {
    if (event.deltaY < 0) {
        goPrev()
        console.log('scrolling up')
    } else if (event.deltaY > 0) {
        goNext()
        console.log('scrolling down')
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
})

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    target.forEach(function (element) {
        if (element.closest('.section').classList.contains('activeSection')) {
            setTimeout(() => {
                element.classList.add(animationClass)
            }, 900)
        }
    })
}

elementTest = document.querySelector('.text_services')
Array.from('Meus Serviços').forEach(letra => elementTest.innerHTML += `<span class='letterHidden'>${letra}</span>`)
letters = document.querySelectorAll('.text_services > span')

function typeWriterTest() {
    if (elementTest.closest('.section').classList.contains('activeSection')) {
        setTimeout(() => {
            letters.forEach((caracter, i) => {
                setTimeout(() => {
                    caracter.classList.remove('letterHidden')
                    caracter.classList.add('letterVisible')
                }, 50 * i)
            })
        }, 800)
    }
}

function hamburger_menu_animation() {
    setTimeout(() => {
        if (window.innerWidth < 1100) {
            if (document.getElementById(`container0`).classList.contains('activeSection')) {
                links2.style.zIndex = "-1"
                container0.classList.toggle("active")
                sideHamburger_menu.classList.add("hidden")
                sideHamburger_menu.classList.remove("shown")
                sideMenuItensLi.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("hidden")
                        item.classList.remove("shown")
                    }, 50 * (index));
                })
            } else {
                links2.style.zIndex = "99"
                container0.classList.remove("active")
                sideHamburger_menu.classList.remove("hidden")
                sideHamburger_menu.classList.add("shown")
            }
        } else {
            if (document.getElementById(`container0`).classList.contains('activeSection')) {
                links2.style.zIndex = "-1"
                container0.classList.toggle("active")
                sideMenuItensLi.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("hidden")
                        item.classList.remove("shown")
                    }, 50 * (index));
                })
            } else {
                links2.style.zIndex = "99"
                container0.classList.remove("active")
                sideMenuItensLi.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.remove("hidden")
                        item.classList.add("shown")
                    }, 50 * (index))
                })
            }
        }
    }, 800)
}

hamburger_menu.addEventListener("click", () => {
    container0.classList.toggle("active");
})

links.addEventListener("click", (e) => {
    for (let i = 0; i < link.length; i++) {
        link[i].classList.remove('active');
    }
    e.target.classList.add('active');
})

sideHamburger_menu.addEventListener("click", () => {
    if (!document.querySelector(`.sideBubbleLink`).classList.contains('hidden')) {
        sideMenuItensLi.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("hidden")
                item.classList.remove("shown")
            }, 50 * (index));
        })
    } else {
        sideMenuItensLi.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove("hidden")
                item.classList.add("shown")
            }, 50 * (index))
        })
    }
})

function scrollToIdOnClick(element) {
    let whereToScroll = element.getAttribute('data-to')
    let position = document.getElementById(`${whereToScroll}`).offsetTop
    let containerN = document.getElementById(`${whereToScroll}`).getAttribute('data-anchor')

    currentSection = containerN

    document.querySelectorAll('.section').forEach(item => {
        if (item.classList.contains('activeSection')) {
            item.classList.remove('activeSection')
        }
    })
    document.getElementById(`container${currentSection}`).classList.add('activeSection')
    
    document.querySelector(`.fullpage`).style.transform = `translate3d(0px, -${position}px, 0px)`

    animeScroll()
    typeWriterTest()
    hamburger_menu_animation()
}