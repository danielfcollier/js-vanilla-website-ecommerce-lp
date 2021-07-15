// ---
import LeadForm from "./LeadForm.js";
// ---
export default class LeadValidation extends LeadForm {
    // ---
    constructor(formElements) {
        super(formElements);
    }
    // ---
    emailField() {
        const regex = /\S+@\S+\.\S+/;
        const email = document.getElementById(this.formElements['email']).value;
        return regex.test(email);
    }
    // ---
}
// EOF