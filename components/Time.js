import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/Home.module.css'

function Time() {
    const [timeState, setTimeState] = useState();

    const timeZoneState = Intl.DateTimeFormat().resolvedOptions().timeZone;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeState(new Date().toLocaleTimeString([], { hour12: false }), {});
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (<div className={styles.TimeState}>{timeState} GMT</div>);
}

export default Time;