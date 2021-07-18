// ---
import LeadResponse from "/public/js/Lead/LeadResponse.js";
import LeadValidation from "/public/js/Lead/LeadValidation.js";
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
    const form = document.querySelector('.form-container');
    const formValidator = new LeadValidation(formElements);

    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!formValidator.isReady()) {
            return false;
        }

        alert("Gratidão pela inscrição!");

        leadResponse.read();
        leadResponse.local();
        leadResponse.clear();
        leadResponse.greet();

        leadResponse.store();

        return true;
    });

    return true;
}
// ---
window.validateForm = (formField) => {
    const formValidator = new LeadValidation(formElements);

    if (!formValidator.isReady(formField.id)) {
        return false;
    }

    return true;
}
// EOF