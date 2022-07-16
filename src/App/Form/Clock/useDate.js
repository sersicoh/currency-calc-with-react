import { useState, useEffect } from "react";

export const useDate = () => {

    const [today, setToday] = useState(new Date());

    const date = today.toLocaleDateString("pl", { weekday: 'long', day: "numeric", month: "long", year: "numeric" });
    const time = today.toLocaleTimeString();

    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date());
        }, 1 * 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return { date, time };
};

export default useDate;