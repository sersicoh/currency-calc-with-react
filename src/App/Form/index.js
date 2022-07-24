import { FormBody } from "./styled"
import { useState } from "react";
import FormSection from "./FormSection";
import Amount from "./Amount";
import CurrencySelect from "./CurrencySelect";
import Button from "./Button";
import { Result } from "./Result";
import Clock from "./Clock";
import ExternalScreen from "./ExternalScreen"

export const Form = ({ result, calculateResult, currencies }) => {

   const [currency, setCurrency] = useState("USD");
   const [amount, setAmount] = useState("");

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency, amount);
   };

   switch (currencies.status) {

      case "ok":
         return (
            <FormBody onSubmit={onFormSubmit}>
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
               <Button />StyledExternal
               <Result result={result} />
            </FormBody>

         );

      case "loading":
         return (
            <ExternalScreen message={"Ładuję aktualne stawki walut z serwera zewnętrznego"} />
         );
      case "error":
         return (
            <ExternalScreen message={"Coś poszło nie tak, może nie masz internetu albo my coś popsuliśmy, odśwież stronę za chwilę"} />
         );
   }

};

export default Form;