import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const msp = state => {
  const currentUserId = state.session.currentUser.id;
  const currentUser = currentUserId ? state.entities.users[currentUserId] : undefined;

  return {
    currentUser
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting); 