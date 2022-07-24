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
      const updateState = state.filter(
        item => item.contactId !== action.payload.contactId,
      );
      // const i = state.indexOf(contact);

      // if (i !== -1) {
      //   const updateState = state.splice(i, 1);
      //   return updateState;
      // }
      return updateState;
    case REMOVE_ALL:
      return [];
    default:
      return state;
  }
}

export default contacts;
