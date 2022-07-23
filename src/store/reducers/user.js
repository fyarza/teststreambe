/**
 * User Reducer, is used to manage user data and persist them
 */

import {
  SET_USER,
  REMOVE_USER,
  UPDATE_USER,
  REMOVE_ALL,
} from '@/utils/constants/reducers';

/**
 * @return {boolean | Object}
 */

function user(state = false, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case UPDATE_USER:
      return {
        ...(state || {}),
        ...(action.payload || {}),
      };
    case REMOVE_USER:
      return false;
    case REMOVE_ALL:
      return false;
    default:
      return state;
  }
}

export default user;
