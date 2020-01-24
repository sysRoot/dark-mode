import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [isDarkMode, setDarkMode] = useState(false);
    const [storedValue, setValue] = useLocalStorage('darkMode', false);
    

    const flipBoolean = (value) => {
        setDarkMode(value);
        setValue(isDarkMode);
    }
    useEffect(() => {
        storedValue === true
            ? (document.body.className = 'dark-mode')
            : (document.body.className = '');
    }, [storedValue]);
    return [isDarkMode, flipBoolean, ]
};

export default useDarkMode