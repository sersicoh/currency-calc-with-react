const Amount = ({ amount, onChange }) => (

    <input
        type="number"
        name="amount"
        value={amount}
        onChange={onChange}
        required
        min="1"
        max="10000"
    />
);

export default Amount;