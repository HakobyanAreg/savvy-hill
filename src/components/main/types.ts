import { fetchClients, setDatLanguage, setDatLimit } from "../../store/action-craetors/client";
import {Client} from "../../types/client";
import data from "../../data/data.json";

export interface MainProps {
    clients: Client[];
    loading: boolean;
    error: string | null;
    lang: keyof typeof data;
    limit: string;
    fetchClients: typeof fetchClients;
    setDatLanguage: typeof setDatLanguage;
    setDatLimit: typeof setDatLimit;
}
