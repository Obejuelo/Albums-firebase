import {createStore, combineReducers, compose} from 'redux';
import persistanState from 'redux-localstorage';

function tokenReducer(state = '', action){
    switch (action.type) {
        case 'SET_TOKEN':
            return action.token
        case 'CLEAR_TOKEN':
            return ''
        default:
            return state
    }
}

function userReducer(state = null, action){
    switch (action.type) {
        case 'LOGGED_IN':
            return action.user
        case 'SIGN_OUT':
            return null
        default:
            return state
    }
}

function albumsReducer(state = [], action){
    switch (action.type) {
        case 'SET_ALBUMS':
            return action.albums
        case 'CLEAR_ALBUMS':
            return []
        default:
            return state
    }
}

function albumReducer(state = null, action){
    switch (action.type) {
        case 'SET_ALBUM':
            return action.album
        case 'CLEAR_ALBUM':
            return null
        default:
            return state
    }
}

function photoReducer(state = [], action){
    switch (action.type) {
        case 'SET_PHOTO':
            return action.photo
        case 'CLEAR_PHOTO':
            return []
        default:
            return state
    }
}

// Combinamos los reducers para poder acceder a cada uno de ellos
let rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
    albums: albumsReducer,
    album: albumReducer,
    photos: photoReducer
})

/**Potenciador localstorage
 * Por defecto guarda todo, pero le podemos indicar que solo queremos el token
 * Esto para no causar conflicto con Firebase
 */
const enhancer = compose(persistanState('token')) 

// Pasamos el enhancer como tercer argumento 
let store = createStore(rootReducer, {}, enhancer);

export default store;