var passwrd = document.getElementById('psw')
var btn = document.getElementById('psw-img')

function showHidePsw() {
  if (passwrd.type === 'password') {
    passwrd.type = 'text'
    btn.src = 'ocultar.png'
  }
  
  else {
    passwrd.type = 'password'
    btn.src = 'mostrar.png'
  }
}