import { ResultSpan } from "./styled";

export const Result = ({ result }) => (

    <ResultSpan className="form__Result" >
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>

            </>
        )}
    </ResultSpan>

);

export default Result;