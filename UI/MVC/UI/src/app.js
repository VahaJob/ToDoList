import CategoryController from "./controllers/category-controller"
import ApiService from "./services/api-service";
import ModalService from "./services/modal-service";
import TaskController from "./controllers/task-controller";
import { setTimeout } from "timers";

//variables
const btnCreateList = document.querySelector("#showCreateList");
const listGroup = document.querySelector('.list-group');
const tabContent = document.querySelector(".tab-content");
const settingList = document.querySelector(".Settings-list");
const createTaskForm = document.forms.namedItem("AddTask");
const editTaskForm = document.forms.namedItem("EditTask");

//controllers
const categoryController = new CategoryController();
const taskController = new TaskController();

//services
const modalService = new ModalService();

// load data
$(function () {
    new ApiService().getUser();

    setTimeout(function () {
        new ApiService().getCategories();
    }, 500);
    setTimeout(function () {
        new ApiService().getTasks();
    },1000)
});


//listeners
//1) categories
btnCreateList.addEventListener("click", categoryController.CreateCategory);
listGroup.addEventListener("click", categoryController.EditCategory);
listGroup.addEventListener("click", categoryController.switchCategory);



//tasks
createTaskForm.addEventListener("submit", taskController.createTask);
tabContent.addEventListener("click", taskController.deleteTask);
editTaskForm.addEventListener("submit", taskController.updateTask);


//tabs
settingList.addEventListener("click", modalService.showAccountTab);
tabContent.addEventListener("click", modalService.showTaskModal);    








