import { Client } from "./client"

export interface DataLanguage {
    ru: Data
    en: Data
}

export type Data = {
    [key: string]: Client
}
