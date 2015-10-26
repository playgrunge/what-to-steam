import {GET_GAMES} from '../actions/GameActions';


export default function games(state = [], action) {
    let newState = state;
    switch (action.type) {
    case GET_GAMES:
        if (action.error) {
            console.log('in error', action);
        }else {
            console.log('in success', action);
            newState = action.payload.data.children;
        }
        break;
    default:
    }
    return newState;
}
