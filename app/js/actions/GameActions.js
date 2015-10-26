import fetch from 'isomorphic-fetch';
import {createAction} from 'redux-actions';
/*
 * action types
 */
export const GET_GAMES = 'GET_GAMES';


function fetchPromises(userId) {
    return fetch('http://www.reddit.com/r/boxing.json');
}

export const fetchGames = createAction(GET_GAMES, async id => {
    const result = await fetchPromises(id);
    return result.json();
});

