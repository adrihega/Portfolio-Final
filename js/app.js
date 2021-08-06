'use strict'

const raton        = document.querySelector('.raton')
const circulos     = document.querySelector('.circulos')
const circulo1     = document.querySelector('.circulos__circulo1')
const circulo2     = document.querySelector('.circulos__circulo2')
const circulo3     = document.querySelector('.circulos__circulo3')
const imgFondoIni  = document.querySelector('.inicio__img')
const nav          = document.querySelector('#nav')
const imgNav       = nav.querySelectorAll('.nav__img')
const textoNav     = nav.querySelectorAll('.nav__li.texto')
const about        = document.querySelector('#about')
const tecnologias  = about.querySelectorAll('.about__tecnologias')
const tituAbout    = about.querySelector('.about__h2')
const saludoAbout  = about.querySelector('.about__saludo')
const descAbout    = about.querySelector('.about__descripcion')
const infoAbout    = about.querySelectorAll('.about__estudios')
const infoAboutDer = about.querySelector('.about__derecha')
const trabajos     = document.querySelector('#trabajos')
const tituWork     = trabajos.querySelector('.trabajos__h2')
const letsWork     = trabajos.querySelector('.trabajos__p')
const lightbox     = document.querySelector('#lightbox')
const botonLight   = lightbox.querySelector('.lightbox__boton')
const portfolio    = document.querySelector('.portfolio')
const footer       = document.querySelector('#footer')
const correoFooter = footer.querySelector('.footer__correo')
const rrssFooter   = footer.querySelector('.footer__rrss')



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

efectoScroll(correoFooter)

efectoScroll(rrssFooter)


tecnologias.forEach(( v , i ) => {
    efectoScroll(tecnologias[i])
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
    circulo2.classList.add('activoLight')
    descAbout.classList.add('activo')
})

botonLight.addEventListener('click', () => {
    lightbox.classList.remove('activo')
    portfolio.classList.remove('activo')
    circulo2.classList.remove('activoLight')
    descAbout.classList.remove('activo')
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

letsWork.addEventListener('mouseover', () => {
    raton.classList.add('activo')
})

letsWork.addEventListener('mouseout', () => {
    raton.classList.remove('activo')
})

window.addEventListener('scroll', () => {
    let pixel6 = window.scrollY
    let distElem6 = window.innerHeight
    let altV6 = tituAbout.offsetTop

    let calculo6 = distElem6 - (altV6 / 1.5)

    if (pixel6 >= calculo6) {
        circulo2.classList.add('activo')
    } else {
        circulo2.classList.remove('activo')
    }
})

imgNav.forEach(( v , i ) => {
    imgNav[i].addEventListener('mouseover', () => {
        imgNav[i].classList.add('activo')
        raton.classList.add('activo')
    })
})

imgNav.forEach(( v , i ) => {
    imgNav[i].addEventListener('mouseout', () => {
        imgNav[i].classList.remove('activo')
        raton.classList.remove('activo')
    })
})

textoNav.forEach(( v , i ) => {
    textoNav[i].addEventListener('mouseover', () => {
        textoNav[i].classList.add('activo')
        raton.classList.add('activo')
    })
})

textoNav.forEach(( v , i ) => {
    textoNav[i].addEventListener('mouseout', () => {
        textoNav[i].classList.remove('activo')
        raton.classList.remove('activo')
    })
})


