import "./style.css";

const CurrencySelect = ({ currency }) => {

    return (
        <select name="currency" className="form__Data">
            <option value={currency[0].code}>{currency[0].code}</option>
            <option value={currency[0].code}>{currency[1].code}</option>
        </select>
    );

}

export default CurrencySelect;