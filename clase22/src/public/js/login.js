const form = document.getElementById('loginForm')

form.addEventListener('submit', e => {
  e.preventDefault()

  const data = new FormData(form)
  const obj = {}

  data.forEach((value, key) => (obj[key] = value))

  fetch('/auth/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(obj),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})
