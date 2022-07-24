/**
 * User Reducer, is used to manage user data and persist them
 */

import {
  SET_CONTACTS,
  REMOVE_CONTACT,
  REMOVE_ALL,
} from '@/utils/constants/reducers';

/**
 * @return {Array}
 */

function contacts(state = [], action) {
  switch (action.type) {
    case SET_CONTACTS:
      return action.payload;
    case REMOVE_CONTACT:
      const index = state.findIndex(
        item => item.contactId === action.payload.contactId,
      );
      const updateState = state.splice(index, 1);
      return updateState;
    case REMOVE_ALL:
      return [];
    default:
      return state;
  }
}

export default contacts;
