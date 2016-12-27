import { connect } from 'react-redux';
import FlashMessageList from './FlashMessageList';
import { removeFlashMessage } from '../../actions/flashMessages';

const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages
  }
}

const VisibleFlashMessageList = connect(
  mapStateToProps,
  { removeFlashMessage }
)(FlashMessageList);

export default VisibleFlashMessageList;
