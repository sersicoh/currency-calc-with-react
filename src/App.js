import Container from "./Container";
import Header from "./Header";
import Navigation from "./Navigation";
import Form from "./Form";
import Footer from "./Footer";

function App() {

  return (
    <Container>
      <Header title="Przelicznik walut"></Header>
      <Navigation />
      <Form />
      <Footer text="© Copyright 2022 by Sciuszek - wszelkie prawa zastrzeżone"></Footer>
    </Container>
  );
}

export default App;
