import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducers';

const persistConfig = {
  key: 'rooter',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const store = createStore(
  persistReducer(persistConfig, reducer),
  composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store);

export {store, persistor};
