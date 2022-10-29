import FormController from "./controllers/form-controller";
import ApiService from "./services/api-service";


const form = document.querySelector('form');
const formController = new FormController(form);

formController.validate();
formController.submit();
