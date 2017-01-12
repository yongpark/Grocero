import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../../actions/session_actions';
import { closeAuthModal, openAuthModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  authModalOpen: state.modals.auth,
  sessionFormType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  closeAuthModal: () => dispatch(closeAuthModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
