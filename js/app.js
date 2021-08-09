'use strict'

const body               = document.       querySelector   ('#body')
const cookies            = body.           querySelector   ('#cookies')
const botonCookies       = cookies.        querySelector   ('.cookies__button')
console.log(botonCookies)
const raton              = body.           querySelector   ('.raton')
const circulos           = body.           querySelector   ('.circulos')
const circulo1           = body.           querySelector   ('.circulos__circulo1')
const circulo2           = body.           querySelector   ('.circulos__circulo2')
const circulo3           = body.           querySelector   ('.circulos__circulo3')
const nav                = body.           querySelector   ('#nav')
const imgNav             = nav.            querySelectorAll('.nav__img')
const textoNav           = nav.            querySelectorAll('.nav__li.texto')
const inicio             = body.           querySelector   ('#inicio')
const h1Inicio           = inicio.         querySelector   ('.inicio__h1')
const h2Inicio           = inicio.         querySelector   ('.inicio__h2')
const about              = body.           querySelector   ('#about')
const estAbout           = about.          querySelector   ('.about__estatico')
const dinAbout           = about.          querySelector   ('.about__dinamico')
const tecnologias        = about.          querySelectorAll('.about__tecnologias')
const tituAbout          = about.          querySelector   ('.about__h2')
const saludoAbout        = about.          querySelector   ('.about__saludo')
const descAbout          = about.          querySelector   ('.about__descripcion')
const infoAbout          = about.          querySelectorAll('.about__estudios')
const infoAboutDer       = about.          querySelector   ('.about__derecha')
const trabajos           = body.           querySelector   ('#trabajos')
const tituWork           = trabajos.       querySelector   ('.trabajos__h2')
const footer             = body.           querySelector   ('#footer')
const correoFooter       = footer.         querySelector   ('.footer__correo')
const rrssFooter         = footer.         querySelector   ('.footer__rrss')
const imgFooter          = footer.         querySelectorAll('.footer__img')
const botonMenu          = body.           querySelector   ('.boton')
const menu               = body.           querySelector   ('#menu')
const enlaceMenu         = menu.           querySelectorAll('.menu__a')
const pestMenuWork       = menu.           querySelector   ('.menu__proyecto')
const pestMenuContact    = menu.           querySelector   ('.menu__proyectoContacto')
const pestanaMenuWork    = menu.           querySelector   ('.menu__pestanaWork')
const pestanaMenuContact = menu.           querySelector   ('.menu__pestanaContacto')
const aboutMenu          = menu.           querySelectorAll('.menu__li')
const portfolioScroll    = body.           querySelector   ('.portfolioScroll')
const disenoPortScroll   = portfolioScroll.querySelector   ('.portfolioScroll__diseno')
const proyectoPortScroll = portfolioScroll.querySelector   ('.portfolioScroll__proyecto')
const imgPortScroll      = portfolioScroll.querySelector   ('.portfolioScroll__img')
const enlacePortScroll   = portfolioScroll.querySelector   ('.portfolioScroll__a')
const filminScroll       = body.           querySelector   ('.filminScroll')
const disenoFilmScroll   = filminScroll.   querySelector   ('.filminScroll__diseno')
const proyectoFilmScroll = filminScroll.   querySelector   ('.filminScroll__proyecto')
const imgFilmScroll      = filminScroll.   querySelector   ('.filminScroll__img')
const enlaceFilmScroll   = filminScroll.   querySelector   ('.filminScroll__a')

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

let efectoScrollMitad = (elemento) => {
    let pixel9    = window.scrollY
    let distElem9 = window.innerHeight
    let altV9     = elemento.offsetTop

    let calculo9 = distElem9 - (altV9 / 2)

    if (pixel9 >= calculo9) {
        elemento.classList.add('activo')
    } else {
        elemento.classList.remove('activo')
    }
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

        let calculo7  = (distElem7 / 1.11)

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

let efectoScrollMovil = (elemento) => {
    window.addEventListener('scroll', () => {
        let pixel10    = window.scrollY
        let distElem10 = window.innerHeight
        let altV10     = (elemento.offsetTop === 0) ? elemento.offsetParent.offsetTop : elemento.offsetTop
    
        let calculo10 = distElem10 - (altV10 / 1.5)
    
        if (pixel10 >= calculo10) {
            elemento.classList.add('activoMovil')
        } else {
            elemento.classList.remove('activoMovil')
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

efectoScrollMovil(imgPortScroll)

efectoScroll(portfolioScroll)

efectoScroll(filminScroll)

efectoScrollVuelta(h1Inicio)

efectoScrollVuelta(h2Inicio)

efectoScroll(saludoAbout)

efectoScrollVuelta(saludoAbout)

efectoScroll(tituAbout)

efectoScroll(tituWork)

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

efectoRaton1(correoFooter)

efectoRaton1(rrssFooter)

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
        circulo2.classList.add('activoLight')
        raton.classList.add('activo')
    })
})

imgNav.forEach(( v , i ) => {
    imgNav[i].addEventListener('mouseout', () => {
        imgNav[i].classList.remove('activo')
        circulo2.classList.remove('activoLight')
        raton.classList.remove('activo')
    })
})

textoNav.forEach(( v , i ) => {
    textoNav[i].addEventListener('mouseover', () => {
        textoNav[i].classList.add('activo')
        raton.classList.add('activo')
        circulo2.classList.add('activoLight')
    })
})

textoNav.forEach(( v , i ) => {
    textoNav[i].addEventListener('mouseout', () => {
        textoNav[i].classList.remove('activo')
        raton.classList.remove('activo')
        circulo2.classList.remove('activoLight')
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

aboutMenu.forEach(( v , i ) => {
    botonMenu.addEventListener('click', () => {
        aboutMenu[i].classList.toggle('activo')
    })
})

pestanaMenuContact.addEventListener('mouseover', () => {
    pestMenuContact.classList.add('activo')
})

pestanaMenuContact.addEventListener('mouseout', () => {
    pestMenuContact.classList.remove('activo')
})

pestanaMenuWork.addEventListener('mouseover', () => {
    pestMenuWork.classList.add('activo')
})

pestanaMenuWork.addEventListener('mouseout', () => {
    pestMenuWork.classList.remove('activo')
})

enlaceMenu.forEach((v,i)=> {
    enlaceMenu[i].addEventListener('click', () => {
        menu.classList.remove('activo')
        botonMenu.classList.remove('activo')
        aboutMenu[i].classList.remove('activo')
    })
})

window.addEventListener('mousemove', (e) => {
    raton.style.transform = `translateY(${e.clientY}px) translateX(${e.clientX}px)`
})

window.addEventListener('scroll', () => {
    let pixel6    = window.scrollY
    let distElem6 = window.innerHeight
    let altV6     = tituAbout.offsetTop

    let calculo6 = distElem6 - (altV6 / 1.5)

    if (pixel6 >= calculo6) {
        circulo2.classList.add('activo')
    } else {
        circulo2.classList.remove('activo')
    }
})


window.addEventListener('scroll', () => {
    let pixel11    = window.scrollY
    let distElem11 = tituAbout.offsetTop

    if (pixel11 >= distElem11 / 1.2) {
        nav.classList.add('activo')
    } else {
        nav.classList.remove('activo')
    }
})


botonMenu.addEventListener('click', () => {
    menu.classList.toggle('activo')
    botonMenu.classList.toggle('activo')
    pestanaMenuWork.classList.toggle('activo')
    pestanaMenuContact.classList.toggle('activo')
})

botonCookies.addEventListener('click', () => {
    cookies.classList.add('activo')
})

portfolioScroll.addEventListener('mouseover', () => {
    imgPortScroll.classList.add('activo')
    disenoPortScroll.classList.add('activo')
    proyectoPortScroll.classList.add('activo')
    enlacePortScroll.classList.add('activo')
    circulo2.classList.add('activoPort')
})

portfolioScroll.addEventListener('mouseout', () => {
    imgPortScroll.classList.remove('activo')
    disenoPortScroll.classList.remove('activo')
    proyectoPortScroll.classList.remove('activo')
    enlacePortScroll.classList.remove('activo')
    circulo2.classList.remove('activoPort')
})

filminScroll.addEventListener('mouseover', () => {
    imgFilmScroll.classList.add('activo')
    disenoFilmScroll.classList.add('activo')
    proyectoFilmScroll.classList.add('activo')
    enlaceFilmScroll.classList.add('activo')
    circulo2.classList.add('activoFilmin')
})

filminScroll.addEventListener('mouseout', () => {
    imgFilmScroll.classList.remove('activo')
    disenoFilmScroll.classList.remove('activo')
    proyectoFilmScroll.classList.remove('activo')
    enlaceFilmScroll.classList.remove('activo')
    circulo2.classList.remove('activoFilmin')
})






