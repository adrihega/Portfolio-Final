'use strict'

const raton        = document.querySelector('.raton')
const circulos     = document.querySelector('.circulos')
const circulo1     = document.querySelector('.circulos__circulo1')
const circulo2     = document.querySelector('.circulos__circulo2')
const circulo3     = document.querySelector('.circulos__circulo3')
const nav          = document.querySelector('.nav')
const menuNav      = document.querySelectorAll('.nav__li')
const tecnologias  = document.querySelectorAll('.about__tecnologias')
const tituAbout    = document.querySelector('.about__h2')
const saludoAbout  = document.querySelector('.about__saludo')
const infoAbout    = document.querySelectorAll('.about__estudios')
const infoAboutDer = document.querySelector('.about__derecha')
const tituWork     = document.querySelector('.trabajos__h2')
const letsWork     = document.querySelector('.trabajos__p')
const lightbox     = document.querySelector('.lightbox')
const botonLight   = document.querySelector('.lightbox__boton')
const portfolio = document.querySelector('.portfolio')
const correoFooter = document.querySelector('.footer__correo')
const rrssFooter   = document.querySelector('.footer__rrss')
// const fondoGit     = document.querySelector('.portfolio__imgGit')



let efectoScroll  = (elemento) => {
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

let efectoScroll3 = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel4    = window.scrollY
        let distElem4 = window.innerHeight
        let altV4     = tituWork.offsetTop
    
        let calculo4  = distElem4 - (altV4 / 8)
    
        if (pixel4 >= calculo4) {
            elemento.classList.add('activo')
        } else {
            elemento.classList.remove('activo')
        }
    })
}

efectoScroll1(saludoAbout)

efectoScroll(tituAbout)

efectoScroll1(tituWork)

efectoScroll1(letsWork)

efectoScroll2(infoAboutDer)

efectoScroll3(circulo2)

efectoScroll3(circulo3)

efectoScroll(correoFooter)

efectoScroll(rrssFooter)

tecnologias.forEach(( v , i ) => {
    efectoScroll(tecnologias[i])
})

menuNav.forEach(( v , i ) => {

    menuNav[i].addEventListener('mouseover', () => {
        menuNav[i].classList.add('activoTexto')
        raton.classList.add('activo')
    })

    menuNav[i].addEventListener('mouseout', () => {
        menuNav[i].classList.remove('activoTexto')
        raton.classList.remove('activo')
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

window.addEventListener('mousemove', (e) => {
    raton.style.transform = `translateY(${e.clientY}px) translateX(${e.clientX}px)`
})

letsWork.addEventListener('click', () => {
    lightbox.classList.add('activo')
    portfolio.classList.add('activo')
})

botonLight.addEventListener('click', () => {
    lightbox.classList.remove('activo')
    portfolio.classList.remove('activo')
})

window.addEventListener('scroll', () => {
    let pixel5    = window.scrollY
    let distElem5 = window.innerHeight
    let altV5     = (letsWork.offsetTop === 0) ? tituWork.offsetTop : letsWork.offsetTop

    let calculo5  = distElem5 - (altV5 / 1.5)

    if (pixel5 >= calculo5) {
        letsWork.classList.add('activo')
    }

})





