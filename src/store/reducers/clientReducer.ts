import { ClientActionTypes, ClientActions, ClientState } from "../../types/client";

const initialState: ClientState = {
    clients: [],
    limit: '',
    lang: '',
    loading: false,
    error: null
}

export const clientReducer = (state: ClientState = initialState, action: ClientActions) => {

    switch(action.type) {
        case ClientActionTypes.FETCH_CLIENTS:
            return {...state, loading: true, clients: []}
        case ClientActionTypes.FETCH_CLIENTS_SUCCESS:
            return {...state, loading: false, clients: action.payload}
        case ClientActionTypes.FETCH_CLIENTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case ClientActionTypes.SET_DATA_LANG:
            return {...state, loading: true}
        case ClientActionTypes.SET_DATA_LANG_SUCCESS:
            return {...state, loading: false, lang: action.payload}
        case ClientActionTypes.SET_DATA_LANG_ERROR:
            return {...state, loading: false, error: action.payload}
        case ClientActionTypes.SET_DATA_LIMIT:
            return {...state, loading: true}
        case ClientActionTypes.SET_DATA_LIMIT_SUCCESS:
            return {...state, loading: false, limit: action.payload}
        case ClientActionTypes.SET_DATA_LIMIT_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}