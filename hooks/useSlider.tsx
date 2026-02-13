import { useState, useEffect, useCallback } from 'react';

export const useSlider = (length: number, interval: number = 5000) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % length);
    }, [length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + length) % length);
    }, [length]);

    useEffect(() => {
        const timer = setInterval(handleNext, interval);
        return () => clearInterval(timer);
    }, [currentIndex, handleNext, interval]); 

    return {
        currentIndex,
        handleNext,
        handlePrev,
        setCurrentIndex
    };
};