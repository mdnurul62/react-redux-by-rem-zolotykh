import { connect } from 'react-redux';
import FlashMessageList from './FlashMessageList';

const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages
  }
}

const VisibleFlashMessageList = connect(
  mapStateToProps
)(FlashMessageList);

export default VisibleFlashMessageList;
