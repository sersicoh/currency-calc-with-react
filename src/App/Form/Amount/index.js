import "./style.css";

const Amount = ({ amount, onChange }) => (

    < input
        type="number"
        name="amount"
        value={amount}
        onChange={onChange}
        className="form__Data js-input"
        required
        min="1"
        max="10000"
    />
);

export default Amount;