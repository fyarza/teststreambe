import {setStore} from '@/utils/functions';
import {SET_USER, REMOVE_ALL, UPDATE_USER} from '@/utils/constants/reducers';

export function singInAction(body) {
  return function (dispatch) {
    dispatch(
      setStore(SET_USER, {
        name: 'federico',
        id: 1,
        email: 'federicoyarza295@gmail.com',
      }),
    );
  };
}

export function logOutAction(callback = () => {}) {
  return function (dispatch) {
    dispatch(setStore(REMOVE_ALL));
  };
}
