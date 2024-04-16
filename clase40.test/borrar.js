import Assert from 'node:assert'

const assert = Assert.strict

try {
  assert.equal(5, '5', 'No son iguales')
} catch (error) {
  console.log(error.message)
}
