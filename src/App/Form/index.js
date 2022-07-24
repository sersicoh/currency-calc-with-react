import "./style.css";
import { useState } from "react";
import FormSection from "./FormSection";
import Amount from "./Amount";
import CurrencySelect from "./CurrencySelect";
import Button from "./Button";
import { Result } from "./Result";
import Clock from "./Clock";



export const Form = ({ result, calculateResult, currencies }) => {

    const [currency, setCurrency] = useState("USD");
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    // Jak widać w tym miejscu (patrz niżej w kod) zastosowałem testowo if ale nie wiem czy właśnie tak to powinno wyglądać, a jeśli tak to chciałbym takiego if'a zastosować wewnątrz return by tylko część widoku się generowała, a może nawet kawałek innego widoku, a po osiągnięciu statusu "ok" wyrenderować końcowy widok. Problem w tym, że nie wiem w jaki sposób to napisać, spróbuję pokazać na przykładzie funkcji o co mi chodzi:

    // sposób 1:
    // const widok = function () {
    //     return (
    //         if (currencies.status === "ok") {
    //         <CałyWidok />
    //         } else {
    //         <KawałekWidok />
    //         }
    //     )
    // }

// sposób 2:
// const widok = function () {
//     return (
//             if (currencies.status !== "ok") {
//         <KawałekWidok />
//         } else {
//         <ResztaWidoku />
//         }
//         )
//     }


// Z logicznego punktu widzenia wybrałbym sposób 2, ponieważ przy sposobie 1 dwa razy generuje się różny widok, a przy sposobie 2 kawałek do kawałku i to jest dla mnie bardziej logiczne. Druga sprawa, to wiem, że if nie może byc wewnątrz return, więc jak to zrobić? Daj proszę znać czy w ogóle dobrze kombinuje czy powinienem to zupełnie inaczej zrobić?


if (currencies.status === "ok") {
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <Clock />
            <FormSection
                legend="Wybierz walutę do przeliczenia"
                span="Wybierz jedną:"
                body={<CurrencySelect
                    value={currency}
                    onChange={({ target }) => { setCurrency(target.value) }}
                    currencies={currencies}
                />}
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

} else {
    return (<span>Ładowanie</span>)
}


};

export default Form;