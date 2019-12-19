﻿import ModalService from "./modal-service";
import RenderService from "./render-service";
import {fbTransformToArray} from "./transform-service";

class ApiService {

    createCategory(categoryName) {
        $.ajax({
            url: '/Home/CreateCategory',
            type: 'POST',
            data: {Name: categoryName},
            dataType: 'html',
            success: function () {
                $(".invalid-feedback").hide();
                $(".valid-feedback").show();
                $(".valid-feedback").html(`Category ${categoryName} successfully created`);
                new RenderService().renderCategory();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $(".valid-feedback").hide();
                $(".invalid-feedback").show();
                $(".invalid-feedback").html(xhr.responseText)
            }
        });
    }
    editCategory(id,newData) {
        $.ajax({
            url: '/Home/EditCategory',
            type: 'PUT',
            data: { Id: id, Name: newData },
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
    deleteCategory(id){
        $.ajax({
            url: '/Home/DeleteCategory',
            type: 'DELETE',
            data: { Id: id},
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
    
    getTasks() {
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

                        Tab.listContainer.insertAdjacentHTML("beforeend", Tab.renderLists(objs.name, index, 0));
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
}

export default ApiService;