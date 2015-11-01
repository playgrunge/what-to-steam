import { createStore, applyMiddleware} from 'redux';
import MainReducer from '../reducers/MainReducer';
import thunkMiddleware from 'redux-thunk';

const finalCreateStore = applyMiddleware(
    thunkMiddleware
)(createStore);


export default function configureStore() {
    return finalCreateStore(MainReducer);
}
