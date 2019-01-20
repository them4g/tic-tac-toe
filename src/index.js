import React from 'react';
import ReactDOM from 'react-dom';
import { initFirebase } from '@/firebase';
import { configureStore } from './store';
import { rootSaga } from './rootSaga';
import { Root } from '@features/Root';
import { checkLogin } from '@common/components/User';

initFirebase();

const store = configureStore();
store.runSaga(rootSaga);

checkLogin(store);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
