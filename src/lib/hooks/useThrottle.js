import { useCallback, useState } from 'react';

export default function useThrottle(callback, delay) {
    const [lastCall, setLastCall] = useState(Date.now());

    return useCallback(
        (...args) => {
            const now = Date.now();
            if (now - lastCall >= delay) {
                callback(...args);
                setLastCall(now);
            }
        },
        [callback, delay, lastCall]
    );
}
