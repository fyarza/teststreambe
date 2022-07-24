import {listContacts} from '@/services/contact.services';
import {setStore} from '@/utils/functions';
import {
  SET_CONTACTS,
  REMOVE_CONTACT,
  REMOVE_ALL,
} from '@/utils/constants/reducers';

export function listContactsAction() {
  return async function (dispatch) {
    return listContacts()
      .then(data => {
        dispatch(setStore(SET_CONTACTS, data.users || []));
        return Promise.resolve(data.users);
      })
      .catch(e => {
        const status401 = String(e).includes('401');
        if (status401) {
          dispatch(setStore(REMOVE_ALL));
        }
        return Promise.reject(e);
      });
  };
}

export function removeContactAction(body) {
  return async function (dispatch) {
    dispatch(setStore(REMOVE_CONTACT, body));
    return Promise.resolve('Delete Succesfully');
  };
}
