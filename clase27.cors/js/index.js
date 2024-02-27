console.log('desde la terminal')

function byeBye() {
  fetch('http://localhost:3000/byeBye')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
