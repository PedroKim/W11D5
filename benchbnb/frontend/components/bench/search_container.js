import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';
import { benchesArr } from '../../reducers/selector';
import Search from './search';

const msp = ({entities, ui}) => {
  return {
    filters: ui.filters,
    benches: benchesArr(entities.benches)
  };
};

const mdp = dispatch => {
  return {
    fetchBenches: filters => dispatch(fetchBenches(filters)),
    updateBounds: bounds => {
      return dispatch(updateBounds(bounds));
    }
  };
};

export default connect(msp, mdp)(Search);
