import { useEffect, useState } from 'react';

export const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleString());

    const tickHandler = () => {
        setTime(new Date().toLocaleString());
        console.log(time)
    }

    useEffect(() => {
        const tick = setInterval(tickHandler, 1000)
        return () => clearInterval(tick);
    }, [tickHandler])

    return (
        <div>
            <h3>Date: {time}</h3>
        </div>
    )
}