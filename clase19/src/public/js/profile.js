const logoutButton = document.getElementById('logout')

logoutButton.addEventListener('click', e => {
  console.log('logout')
  fetch('/auth/logout')
    .then(response => response.json())
    .then(data => {
      window.location.href = '/login'
    })
    .catch(error => {
      const err = JSON.parse(error)
      console.log(err)
    })
})
