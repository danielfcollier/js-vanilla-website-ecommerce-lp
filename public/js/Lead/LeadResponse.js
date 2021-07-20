// ---
import LeadForm from "./LeadForm.js";
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
    store() {
        const payload = {
            FullName: this.formResponse.name,
            Email: this.formResponse.email,
            Platform: window.navigator.platform,
            Vendor: window.navigator.vendor,
            Geolocation: 'not implemented'
        };

        const url = "https://script.google.com/macros/s/AKfycbzirntklCx9Mh8tXf7TTPtiDCz1XpWh-UPiq_McE992brKb02M2R_XKzE54CfFt5N6Mtw/exec";
        const params = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };

        fetch(url, params)
            .then(response => response.text())
            .then((data) => resolve(data ? JSON.parse(data) : {}))
            .catch((error) => reject(error));

        function resolve(data) {
            console.log("Success");
        }

        function reject(error) {
            console.log("Error");
        }
    }
    // ---
}
// EOF