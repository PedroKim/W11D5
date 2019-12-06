import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { benchesArr } from '../../reducers/selector';
import BenchIndex from './bench_index';

const msp = ({ entities }) => {
  return {
    benches: benchesArr(entities.benches)
  };
};

const mdp = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(msp, mdp)(BenchIndex);