import { StyledCurrenciesDate } from "./styled";

export const CurrenciesDate = ({ date }) => (
    <>
        <StyledCurrenciesDate>
            Kursy walut pobierane są z <a href="https://exchangerate.host/">exchangerate.host</a>
        </StyledCurrenciesDate>
        <StyledCurrenciesDate>
            Aktualne na dzień: <strong>{date}</strong>
        </StyledCurrenciesDate>
    </>

);

export default CurrenciesDate;