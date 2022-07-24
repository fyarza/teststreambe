import {combineReducers} from 'redux';

import user from './user';
import app from './app';
import contacts from './contacts';
export default combineReducers({
  app,
  user,
  contacts,
});
