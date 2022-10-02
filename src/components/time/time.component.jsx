import React, { useEffect, useState } from 'react'
import TimeCSS from './time.module.scss'

const timeLength = {
    "Hours": 24,
    "Minutes": 60,
    "Seconds": 60
}

const Time = (props) => {
    const length = timeLength[props.type]
    const [time, setTime] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date()
            if (props.type === "Hours") {
                const hours = currentTime.getHours()
                setTime(hours)
            } else if (props.type === "Minutes") {
                const minutes = currentTime.getMinutes()
                setTime(minutes)
            } else if (props.type === "Seconds") {
                const seconds = currentTime.getSeconds()
                setTime(seconds)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const runCallback = (cb) => {
        return cb();
    };

    return (
        <div className={TimeCSS.time_wrapper}>
            {
                runCallback(() => {
                    const row = [];
                    for (let i = 1; i <= length; i++) {
                        console.log(time)
                        row.push(<div className={i === time ? `${TimeCSS.time} ${TimeCSS.active}` : TimeCSS.time} style={{ transform: `translateY(${-100*time}%)` }} key={i} > {i}</div>);
                    }
                    return row;
                })
            }
        </div >
    )
}

export default Time