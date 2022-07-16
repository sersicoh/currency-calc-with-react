import { FormField, FormVariable } from "./styled";
const FormSection = ({ legend, span, body }) => (

    <FormField>
        <legend>{legend}</legend>
        <label>
            <FormVariable>{span}</FormVariable>
            {body}
        </label>
    </FormField>

);

export default FormSection;