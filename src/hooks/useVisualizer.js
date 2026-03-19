import { useState, useEffect, useRef, useCallback } from "react";

export function useVisualizer(algorithmGenerator, initialSize = 30) {
    const [size, setSize] = useState(initialSize);
    const [array, setArray] = useState(() => Array.from({length: initialSize},
        () => Math.floor(Math.random() * 100) + 10));
    const [activeIndices, setActiveIndices] = useState([]);
    const [swappedIndices, setSwappedIndices] = useState([]);
    const [sortedIndices, setSortedIndices] = useState([]);
    const [eliminatedIndices, setEliminatedIndices] = useState([]);

    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(50); // ms delay

    const generatorRef = useRef(null);
    const arrayRef = useRef(array);

    useEffect(() => {
        arrayRef.current = array;
    }, [array]);

    const generateArray = useCallback((newSize) => {
        const arr = Array.from({length : newSize},
            () => Math.floor(Math.random() * 100) + 10);
        setArray(arr);
        setActiveIndices([]);
        setSwappedIndices([]);
        setSortedIndices([]);
        setEliminatedIndices([]);
        setIsPlaying(false);
        generatorRef.current = null;
    }, []);

    // Reset visualizer when algorithm or size changes
    // We use useEffect here since genrating random numbers is da side effect
    useEffect(() => {
        generateArray(size);
    }, [size, algorithmGenerator]);

    const step = useCallback(() => {
        if (!generatorRef.current && algorithmGenerator) {
            generatorRef.current = algorithmGenerator([...arrayRef.current]);
        }
        if(!generatorRef.current) return false;

        const result = generatorRef.current.next();
        if (result.done) {
           setIsPlaying(false);
           generatorRef.current = null;
           return false;
        }

        const state = result.value;
        setArray([...state.array]);
        setActiveIndices(state.activeIndices || []);
        setSwappedIndices(state.swappedIndices || []);
        setSortedIndices(state.sortedIndices || []);
        setEliminatedIndices(state.eliminatedIndices || []);
        return true;
    }, [algorithmGenerator]);

    const play = useCallback(() => {
        if (!generatorRef.current && algorithmGenerator) {
            generatorRef.current = algorithmGenerator([...arrayRef.current]);
        }
        setIsPlaying(true);
    }, [algorithmGenerator]);

    const pause = useCallback(() => {
        setIsPlaying(false);
    }, []);

   const reset = useCallback(() => {
        generateArray(size);
    }, [generateArray, size]);

    useEffect(() => {
        let timeoutId;

        if(isPlaying) {
            const nextStep = () => {
                // If speed > 100 we do multiple steps per tick (faster for high runtime algorithms)
                const stepsPerTick = speed > 100 ? (speed - 99) * 2 : 1;
                let hasMore = true;

                for(let i = 0; i < stepsPerTick; i++) {
                    hasMore = step();
                    if (!hasMore) break;
                }

                if(hasMore) {
                    const delay = speed > 100 ? 1 : 101 - speed;
                    timeoutId = setTimeout(nextStep, delay);
                } else {
                    setIsPlaying(false);
                }
            };
            timeoutId = setTimeout(nextStep, speed > 100 ? 1 : 101 - speed);
        }

        return () => {
            if(timeoutId) clearTimeout(timeoutId);
        };
    }, [isPlaying, speed, step]);

    return {
        array,
        activeIndices,
        swappedIndices,
        sortedIndices,
        eliminatedIndices,
        isPlaying,
        speed,
        size,
        play,
        pause,
        step,
        reset,
        setSpeed,
        setSize,
    };
}