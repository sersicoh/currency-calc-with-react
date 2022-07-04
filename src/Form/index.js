import "./style.css";
import { useState } from "react";
import FormSection from "./FormSection";
import Result from "./Result";
import CurrencySelect from "./CurrencySelect";
import Amount from "./Amount";
import Button from "./Button"

const Form = () => {

    const currencies = [
        { code: "EUR", name: "Euro", value: 4.77 },
        { code: "USD", name: "Dolar", value: 4.02 },
        { code: "GBP", name: "Funt", value: 4.02 },
    ];

    const [amount, setAmount] = useState("");
    const [currencyValue, setCurrencyValue] = useState(currencies[0].value);
    const [currencyCode, setCurrencyCode] = useState(currencies[0].code);

    const calculate = () => (
        console.log(amount / currencyValue),
        console.log(currencyCode)
    );

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculate();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <FormSection
                legend="Wybierz walutę do przeliczenia"
                span="Wybierz jedną:"
                body={<CurrencySelect currency={currencyValue} onChange={({ target }) => setCurrencyValue(target.value)} currencies={currencies} />}
            />
            <FormSection
                legend="Podaj kwotę do przeliczenia"
                span="Kwota:"
                body={<Amount amount={amount} onChange={({ target }) => setAmount(target.value)} />}
            />
            <Button />
            <Result />
        </form>

    )
};

export default Form;