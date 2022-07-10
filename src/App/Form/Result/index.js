import "./style.css";

export const Result = ({ result }) => (

    <span className="form__Result" >
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>

            </>
        )}
    </span>

);

export default Result;