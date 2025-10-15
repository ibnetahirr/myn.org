"use client";

import React, {useState, useEffect} from 'react';

export const Counter = (props) => {
    const {value, className , tag : Tag = "h4" , isAmount = false} = props;
    const [count, setCount] = useState(0);
    const duration = 5000;
    const interval = 16;

    useEffect(() => {
        let timerId;
        if (value > 0) {
            const increment = (value / (duration / interval));
            timerId = setInterval(() => {
                if (count < value) {
                    setCount((prevCount) => {
                        const nextCount = prevCount + increment;
                        return nextCount > value ? value : nextCount;
                    });
                } else {
                    clearInterval(timerId);
                }
            }, interval);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [value, duration, interval, count]);

    return (
        <Tag className={className}>{isAmount ? Math.floor(count).toLocaleString('en-IN') : Math.floor(count)}</Tag>
    );
};