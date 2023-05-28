import "./Header.scss"
import { FC } from "react"
import { Watch } from "../watch/Watch"
import clientLogo from "./../../assets/images/client.png"
import { useActions } from "../../hooks/useActions"
import data from './../../data/data.json'
import { useTypedSelector } from "../../hooks/useTypedSelector"

export const Header: FC = () => {

    const {setDatLanguage} = useActions()

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        const lang = (e.target as HTMLElement).innerText.toLocaleLowerCase() as keyof typeof data
        setDatLanguage(lang)
    }
    
    return (
        <header>
            <div className="logo-wrapper">
                <img src={clientLogo} alt="Client Logo" />
            </div>
            <div className="watch-wrapper">
                <Watch />
            </div>
            <div className="language-wrapper">
                <span onClick={handleClick}>
                    en
                </span>
                <span onClick={handleClick}>
                    ru
                </span>
            </div>
        </header>
    )
}