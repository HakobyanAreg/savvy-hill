import './Main.scss'
import { FC, useCallback, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Client } from '../../types/client';

export const Main: FC = () => {
    const { clients, loading, error, lang, limit } = useTypedSelector(state => state.clients)
    const {fetchClients, setDatLimit, setDatLanguage} = useActions()
    const [page, setPage] = useState<string>('Min')
    const pages = ['Min', 'Mid', 'Max']

    useEffect(() => {
        setDatLanguage('ru')
        setDatLimit('min')

    }, [])

    useEffect(() => {
        fetchClients(lang, limit)
        
    }, [lang, limit])


    const formatFullName = (fullName: string): string => {
        const lastName = fullName.split(' ')[0];
        const firstName = !!fullName.split(' ')[1] ? fullName.split(' ')[1][0] : '';
        return `${lastName} ${firstName}`
    }

    const handleClick = useCallback((e: React.MouseEvent<HTMLSpanElement>): void => {
        const value = (e.target as HTMLElement).innerText;
        setPage(value);
        setDatLimit( value.toLocaleLowerCase())
    }, [page])

    if(loading) {
        return <h1>... Loading</h1>
    }


    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="main">
            {(clients as Client[]).map((client: Client, index: number) => (
                <div className="clients-wrapper" key={`${client.name}_${index}`}>
                    <span>
                        {formatFullName(client.name)}
                    </span>
                    <span>
                        {client.review}
                    </span>
                    <span>
                        {client.date}
                    </span>
                </div>
            ))}
            <div className="pagination">
                {pages.map((p: string, index: number) => (
                    <span key={`${p}_${index}`} onClick={handleClick} className={p === page ? 'selected' : ''}>
                        {p}
                    </span>
                ))}
            </div>
        </div>
    )
}