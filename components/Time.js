import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/Home.module.css'
import { render } from 'react-dom';

function Time(){
    const [timeState, setTimeState] = useState();
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeState(new Date().toLocaleTimeString([], { hour12: true}));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(<div className={styles.TimeState}>{timeState}</div>);
}

export default Time;