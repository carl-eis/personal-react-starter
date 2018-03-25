/* Import node modules as required (see what I did there?) */

/* Import actions */
import {
  DEFAULT_ACTION,
} from './actions';

/* Import helpers */

/* Set the initial state */
const initialState = {

};

/* Create and export the reducer function */
const newReducer = (state = initialState, action) => {
  const { data, type } = action;
  console.log('action received: ', data);
  switch (type) {
    /* Page Actions */
    case DEFAULT_ACTION: return { ...state };
    default: return state;
  }
};

export default newReducer;
