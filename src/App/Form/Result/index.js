import "./style.css";

export const Result = ({ result }) => (

    <span className="form__Result" >
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </>
        )}
    </span>

);

export default Result;