import {connect} from 'react-redux'
import {guessNumber, guessWord} from '../actions'
import Games from '../components/Games'
import R from 'ramda'

const mapStateToProps = (state) => ({
  games: R.sortBy(R.prop('id'), state.games)
})

const mapDispatchToProps = (dispatch) => ({
  guessNumber: (id, number) => dispatch(guessNumber(id, number)),
  guessWord: (id, word) => dispatch(guessWord(id, word))
})

export default connect(mapStateToProps, mapDispatchToProps)(Games)
