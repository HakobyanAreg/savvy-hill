export interface ClientState {
    clients: Client[],
    limit: string,
    lang: string,
    loading: boolean,
    error: null | string
}

export interface Client {
    name: string,
    review: string,
    date: string,
}

export enum ClientActionTypes {
    FETCH_CLIENTS = 'FETCH_CLIENTS',
    FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCES',
    FETCH_CLIENTS_ERROR = 'FETCH_CLIENTS_ERROR',
    SET_DATA_LIMIT = 'SET_DATA_LIMIT',
    SET_DATA_LIMIT_SUCCESS = 'SET_DATA_LIMIT_SUCCESS',
    SET_DATA_LIMIT_ERROR = 'SET_DATA_LIMIT_ERROR',
    SET_DATA_LANG = 'SET_DATA_LANG',
    SET_DATA_LANG_SUCCESS = 'SET_DATA_LANG_SUCCESS',
    SET_DATA_LANG_ERROR = 'SET_DATA_LANG_ERROR',
}

interface FetchClientActionType {
    type: ClientActionTypes.FETCH_CLIENTS
}


interface FetchClientSuccessActionType {
    type: ClientActionTypes.FETCH_CLIENTS_SUCCESS,
    payload: Client[],
}

interface FetchClientErrorActionType {
    type: ClientActionTypes.FETCH_CLIENTS_ERROR,
    payload: string,
}

export interface SetDataLimit {
    type: ClientActionTypes.SET_DATA_LIMIT,
}

export interface SetDataLimitSuccess {
    type: ClientActionTypes.SET_DATA_LIMIT_SUCCESS,
    payload: number,
}

export interface SetDataLimitError {
    type: ClientActionTypes.SET_DATA_LIMIT_ERROR,
    payload: string,
}

export interface SetDataLang {
    type: ClientActionTypes.SET_DATA_LANG,
}

export interface SetDataLangSuccess {
    type: ClientActionTypes.SET_DATA_LANG_SUCCESS,
    payload: string,
}

export interface SetDataLangError {
    type: ClientActionTypes.SET_DATA_LANG_ERROR,
    payload: string,
}

export type ClientActions = FetchClientActionType | FetchClientSuccessActionType | FetchClientErrorActionType | SetDataLimit | SetDataLimitSuccess | SetDataLimitError | SetDataLang | SetDataLangSuccess | SetDataLangError