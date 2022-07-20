import { StyledApp } from "./styled";
import { currencies } from "./currencies";
import Header from "./Header";
import Navigation from "./Navigation";
import { Form } from "./Form";
import Footer from "./Footer";
import { useState } from "react";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
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
      />
      <Footer text="© Copyright 2022 by Sciuszek - wszelkie prawa zastrzeżone" />
    </StyledApp>

  );
}

export default App;
