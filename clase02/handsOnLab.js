class TicketManager {
  #eventos = []
  #precioBaseDeGanancia = 0.15
  #id = 1

  constructor() {}

  obtenerEventos() {
    return this.#eventos
  }

  agregarEvento(
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toLocaleString()
    // code
  ) {
    // const productExist = this.products.find(product => product.code === code)
    // if(productExist) return `El producto con code ${code} ya existe`

    const nuevoEvento = {
      id: this.#id++,
      nombre,
      lugar,
      precio: Math.round(precio * (1 + this.#precioBaseDeGanancia)),
      capacidad,
      fecha,
      participantes: [],
    }

    this.#eventos.push(nuevoEvento)
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.#eventos.find(event => event.id === idEvento)
    if (!evento) return console.log('No existe el evento')

    if (evento.participantes.includes(idUsuario))
      return console.log('El usuario ya existe')

    evento.participantes.push(idUsuario)

    return console.log('Usuario agregado')
  }
}

const ticketManager = new TicketManager()
ticketManager.obtenerEventos()
ticketManager.agregarEvento('Coder evento', 'Pereira', 100)
ticketManager.agregarEvento('Un evento', 'Buenos Aires', 200, 5000)
ticketManager.agregarEvento('Otro evento', 'Lima', 500)
const eventos = ticketManager.obtenerEventos()
console.log(eventos)

// ticketManager.agregarUsuario(2, 3)
// ticketManager.obtenerEventos()
// ticketManager.agregarUsuario(2, 3)
// ticketManager.obtenerEventos()
