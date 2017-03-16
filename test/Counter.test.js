import Counter from '../src/js/Counter'

describe('Counter', () => {
  describe('increment', () => {
    let counter = new Counter

    it('increments count by one', () => {
      expect(counter.count).to.eql(0)
      counter.increment()
      expect(counter.count).to.eql(1)
    })
  })

  describe('getCount', () => {
    let counter = new Counter(5)

    it('returns current count', () => {
      expect(counter.getCount()).to.eql(5)
    })
  })
});
