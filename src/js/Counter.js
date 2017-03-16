class Counter {
  constructor(count = 0) {
    this.count = count
  }

  increment() {
    this.count = this.count + 1
  }

  getCount() {
    return this.count
  }
}

export default Counter
