const body = document.querySelector('body')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const message = document.createElement('p')
  message.textContent = 'Hi Everybody!'
  body.appendChild(message)
})