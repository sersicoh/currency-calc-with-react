import "./style.css";
import FormSection from "./FormSection";
import Result from "./Result";
import CurrencySelect from "./CurrencySelect";
import TradeType from "./TradeType";
import Amount from "./Amount";
import Button from "./Button"


const Form = () => {

    const currency = [
        { code: "EUR", value: 4.77 },
        { code: "USD", value: 4.02 },
    ];

    const currencySelected = () => ({

    });

    const calculate = () => (
        console.log(5*2)
    );

    return (
        <form className="form">
            <FormSection
                legend="Wybierz walutę do przeliczenia"
                span="Wybierz jedną:"
                body={<CurrencySelect currency={currency} />}
            />
            <FormSection
                legend="Wybierz co chcesz zrobić"
                span="Wybierz jedną opcję:"
                body={<TradeType />}
            />
            <FormSection
                legend="Podaj kwotę do przeliczenia"
                span="Kwota:"
                body={<Amount />}
            />
            <Button calculate={calculate} />
            <Result />
        </form>

    )
};

export default Form;