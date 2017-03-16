import Counter from './Counter'

let counter = new Counter()

let button = document.querySelector('.button')

button.innerHTML = counter.getCount()

button.addEventListener('click', () => {
  counter.increment()
  button.innerHTML = counter.getCount()
})
