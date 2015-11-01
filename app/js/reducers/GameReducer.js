import {GET_GAMES_REQUEST, GET_GAMES_SUCCESS, GET_GAMES_FAILURE} from '../actions/GameActions';


const initialState = {
isFetching: false,
items: []
};

export default function games(state = initialState, action) {
    switch (action.type) {
    case GET_GAMES_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
        });
    case GET_GAMES_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            items: action.payload.response.games,
            lastUpdated: action.receivedAt
        });
    case GET_GAMES_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            hasError: true,
        });
    default:
        return state;
    }
}
