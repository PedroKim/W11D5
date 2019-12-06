import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login'
});

const mdp = (dispatch, ownProps) => ({
  processForm: (formUser) => dispatch(login(formUser))
});

export default connect(msp, mdp)(SessionForm);