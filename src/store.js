import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';

export const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware)),
    ),
    runSaga: sagaMiddleware.run,
  };
};
