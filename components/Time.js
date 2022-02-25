import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/Home.module.css'
import { render } from 'react-dom';

function Time(){
    const [timeState, setTimeState] = useState();


    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(tz);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeState(new Date().toLocaleTimeString([], { hour24: false}));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    

    return(<div className={styles.TimeState}>{timeState} {tz}</div>);
}

export default Time;