import { log } from "util";
import ValidateService from "../services/validate-service";
import ApiService from "../services/api-service";


class FormController {
    
    constructor(form) {
         this.form = form;
         this.formData = new FormData(form)
    }

    submit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            this.validate();
        })
    }

    validate() {
        
        this.form.addEventListener(`change`, ()=> {
            
            const validateService = new ValidateService();
            
            if (this.form.name === "registration") {
                validateService.registration();
            }
            if (this.form.name === "authForm") {
                validateService.auth();
            }
        });
    }
}

export default FormController;