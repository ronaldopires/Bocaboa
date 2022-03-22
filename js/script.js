const nav = document.querySelector('#main-header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
const header = document.querySelector('#main-header')
const navHeight = header.offsetHeight

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* Swiper JS */
const swiper = new Swiper('.swiper', {
  slidePerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* Scroll Reveal JS */
const scrollReveal = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #cotact .links
  `,
  { interval: 100 }
)
