import "./style.css";

const CurrencySelect = ({ currency, onChange, currencies }) => {

    return (
        <select
            name="currency"
            className="form__Data"
            value={currency}
            onChange={onChange}
        >
            {currencies.map(
                (currency) => (
                    <option
                        key={currency.code}
                        value={currency.code}
                    >
                        {currency.name}
                    </option>
                )

            )}

        </select>
    );

}

export default CurrencySelect;