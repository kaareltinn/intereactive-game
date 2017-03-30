import React from 'react'
import WordItem from './WordItem'

const WordList = (props) => {
  const wordItems = props.guesses.map((guess, key) => {
    return (
      <WordItem
        guess={guess}
        targetWord={props.targetWord}
        key={key}
      />
    )
  })
  return (
    <div className="word-list">
      {wordItems}
    </div>
  )
}

WordList.propTypes = {
  guesses: React.PropTypes.arrayOf(React.PropTypes.shape({
    guess: React.PropTypes.string,
    targetWord: React.PropTypes.string
  })).isRequired,
  targetWord: React.PropTypes.string.isRequired,
};

export default WordList
