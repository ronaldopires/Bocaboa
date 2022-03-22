const nav = document.querySelector('#main-header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

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
/* Scroll Header */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#main-header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
/* Button back to top */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
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
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #cotact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)
