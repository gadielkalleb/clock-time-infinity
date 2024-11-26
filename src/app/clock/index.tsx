"use client"

import React, { useState, useEffect } from 'react';

const Relogio = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            <h2 className="relogio-time">{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Relogio;
