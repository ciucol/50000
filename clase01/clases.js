class Futbolista {
  nombre
  estatura
  edad
  pais
  dorsal

  constructor(nombre, estatura, edad, pais, dorsal) {
    this.nombre = nombre
    this.estatura = estatura
    this.edad = edad
    this.pais = pais
    this.dorsal = dorsal
  }

  cabecear(cabezazo) {
    console.log(`Cabecea con nivel de ${cabezazo}`)
  }

  patearConLaDerecha(derecha) {
    console.log(`${this.nombre} patea con la derecha con nivel de ${derecha}`)
  }

  patearConLaIzquierda(izquierda) {
    console.log(
      `${this.nombre} Patea con la izquierda con nivel de ${izquierda}`
    )
  }

  correr(velocidad) {
    console.log(`Corre con ritmo de ${velocidad}`)
  }
}

const lio = new Futbolista('Lio', 1.71, 36, 'arg', 10)
const cristiano = new Futbolista('Cristiano', 1.84, 39, 'por', 7)
const neymar = new Futbolista('Ney', 1.8, 33, 'bra', 10)

console.log(lio.edad)
lio.patearConLaIzquierda(98)
lio.patearConLaDerecha(81)

cristiano.patearConLaDerecha(97)
cristiano.patearConLaIzquierda(90)

neymar.patearConLaDerecha(93)

class Frutas {
  nombre
  precio
  stock

  constructor(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
  }

  comprar(cantidad) {
    this.stock = this.stock - cantidad
  }

  agregarAlStock(cantidad) {
    this.stock = this.stock + cantidad
  }
}

const uvas = new Frutas('uvas', 17, 74)
const manzanas = new Frutas('manzanas', 7, 42)

const supermercado = []
supermercado.push(uvas)
supermercado.push(manzanas)

console.log(supermercado)

uvas.comprar(2)
console.log(supermercado)

uvas.agregarAlStock(123)
console.log(supermercado)
