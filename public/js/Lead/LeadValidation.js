// ---
import LeadForm from "./LeadForm.js";
// ---
export default class LeadValidation extends LeadForm {
    // ---
    #isValid;
    // ---
    constructor(formElements) {
        super(formElements);

        this.#isValid = Object.create(formElements);
        for (const property in this.isValid) {
            this.#isValid[property] = false;
        }
    }
    // ---
    isReady(formFieldId = "") {
        switch (formFieldId) {
            case this.formElements.name:
                this.#nameField();
                break;
            case this.formElements.email:
                this.#emailField();
                break;
            default:
                this.#emailField();
                this.#nameField();
                break;
        }

        let isReadyStatus = true;
        for (const property in this.#isValid) {
            isReadyStatus &&= this.#isValid[property];
        }

        return isReadyStatus;
    }
    // ---
    #nameField() {
        const element = document.getElementById(this.formElements.name);

        this.#isValid.name = (element.value === "") ? false : true;

        const validationMessage = this.#isValid.name ? "" : "Por favor insira seu primeiro nome!";

        element.setCustomValidity(validationMessage);
        element.reportValidity();
    }
    // ---
    #emailField() {
        const element = document.getElementById(this.formElements.email);

        const regex = /\S+@\S+\.\S+/;
        this.#isValid.email = regex.test(element.value);

        const validationMessage = this.#isValid.email ? "" : "Por favor insira um email válido!";

        element.setCustomValidity(validationMessage);
        element.reportValidity();
    }
    // ---
}
// EOF