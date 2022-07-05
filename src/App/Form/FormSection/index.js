import "./style.css";

const FormSection = ({ legend, span, body }) => (

    <fieldset className="form__Fieldset">
        <legend>{legend}</legend>
        <label>
            <span className="form__Variables">{span}</span>
            {body}
        </label>
    </fieldset>

);

export default FormSection;