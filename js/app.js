'use strict'

const tecnologias = document.querySelectorAll('.about__tecnologias')
console.log(tecnologias)

tecnologias.forEach((v , i) => {
    
    window.addEventListener('scroll', () => {
        let pixel    = window.scrollY
        let altV     = window.innerHeight
        let distElem = tecnologias[i].offsetTop
        console.log(distElem)

        let calculo  = distElem - (altV / 1)

        if (pixel >= calculo) {
        tecnologias[i].classList.add('activo')
        }   
    })
})

