import fetch from 'isomorphic-fetch';
import {STEAM_KEY} from '../config/config';
/*
 * action types
 */
export const GET_GAMES_REQUEST = 'GET_GAMES_REQUEST';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
export const GET_GAMES_FAILURE = 'GET_GAMES_FAILURE';

export function getGamesRequest() {
    return { type: GET_GAMES_REQUEST};
}

export function getGamesSuccess(response) {
    return { type: GET_GAMES_SUCCESS, payload: response };
}

export function getGamesFailure(error) {
    return { type: GET_GAMES_FAILURE, payload: {error} };
}

export function fetchGames(id) {
    return dispatch => {
        dispatch(getGamesRequest());
        fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_KEY}&steamid=${id}&format=json`)
        .then(response => {
            if (response.status >= 400) {
                dispatch(getGamesFailure('bobo'));
            }else {
                response.json().then(json=> dispatch(getGamesSuccess(json)));
            }
        }).catch(error => dispatch(getGamesFailure(error)));
    };
}
