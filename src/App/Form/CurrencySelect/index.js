const CurrencySelect = ({ currencyValue, onChange, currencies }) => {

    return (
        <select
            name="currency"
            value={currencyValue}
            onChange={onChange}
        >
            {currencies.map(
                (currency) => (
                    <option
                        key={currency.short}
                        value={currency.short}
                    >
                        {currency.name}
                    </option>
                )
            )}
        </select>
    );
}

export default CurrencySelect;