import {useState, useEffect} from "react";

function useStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const storad = localStorage.getItem(key);
            return storad !== null ? JSON.parse(storad) : initialValue;
        } catch (error) {
            console.error("Gagal memuat localstorage", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Gagal memuat localstorage", error);
        }
    }, [value, key]);

    return [value, setValue];
}

export default useStorage;