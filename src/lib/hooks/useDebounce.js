import { useCallback, useEffect, useState } from 'react';

export default function useDebounce(callback, delay) {
    const [timeoutId, setTimeoutId] = useState(null);

    const debouncedCallback = useCallback(
        (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            const newTimeoutId = setTimeout(() => {
                callback(...args);
            }, delay);
            setTimeoutId(newTimeoutId);
        },
        [callback, delay, timeoutId]
    );

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    return debouncedCallback;
}
