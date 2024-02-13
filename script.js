const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Esta no es la respuesta correcta',
  'Piensalo muy bien simp',
  'Que lo pienses >:v',
  'Ya intentaste con el otro lado?',
  '<----- Hay otro boton',
  'Esta no es opcion',
  'No, no es',
  'Que NOOOOOO >:V'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})