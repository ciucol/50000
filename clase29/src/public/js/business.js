console.log('hi desde el server')

const url = '/business'
fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      // Encuentra el elemento ol en el DOM
      const businessList = document.querySelector('ol')
      // Recorre el arreglo de negocios del JSON
      data.message.forEach(business => {
        // Crea un elemento li para el negocio
        const businessItem = document.createElement('li')
        // Agrega el nombre del negocio al li
        businessItem.textContent = business.name
        // Crea una lista no ordenada para los productos
        const productList = document.createElement('ul')

        // Recorre el arreglo de productos del negocio
        business.products.forEach(item => {
          // Crea un elemento li para el producto
          const productItem = document.createElement('li')
          // Agrega la información del producto al li
          productItem.textContent = `${item.product.name} - Size: ${item.product.size} - Price: $${item.product.price}`
          // Añade el li del producto a la lista no ordenada
          productList.appendChild(productItem)
        })

        // Añade la lista de productos al li del negocio
        businessItem.appendChild(productList)
        // Añade el li del negocio a la lista ordenada principal
        businessList.appendChild(businessItem)
      })
    }
  })
  .catch(error => console.log(error))
