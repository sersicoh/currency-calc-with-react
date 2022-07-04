import "./style.css";
import { useState } from "react";
import FormSection from "./FormSection";
import Result from "./Result";
import CurrencySelect from "./CurrencySelect";
import Amount from "./Amount";
import Button from "./Button"

const Form = () => {

    const currencies = [
        { id: 0, code: "EUR", name: "Euro", value: 4.77 },
        { id: 1, code: "USD", name: "Dolar", value: 4.02 },
        { id: 2, code: "GBP", name: "Funt", value: 5.02 },
    ];

    const [amount, setAmount] = useState("");
    const [currencyCode, setCurrencyCode] = useState(currencies[0].code);
    const [result, setResult] = useState();

    const calculate = () => {
        const currenciesElement = currencies.filter(element => element.code === currencyCode);
        setResult(`${(amount / currenciesElement[0].value).toFixed(2).replace("\.", ",")} ${currencyCode}`)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculate();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <FormSection
                legend="Wybierz walutę do przeliczenia"
                span="Wybierz jedną:"
                body={<CurrencySelect
                    currencyValue={currencyCode}
                    onChange={({ target }) => { setCurrencyCode(target.value) }}
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