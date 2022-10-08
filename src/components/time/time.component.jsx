import React, { useEffect, useState } from 'react'
import TimeCSS from './time.module.scss'

const timeLength = {
    "Hours": [0, 23],
    "Minutes": [0, 59],
    "Seconds": [0, 59]
}

const Time = (props) => {
    const minLength = timeLength[props.type][0]
    const maxLength = timeLength[props.type][1]
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
        }, 1000)
        return () => clearInterval(interval);
    }, [props.type]);

    return (
        <div className={TimeCSS.time_wrapper}>
            <div className={`${TimeCSS.time} ${TimeCSS.slide_before_out}`} key={time-2}  > {time - 2 >= minLength ? `${("0" + (time - 2)).slice(-2)}`: `${maxLength+(time-1)}`} </div> 
            <div className={`${TimeCSS.time} ${TimeCSS.slide_out}`} key={time-1}  > {time - 1 >= minLength ? `${("0" + (time - 1)).slice(-2)}`: `${maxLength}`} </div> 
            <div className={`${TimeCSS.time} ${TimeCSS.active} ${TimeCSS.slide}`} key={time} > {("0" + time).slice(-2)}</div>
            <div className={`${TimeCSS.time} ${TimeCSS.slide_in}`} key={time + 1} > {time + 1 <= maxLength ? `${("0" + (time + 1)).slice(-2)}`: `${("0" + minLength).slice(-2)}` }</div>

        </div >
    )
}

export default Time