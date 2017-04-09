import Buttons from '../components/Buttons';
import {connect} from 'react-redux';
import {addNumberGame, addWordGame} from '../actions'

const mapDispatchToProps = (dispatch) => ({
  addNumberGame: () => dispatch(addNumberGame()),
  addWordGame: () => dispatch(addWordGame())
})

export default connect(undefined, mapDispatchToProps)(Buttons);
