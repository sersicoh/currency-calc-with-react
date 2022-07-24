const CurrencySelect = ({ currencyValue, onChange, currencies }) => {

   return (
      <select
         name="currency"
         value={currencyValue}
         onChange={onChange}
      >
         {currencies.currenciesCode.map(
            (currency) => (
               <option
                  key={currency}
                  value={currency}
               >
                  {currency}
               </option>
            )
         )}
      </select>
   )

};

export default CurrencySelect;