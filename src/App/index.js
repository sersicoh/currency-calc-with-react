import { StyledApp } from "./styled";
import Header from "./Header";
import Navigation from "./Navigation";
import { Form } from "./Form";
import Footer from "./Footer";
import { useState } from "react";
import { useCurrencies } from "./useCurrencies";

function App() {

  const [result, setResult] = useState();
  const currencies = useCurrencies();

  const calculateResult = (currency, amount) => {

    const rate = currencies.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  return (
    <StyledApp>
      <Header title="Przelicznik walut" />
      <Navigation />
      <Form
        result={result}
        calculateResult={calculateResult}
        currencies={currencies}
      />
      <Footer text="© Copyright 2022 by Sciuszek - wszelkie prawa zastrzeżone" />
    </StyledApp>

  );
}

export default App;
