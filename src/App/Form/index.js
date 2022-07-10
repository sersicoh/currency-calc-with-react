import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";
import FormSection from "./FormSection";
import Amount from "./Amount";
import CurrencySelect from "./CurrencySelect";
import Button from "./Button";
import { Result } from "./Result";
import Clock from "./Clock";
import { useDate } from "./useDate";


export const Form = ({ result, calculateResult }) => {

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const { date, time } = useDate();

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <Clock date={date} time={time} />
            <FormSection
                legend="Wybierz walutę do przeliczenia"
                span="Wybierz jedną:"
                body={<CurrencySelect
                    value={currency}
                    onChange={({ target }) => { setCurrency(target.value) }}
                    currencies={currencies} />}
            />
            <FormSection
                legend="Podaj kwotę do przeliczenia"
                span="Kwota:"
                body={<Amount amount={amount} onChange={({ target }) => setAmount(target.value)} />}
            />
            <Button />
            <Result result={result} />
        </form>

    )
};

export default Form;