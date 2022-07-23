import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrencies = () => {

    const [data, setData] = useState({
        status: "loading",
        currenciesCode: ["USD",]
    });

    useEffect(() => {

        const propToTable = (obj) => (Object.keys(obj));

        const downloadData = (async () => {

            try {
                const response = await axios.get('https://api.exchangerate.host/latest?base=PLN');

                setData({
                    status: "ok",
                    base: response.data.base,
                    rates: response.data.rates,
                    date: response.data.date,
                    currenciesCode: propToTable(response.data.rates),
                });

            } catch (error) {
                setData({
                    status: "error"
                });
            }
        });

        setTimeout(downloadData, 1500);
    }, []);

    return data;
};