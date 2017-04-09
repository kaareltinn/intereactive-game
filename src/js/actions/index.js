export const GUESS_NUMBER = 'GUESS_NUMBER'
export const GUESS_WORD = 'GUESS_WORD'
export const ADD_NUMBER_GAME = 'ADD_NUMBER_GAME'
export const ADD_WORD_GAME = 'ADD_WORD_GAME'

let nextGameId = 0

const generateRandomNumber = () =>
  Math.floor(Math.random() * (9 - 0 + 1)) + 0 // min = 0, max = 9 (both inclusive)
const pickTargetWord = () => {
  const words = ['paper', 'grill', 'basil', 'hinge', 'ruler']
  return words[Math.floor(Math.random() * words.length)]
}

export const guessNumber = (id, number) => {
  return {
    type: GUESS_NUMBER,
    payload: {
      id: id,
      number: number
    }
  }
}

export const guessWord = (id, word) => {
  return {
    type: GUESS_WORD,
    payload: {
      id: id,
      word: word
    }
  }
}

export const addNumberGame = () => {
  return {
    type: ADD_NUMBER_GAME,
    payload: {
      id: nextGameId++,
      targetNumber: generateRandomNumber()
    }
  }
}

export const addWordGame = () => {
  return {
    type: ADD_WORD_GAME,
    payload: {
      id: nextGameId++,
      targetWord: pickTargetWord()
    }
  }
}
