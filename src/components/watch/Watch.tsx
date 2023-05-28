import "./Watch.scss"
import { FC, useEffect, useState } from "react";

export const Watch: FC = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
           setInterval(() => setDate(new Date().toLocaleTimeString()), 1000);
    }, []);

    return (
        <div className="watch">
            {date}
        </div>
    )
}