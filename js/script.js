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
