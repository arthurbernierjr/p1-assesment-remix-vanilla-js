console.log('connected')
let value = 0
document.getElementById('increment').addEventListener('click', increment)
document.getElementById('decrement').addEventListener('click', decrement)

function increment(event) {
  value = value + parseInt(document.getElementById('number').value, 10)
  document.getElementById('value').innerHTML = `${value}`
  if (value < 0) {
    document.getElementById('value').classList.add('red')
  } else {
    document.getElementById('value').classList.remove('red')
  }
}

function decrement(event) {
  value = value - parseInt(document.getElementById('number').value, 10)
  document.getElementById('value').innerHTML = `${value}`

  if (value < 0) {
    document.getElementById('value').classList.add('red')
  } else {
    document.getElementById('value').classList.remove('red')
  }
}
