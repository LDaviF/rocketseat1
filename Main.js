/*abre menu*/ 
const nav = document.querySelector('#mainheader nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* item do menu */

const links = document.querySelectorAll('nav ul li a')
 
for(const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}


/* aplicar sombra no header da página ao descer o scroll */ 

const header = document.querySelector("mainheader")
const navHeight = mainheader.offsetHeight

window.addEventListener('scroll', function () {
  if(window.scrollY >= navHeight) {
    mainheader.classList.add('scroll')
    } else {
    mainheader.classList.remove('scroll')
    }
  }
)