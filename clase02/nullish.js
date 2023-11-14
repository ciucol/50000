// const balance = 0

// console.log(balance || 'No es válido')
// console.log(balance ?? 'No es válido')

class Developer {
  #salary = 5000

  getSalary() {
    return this.#salary
  }
}

const karen = new Developer()
console.log(karen.salary)
console.log(karen.getSalary())
