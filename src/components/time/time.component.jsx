import React, { useEffect, useState } from 'react'
import TimeCSS from './time.module.scss'

const timeLength = {
    "Hours": [0,23],
    "Minutes": [1,60],
    "Seconds": [1,60]
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
        }, 1000);
        return () => clearInterval(interval);
    }, [props.type]);

    const runCallback = (cb) => {
        return cb();
    };

    return (
        <div className={TimeCSS.time_wrapper}>
            {
                runCallback(() => {
                    const row = [];
                        time-1>=minLength ? row.push(<div className={TimeCSS.time} key={time-1} > {("0" + (time-1)).slice(-2)}</div>) : row.push(<div className={TimeCSS.time} key={maxLength} > {maxLength}</div>)

                        row.push(<div className={`${TimeCSS.time} ${TimeCSS.active}`} key={time} > {("0" + time).slice(-2)}</div>);

                        time+1<=maxLength ? row.push(<div className={TimeCSS.time} key={time+1} > {("0" + (time+1)).slice(-2)}</div>) : row.push(<div className={TimeCSS.time} key={minLength} > {("0" + minLength).slice(-2)}</div>)
                        
                    return row;
                })
            }
        </div >
    )
}

export default Time