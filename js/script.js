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
/* Scroll Header */
function changeHeaderWhenScroll() {
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
  activateMenuCurrent()
})

/* Swiper JS */
const swiper = new Swiper('.swiper', {
  slidePerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Scroll Reveal JS */
ScrollReveal({
  duration: 900,
  delay: 400,
  distance: '60px',
  opacity: 0,
  reset: true
})

ScrollReveal().reveal('#about .image, #testimonials header, .form', {
  delay: 400,
  origin: 'top'
})
ScrollReveal().reveal('#home .text, #services .card, #contact .links', {
  origin: 'bottom'
})
ScrollReveal().reveal('#home .image, #services header, #contact .text', {
  delay: 150,
  origin: 'top'
})
ScrollReveal().reveal(
  '#about .text, #testimonials .testimonials, footer .brand',
  {
    delay: 200,
    origin: 'bottom'
  }
)
const sections = document.querySelectorAll('main section[id]')
function activateMenuCurrent() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
