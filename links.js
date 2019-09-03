const body = document.querySelector('body')
const links = document.querySelector('a')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  body.classList.toggle('blue')
  links.classList.toggle('blue')
})