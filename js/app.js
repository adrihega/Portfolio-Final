'use strict'

const circulos     = document.querySelector('.circulos')
const nav          = document.querySelector('.nav')
const menuNav      = document.querySelectorAll('.nav__li')
const tecnologias  = document.querySelectorAll('.about__tecnologias')
const tituAbout    = document.querySelector('.about__h2')
console.log(tituAbout)
const saludoAbout  = document.querySelector('.about__saludo')
const infoAbout    = document.querySelectorAll('.about__estudios')
const infoAboutDer = document.querySelector('.about__derecha')
const tituWork     = document.querySelector('.trabajos__h2')



let efectoScroll = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel    = window.scrollY
        let altV     = window.innerHeight
        let distElem = elemento.offsetTop

        let calculo  = distElem - (altV / 1)

        if (pixel >= calculo) {
        elemento.classList.add('activo')
        }   
    })
}

let efectoScroll1 = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel1    = window.scrollY
        let altV1     = window.innerHeight
        let distElem1 = elemento.offsetTop

        let calculo1  = distElem1 - (altV1 / 1.5)

        if (pixel1 >= calculo1) {
        elemento.classList.add('activo')
        }   
    })
}

let efectoScroll2 = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel2    = window.scrollY
        let altV2     = window.innerHeight
        let distElem2 = elemento.offsetTop

        let calculo2  = distElem2 - (altV2 / 1.5)

        if (pixel2 >= calculo2) {
        elemento.classList.add('activoIzq')
        }   
    })
}

efectoScroll1(saludoAbout)

efectoScroll(tituAbout)

efectoScroll2(infoAboutDer)

tecnologias.forEach(( v , i ) => {
    efectoScroll(tecnologias[i])
})

menuNav.forEach(( v , i ) => {

    menuNav[i].addEventListener('mouseover', () => {
        menuNav[i].classList.add('activoTexto')
    })

    menuNav[i].addEventListener('mouseout', () => {
        menuNav[i].classList.remove('activoTexto')
    })

})

infoAbout.forEach(( v , i ) => {
    efectoScroll2(infoAbout[i])
})

window.addEventListener('scroll', () => {
    let pixel3    = window.scrollY
    let distElem3 = window.innerHeight
    let altV3     = tituAbout.offsetTop

    let calculo3  = distElem3 - (altV3 / 9)

    if (pixel3 >= calculo3 ) {
        nav.classList.add('activo')
    } else {
        nav.classList.remove('activo')
    }
})

window.addEventListener('scroll', () => {
    let pixel4    = window.scrollY
    let distElem4 = window.innerHeight
    let altV4     = tituWork.offsetTop

    let calculo4  = distElem4 - (altV4 / 1.5)

    if (pixel4 >= calculo4) {
        circulos.classList.add('activo')
    }
})





