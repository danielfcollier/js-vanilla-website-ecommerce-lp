// ---
import LeadResponse from "./Lead/LeadResponse.js";
import LeadValidation from "./Lead/LeadValidation.js";
// ---
const formElements = {
    name: "lead-form-name",
    email: "lead-form-email",
};
// ---
const leadResponse = new LeadResponse(formElements);
// ---
main();
// ---
function main() {
    document.addEventListener("submit", event => {
        event.preventDefault();
        alert('Testando');

        leadResponse.read();
        leadResponse.store();
        leadResponse.clear();
        leadResponse.greet();

        leadResponse.storeAtCloud();
    });
}
// ---
window.validateEmail = function validateEmail() {
    const formValidator = new LeadValidation(formElements);
    const isValid = formValidator.emailField();
    return isValid;
}
// EOF