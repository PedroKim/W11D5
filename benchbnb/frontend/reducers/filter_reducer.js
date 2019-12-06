import { UPDATE_BOUNDS } from '../actions/filter_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case UPDATE_BOUNDS:
      return {bounds: action.bounds};
    default:
      return state;
  }
};