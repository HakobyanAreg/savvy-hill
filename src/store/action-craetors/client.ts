import { Dispatch } from "redux";
import { Client, ClientActionTypes, ClientActions } from "../../types/client";
import data from './../../data/data.json'
import { DataLanguage } from "../../types/data"

export const fetchClients = (lang: keyof typeof data, limit: string ) => {
    return (dispatch: Dispatch<ClientActions>) => {
        if (!lang) {
            return;
        }

        try {
            dispatch({ type: ClientActionTypes.FETCH_CLIENTS });
            const dataFromJson: DataLanguage = data;

            const clientsData: Client[] = [];
            const objectToArr = Object.keys(dataFromJson[lang]);

            for (let i = 0; i < objectToArr.length; i++) {
                if (Math.floor(+limit) <= i) {
                    break;
                }
                clientsData.push(dataFromJson[lang][objectToArr[i]]);
            }

            dispatch({ type: ClientActionTypes.FETCH_CLIENTS_SUCCESS, payload: clientsData });
        } catch (e) {
            dispatch({ type: ClientActionTypes.FETCH_CLIENTS_ERROR, payload: 'Something was wrong' });
        }
    };
};

export const setDatLimit = (limit: string) => {
    const findLimitSize = (type: string) => {
        switch (type) {
            case 'min':
                return 34 / 3;
            case 'mid':
                return 34 / 2;
            case 'max':
                return 34;
            default:
                return 34;
        }
    };

    return (dispatch: Dispatch<ClientActions>) => {
        try {
            dispatch({ type: ClientActionTypes.SET_DATA_LIMIT });

            const limitSize = findLimitSize(limit).toString();

            dispatch({ type: ClientActionTypes.SET_DATA_LIMIT_SUCCESS, payload: limitSize });
        } catch (e) {
            dispatch({ type: ClientActionTypes.SET_DATA_LIMIT_ERROR, payload: 'Something was wrong' });
        }
    };
};

export const setDatLanguage = (lang: keyof typeof data) => {
    return (dispatch: Dispatch<ClientActions>) => {
        try {
            dispatch({ type: ClientActionTypes.SET_DATA_LANG });

            dispatch({ type: ClientActionTypes.SET_DATA_LANG_SUCCESS, payload: lang });
        } catch (e) {
            dispatch({ type: ClientActionTypes.SET_DATA_LANG_ERROR, payload: 'Something was wrong' });
        }
    };
};
