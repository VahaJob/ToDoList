import ApiService from "../services/api-service";

class TaskController {
    constructor() {
    }

    updateTask(e) {

        e.preventDefault();
        
        let newData = {
            Id : document.querySelector("#taskName").getAttribute("data-id"),
            Name: document.querySelector("#taskName").value,
            Note: document.querySelector("#note").value,
            CategoryId : document.querySelector(".tab-pane.active").getAttribute("data-id"),
            UserAccountId: document.querySelector("input#UserAccountId").value,
            DurationDate : document.querySelector("#date-picker").value,
            DurationTime : document.querySelector("#input_starttime").value,
            CreateTime : new Date().getDate().toString(),
            Favorites : false,
        };
        
        new ApiService().updateTask(newData);
    }

    deleteTask(e) {
        if (e.target.classList.contains("btn_delete")) {
            e.stopPropagation();

            const taskId = e.target.parentElement.parentElement.getAttribute("data-id");

            new ApiService().deleteTask(taskId);
        }
    }

    createTask(e) {

        e.preventDefault();
        
        const taskData = {
            'Name': $("form[name='AddTask']").find("input[name='Name']").val(),
            'Description': "",
            'CategoryId': $(".tab-content .tab-pane.active").attr("data-id")
        };

        new ApiService().createTask(taskData)
    }
}

export default TaskController;