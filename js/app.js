'use strict'

const body         = document.querySelector ('#body')
const cookies      = body.querySelector     ('#cookies')
const botonCookies = cookies.querySelector  ('.cookies__button')
const raton        = body.querySelector     ('.raton')
const circulos     = body.querySelector     ('.circulos')
const circulo1     = body.querySelector     ('.circulos__circulo1')
const circulo2     = body.querySelector     ('.circulos__circulo2')
const circulo3     = body.querySelector     ('.circulos__circulo3')
const nav          = body.querySelector     ('#nav')
const imgNav       = nav.querySelectorAll   ('.nav__img')
const textoNav     = nav.querySelectorAll   ('.nav__li.texto')
const inicio       = document.querySelector ('#inicio')
const h1Inicio     = inicio.querySelector   ('.inicio__h1')
const h2Inicio     = inicio.querySelector   ('.inicio__h2')
const about        = body.querySelector     ('#about')
const estAbout     = about.querySelector    ('.about__estatico')
const dinAbout     = about.querySelector    ('.about__dinamico')
const tecnologias  = about.querySelectorAll ('.about__tecnologias')
const tituAbout    = about.querySelector    ('.about__h2')
const saludoAbout  = about.querySelector    ('.about__saludo')
const descAbout    = about.querySelector    ('.about__descripcion')
const infoAbout    = about.querySelectorAll ('.about__estudios')
const infoAboutDer = about.querySelector    ('.about__derecha')
const trabajos     = body.querySelector     ('#trabajos')
const tituWork     = trabajos.querySelector ('.trabajos__h2')
const letsWork     = trabajos.querySelector ('.trabajos__p')
const lightbox     = body.querySelector     ('#lightbox')
const botonLight   = lightbox.querySelector ('.lightbox__boton')
const flechaIzq    = lightbox.querySelector ('.flechaIzq')
const flechaDer    = lightbox.querySelector ('.flechaDer')
const portfolio    = body.querySelector     ('.portfolio')
const enlacePort   = portfolio.querySelector('.portfolio__a')
const imgPort      = portfolio.querySelector('.portfolio__img')
const proyectoPort = portfolio.querySelector('.portfolio__proyecto')
const disenoPort   = portfolio.querySelector('.portfolio__diseno')
const footer       = body.querySelector     ('#footer')
const correoFooter = footer.querySelector   ('.footer__correo')
const rrssFooter   = footer.querySelector   ('.footer__rrss')
const imgFooter    = footer.querySelectorAll('.footer__img')
const botonMenu    = body.querySelector     ('.boton')
const menu         = body.querySelector     ('#menu')
const pestMenuWork = menu.querySelectorAll  ('.menu__proyecto')
const pestanaMenu  = menu.querySelectorAll  ('.menu__pestana')

let efectoScroll  = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel    = window.scrollY
        let altV     = window.innerHeight
        let distElem = elemento.offsetTop

        let calculo  = distElem - (altV / 1.5) 

        if (pixel >= calculo) {
        elemento.classList.add('activo')
        } else {
            elemento.classList.remove('activo')
        }
    })
}

let efectoScroll1 = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel1    = window.scrollY
        let altV1     = window.innerHeight
        let distElem1 = elemento.offsetTop

        let calculo1  = distElem1 - (altV1 / 1.2)

        if (pixel1 >= calculo1) {
        elemento.classList.add('activo')
        } else {
            elemento.classList.remove('activo')
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
        } else {
            elemento.classList.remove('activoIzq')
        }   
    })
}

let efectoScrollBottom = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel8 = window.scrollY
        let altV8 = window.innerHeight
        let distElem8 = elemento.offsetTop

        let calculo8 = distElem8 - altV8

        if (pixel8 >= calculo8) {
            elemento.classList.add('activo')
        }
    })
}

let efectoScrollVuelta = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel7    = window.scrollY
        let distElem7 = elemento.offsetTop

        let calculo7  = (distElem7 / 1.15)

        if(pixel7 >= calculo7) {
            elemento.classList.add('activoVuelta')
        } else {
            elemento.classList.remove('activoVuelta')
        }
    })
}

let efectoScrollVuelta2 = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel4    = window.scrollY
        let distElem4 = elemento.offsetTop

        if(pixel4 >= distElem4) {
            elemento.classList.add('activoVuelta')
        } else {
            elemento.classList.remove('activoVuelta')
        }
    })
}

let efectoRaton = (elemento) => {
    elemento.addEventListener('mouseover', () => {
        raton.classList.add('activo')
    })
}

let efectoRaton1 = (elemento) => {
    elemento.addEventListener('mouseout', () => {
        raton.classList.remove('activo')
    })
}

efectoScrollVuelta(h1Inicio)

efectoScrollVuelta(h2Inicio)

efectoScroll(saludoAbout)

efectoScrollVuelta(saludoAbout)

efectoScroll(tituAbout)

efectoScroll(tituWork)

efectoScroll(letsWork)

efectoScroll(estAbout)

efectoScrollVuelta(estAbout)

efectoScroll(dinAbout)

efectoScrollVuelta(dinAbout)

efectoScroll2(infoAboutDer)

efectoScrollVuelta(infoAboutDer)

efectoScrollBottom(correoFooter)

efectoScrollBottom(rrssFooter)

efectoRaton(correoFooter)

efectoRaton(rrssFooter)

efectoRaton(enlacePort)

efectoRaton(flechaIzq)

efectoRaton(flechaDer)

efectoRaton1(correoFooter)

efectoRaton1(rrssFooter)

efectoRaton1(enlacePort)

efectoRaton1(flechaIzq)

efectoRaton1(flechaDer)

infoAbout.forEach(( v , i ) => {
    efectoScroll2(infoAbout[i])
    efectoScrollVuelta(infoAbout[i])
})

tecnologias.forEach(( v , i ) => {
    efectoScroll(tecnologias[i])
    efectoScrollVuelta(tecnologias[i])
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
        circulo2.classList.remove('activo')
    })
})

imgFooter.forEach((v , i ) => {
    imgFooter[i].addEventListener('mouseover', () => {
        imgFooter[i].classList.add('activo')
    })

    imgFooter[i].addEventListener('mouseout', () => {
        imgFooter[i].classList.remove('activo')
    })
})

pestanaMenu.forEach(( v , i ) => {
    pestanaMenu[i].addEventListener('mouseover', () => {
        pestMenuWork[i].classList.add('activo')
    })
})

pestanaMenu.forEach(( v , i ) => {
    pestanaMenu[i].addEventListener('mouseout', () => {
        pestMenuWork[i].classList.remove('activo')
    })
})

portfolio.addEventListener('mouseover', () => {
    imgPort.classList.add('activo')
    circulo2.classList.remove('activoLight')
})

portfolio.addEventListener('mouseout', () => {
    imgPort.classList.remove('activo')
    circulo2.classList.add('activoLight')
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

botonLight.addEventListener('mouseover', () => {
    raton.classList.add('activo')
    botonLight.classList.add('activo')
})

botonLight.addEventListener('mouseout', () => {
    raton.classList.remove('activo')
    botonLight.classList.remove('activo')
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
    circulo2.classList.add('activoLight')
})

letsWork.addEventListener('mouseout', () => {
    raton.classList.remove('activo')
    circulo2.classList.remove('activoLight')
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


botonMenu.addEventListener('click', () => {
    menu.classList.toggle('activo')
    botonMenu.classList.toggle('activo')
})

// botonCookies.addEventListener('click', () => {
//     cookies.classList.add('activo')
// })

portfolio.addEventListener('mouseover', () => {
    enlacePort.classList.add('activo')
    proyectoPort.classList.add('activo')
    disenoPort.classList.add('activo')
})

portfolio.addEventListener('mouseout', () => {
    enlacePort.classList.remove('activo')
    proyectoPort.classList.remove('activo')
    disenoPort.classList.remove('activo')
})






