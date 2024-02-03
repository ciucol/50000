const form = document.getElementById('forgotPassword')

form.addEventListener('submit', e => {
  e.preventDefault()

  const data = new FormData(form)
  const obj = {}

  data.forEach((value, key) => (obj[key] = value))
  console.log('sending')
  fetch('/auth/forgot-password', {
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
