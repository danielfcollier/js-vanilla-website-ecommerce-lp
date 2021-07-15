// ---
class LeadForm {
    // ---

    // ---
    constructor() {
        this.formElements = {
            name: "lead-form-name",
            email: "lead-form-email",
        };
    }
    // ---
    read() {
        for (const property in this.formElements) {
            formResponse[property] = document.getElementById(this.formElements[property]).value;
            console.log(`### DEBUG ### ${formResponse[property]}`);
        }
    }
    // ---
    store() {
        for (const property in this.formElements) {
            localStorage.setItem(property, formResponse[property]);
        }
        console.log(`Lead form response stored successfully!`);
    }
    // ---
    clear() {
        for (const property in this.formElements) {
            document.getElementById(this.formElements[property]).value = "";
        }
    }
    // ---
    greet() {
        // Modal Window or Text Line: say thank you!
    }
    // ---
    storeAtCloud() { }
    // ---
}
// ---
class LeadValidation extends LeadForm {
    // ---
    constructor() {
        super();
    }
    // ---
    emailField() {
        const regex = /\S+@\S+\.\S+/;
        const email = document.getElementById(this.formElements['email']).value;
        console.log(email)
        return regex.test(email);
    }
    // ---
}
// ---
const leadForm = new LeadForm();
const formResponse = {};
// ---
main();
// ---
function main() {
    document.addEventListener("submit", event => {
        event.preventDefault();

        leadForm.read();
        leadForm.store();
        leadForm.clear();
        leadForm.greet();

        leadForm.storeAtCloud();
    });
}
// ---
function validateEmail() {
    const formValidator = new LeadValidation();
    const isValid = formValidator.emailField();
    return isValid;
}
// --- EOF