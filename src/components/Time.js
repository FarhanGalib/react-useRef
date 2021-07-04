import React, { useEffect, useRef, useState } from 'react';

const Time = () => {
    const [date, setDate] = useState(new Date());
    const intervalRef = useRef();

    useEffect(() => {
        
        intervalRef.current = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);
    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
            
            <button onClick={()=>(clearInterval(intervalRef.current))}>CleanUp</button>
        </div>
    );
};

export default Time;