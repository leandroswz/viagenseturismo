/*Menu Mobile*/
const btnMobile = document.querySelector('.btnMobile')
const iconBurger = document.querySelector('.btnMobile i')
const menuMobile = document.querySelector('.menuMobile')

btnMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('active')
    if (menuMobile.classList.contains('active')) {
        iconBurger.setAttribute('class', 'fa-solid fa-xmark')
    } else {
        iconBurger.setAttribute('class', 'fa-solid fa-bars')
    }
})

// -----------------------------------------------------------
function contato() {
    let modal = document.querySelector('.modal')
    modal.style.display = 'block';
}

function fechar() {
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}

// ------------------------------------------------------------

function servicos() {
    let modal2 = document.querySelector('.modal2')
    modal2.style.display = 'block';
}

function fechar2() {
    let modal2 = document.querySelector('.modal2')
    modal2.style.display = 'none';
}

// ------------------------------------------------------------

function sobre() {
    let modal3 = document.querySelector('.modal3')
    modal3.style.display = 'block';
}

function fechar3() {
    let modal3 = document.querySelector('.modal3')
    modal3.style.display = 'none';
}