import "./style.css";

const Amount = () => {

    return (
        <input type="number" name="amount" className="form__Data js-input" required min="1" max="10000"></input>
    );
}

export default Amount;