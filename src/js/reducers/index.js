import R from 'ramda'
import {
  ADD_NUMBER_GAME,
  ADD_WORD_GAME,
  GUESS_NUMBER,
  GUESS_WORD
} from '../actions'

const initialState = {
  games: []
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER_GAME: {
      const numberGame = buildNumberGame(action.payload.id, action.payload.targetNumber)
      return {...state, games: R.concat(state.games, [numberGame])}
    }
    case ADD_WORD_GAME: {
      const wordGame = buildWordGame(action.payload.id, action.payload.targetWord)
      return {...state, games: R.concat(state.games, [wordGame])}
    }
    case GUESS_NUMBER: {
      const game = R.find(R.propEq('id', action.payload.id))(state.games)
      const updatedGame = updateNumberGame(game, action.payload.number)
      return {...state, games: R.update(action.payload.id, updatedGame, R.sortBy(R.prop('id'), state.games))}
    }
    case GUESS_WORD: {
      const game = R.find(R.propEq('id', action.payload.id))(state.games)
      const updatedGame = updateWordGame(game, action.payload.word)
      return {...state, games: R.update(action.payload.id, updatedGame, R.sortBy(R.prop('id'), state.games))}
    }
	default:
    return state;
  }
}

export const buildNumberGame = (id, targetNumber) => ({
  id: id,
  targetNumber: targetNumber,
  isGuessed: false,
  history: []
})

export const buildWordGame = (id, targetWord) => ({
  id: id,
  targetWord: targetWord,
  isGuessed: false,
  history: []
})

export const updateNumberGame = (game, number) => {
  if (game.targetNumber === number) {
    return {...game, isGuessed: true, history: R.concat(game.history, [{guess: number, message: 'was correct'}])}
  } else if (game.targetNumber < number) {
    return {...game, history: R.concat(game.history, [{guess: number, message: 'was greater than target'}])}
  } else {
    return {...game, history: R.concat(game.history, [{guess: number, message: 'was lower than target'}])}
  }
}

export const updateWordGame = (game, word) => {
  if (game.targetWord === word) {
    return {...game, isGuessed: true, history: R.concat(game.history, [word])}
  } else {
    return {...game, history: R.concat(game.history, [word])}
  }
}

export default gamesReducer
