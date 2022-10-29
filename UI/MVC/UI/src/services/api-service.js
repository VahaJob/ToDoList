import ModalService from "./modal-service";
import RenderService from "./render-service";
import {fbTransformToArray} from "./transform-service";

class ApiService {

    createCategory(data) {
        $.ajax({
            url: '/Home/CreateCategory',
            type: 'POST',
            data: data,
            success: function (data) {
                $(".invalid-feedback").hide();
                $(".valid-feedback").show();
                $(".valid-feedback").html(`Category ${data.Name} successfully created`);
                console.log("data : " + data);
                new RenderService().renderCategory();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $(".valid-feedback").hide();
                $(".invalid-feedback").show();
                $(".invalid-feedback").html(xhr.responseText)
            }
        });
    }

    editCategory(id, newData) {
        $.ajax({
            url: '/Home/EditCategory',
            type: 'PUT',
            data: {Id: id, Name: newData},
            dataType: 'html',
            success: function (data) {

                const newData = JSON.parse(data);
                const newName = newData.name;
                const Tab = new ModalService().Tabs();

                Tab.listContainer.querySelector(`a[data-id='${id}']`).querySelector(".listName").innerHTML = newName;
                Tab.listContainer.querySelector(`a[data-id='${id}']`).setAttribute(`data-name`, `${newName}`);
                Tab.tabContainer.querySelector(`.tab-pane[data-id='${id}']`).setAttribute(`data-name`, `${newName}`);

                document.querySelector(".categoriesName").innerHTML = newName;

                $('#ListModal').modal('hide');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr)
            }
        });
    }

    deleteCategory(id) {
        $.ajax({
            url: '/Home/DeleteCategory',
            type: 'DELETE',
            data: {Id: id},
            dataType: 'html',
            success: function () {
                const Tab = new ModalService().Tabs();

                Tab.listContainer.querySelector(`a[data-id='${id}']`).remove();
                Tab.tabContainer.querySelector(`.tab-pane[data-id='${id}']`).remove();

                document.querySelector(".categoriesName").innerHTML = "";


                $("#myList a:first-child").addClass("active")
                $(".tab-content .tab-pane:first-child").addClass("active");

                const activeName = $("#myList a:first-child").attr("data-name");

                document.querySelector(".categoriesName").innerHTML = activeName;

                $('#ListModal').modal('hide');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr)
            }
        });
    }

    getCategories() {
        $.ajax({
            url: '/Home/CategoryList',
            type: 'GET',
            success: function (data) {


                const Tab = new ModalService().Tabs();
                const TaskObject = data;


                const promise = fbTransformToArray(TaskObject);

                promise.then(function (arr) {
                    let objectKeys = Object.keys(TaskObject);


                    //Update database
                    document.querySelector("#myList").innerHTML = "";
                    document.querySelector(".tab-content").innerHTML = "";

                    objectKeys.forEach((value, index, array) => {
                        array = arr;

                        const objs = array[value];
                        index = objs.id;

                        Tab.listContainer.insertAdjacentHTML("beforeend", Tab.renderLists(objs.name, index, objs.taskCounts));
                        Tab.tabContainer.insertAdjacentHTML("beforeend", Tab.renderTabs(objs.name, index));

                        Tab.listContainer.querySelectorAll("a").forEach(value => value.classList.remove("active"));
                        Tab.tabContainer.querySelectorAll(".tab-pane").forEach(value => value.classList.remove("active"));

                        document.querySelector("#myList a:first-child").classList.add("active");
                        document.querySelector(".tab-content .tab-pane:first-child").classList.add("active");

                        document.querySelector(".categoriesName").innerHTML = array[0].name;
                    });
                }).catch(e => console.log(e.message));

            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.responseText)
            }
        });
    }

    getTasks() {
        $.ajax({
            url: '/Home/TaskList',
            type: 'GET',
            success: function (data) {

                for (const tasks in data) {
                    const task = data[tasks];
                    document.querySelectorAll(`.tab-content .tab-pane`).forEach((value, key, parent) => {
                        if (value.dataset.id === `${task.categoryId}`) {

                            let template = `
                                    <li class="task-item list-group-item list-group-item-light" data-id="${task.id}" data-note="${task.note}" data-date="${task.durationDate}" data-time="${task.durationTime}" data-value="${task.name}">
                                    <input type="checkbox" class="isMarked" title="Mark as completed">
                                    <span class="task-name" title="Edit Task">${task.name}</span>
                                    <span class="deleteTask" title="Delete Task"><i class="fa fa-trash btn_delete"></i></span>
                                    </li>`;

                            value.insertAdjacentHTML("beforeend", template);
                        }
                    })
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.responseText)
            }
        });
    }

    createTask(data) {
        $.ajax({
            url: '/Home/CreateTask',
            type: 'POST',
            data: data,
            success: function () {

                let template = `
               <li class="task-item list-group-item list-group-item-light" data-id="${data.Id}" data-value="${data.Name}">
                    <input type="checkbox" class="isMarked" title="Mark as completed">
                    <span class="task-name" title="Edit Task">${data.Name}</span>
                    <span class="deleteTask" title="Delete Task"><i class="fa fa-trash btn_delete"></i></span>
               </li>`;

                document.querySelector(".tab-pane.active").insertAdjacentHTML("afterbegin", template);
                $("form[name='AddTask']").find("input#name").val("");
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.responseText)
            }
        });
    }

    deleteTask(id) {
        $.ajax({
            url: '/Home/DeleteTask',
            type: 'DELETE',
            data: {Id: id},
            dataType: 'html',
            success: function () {

                $(`li.task-item[data-id='${id}']`).remove();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr)
            }
        });
    }

    updateTask(newData) {
        $.ajax({
            url: '/Home/UpdateTask',
            type: 'PUT',
            data: newData,
            success: function (newData) {
                
                let taskName = document.querySelector("#taskName");
                let taskNote = document.querySelector("#note");
                let taskDate = document.querySelector("#date-picker");
                let taskTime = document.querySelector("#input_starttime");

                taskName.value = newData.Name;
                taskDate.value = newData.DurationDate;
                taskTime.value = newData.DurationTime;
                taskNote.innerHTML = newData.Note;

                $('#fullHeightModalRight').modal('hide');
                document.forms.namedItem("EditTask").reset();

            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr)
            }
        });
    }

    getUser() {
        $.ajax({
            url: '/Account/GetUser',
            type: 'GET',
            success: function (User) {
                console.log(User);

                let accountForm = document.forms.namedItem("AccountSettings");
                accountForm["UserAccountId"].value = User.userAccountId;
                accountForm["user-name"].value = User.firstName;
                accountForm["user-email"].value = User.email;
                // accountForm["user-phone"].value = User.phone;
                accountForm["user-password"].value = User.password;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.responseText)
            }
        });
    }
}

export default ApiService;