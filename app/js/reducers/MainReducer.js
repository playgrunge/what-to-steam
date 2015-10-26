import { combineReducers } from 'redux';
import games from './GameReducer';

const MainReducer = combineReducers({
    games
});

export default MainReducer;
