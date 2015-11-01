import { createStore, applyMiddleware} from 'redux';
import MainReducer from '../reducers/MainReducer';
import thunkMiddleware from 'redux-thunk';

const finalCreateStore = applyMiddleware(
    thunkMiddleware
)(createStore);


export default function configureStore() {
    const store = finalCreateStore(MainReducer);

    if (module.hot) {
    // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/MainReducer', () => {
            const nextRootReducer = require('../reducers/MainReducer');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
