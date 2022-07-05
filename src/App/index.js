import "./style.css";
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
    <div className="app">
      <Header title="Przelicznik walut"></Header>
      <Navigation />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
      <Footer text="© Copyright 2022 by Sciuszek - wszelkie prawa zastrzeżone"></Footer>
    </div>

  );
}

export default App;
