import "./style.css";

const Button = ({ calculate }) => {

    return (
        <button
            className="form__Button"
            onClick={calculate}
        >Przelicz</button>
    );
}
export default Button;