// ---
import LeadForm from "/public/js/Lead/LeadForm.js";
// ---
export default class LeadResponse extends LeadForm {
    // ---
    constructor(formElements) {
        super(formElements);
    }
    // ---
    read() {
        for (const property in this.formElements) {
            this.formResponse[property] = document.getElementById(this.formElements[property]).value;
        }
    }
    // ---
    local() {
        for (const property in this.formElements) {
            localStorage.setItem(property, this.formResponse[property]);
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
    store() { }
    // ---
}
// EOF