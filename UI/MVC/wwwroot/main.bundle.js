/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./UI/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./UI/src/controllers/form-controller.js":
/*!***********************************************!*\
  !*** ./UI/src/controllers/form-controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/validate-service */ "./UI/src/services/validate-service.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service */ "./UI/src/services/api-service.js");
﻿




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
            
            const validateService = new _services_validate_service__WEBPACK_IMPORTED_MODULE_1__["default"]();
            
            if (this.form.name === "registration") {
                validateService.registration();
            }
            if (this.form.name === "authForm") {
                validateService.auth();
            }
        });
    }
}

/* harmony default export */ __webpack_exports__["default"] = (FormController);

/***/ }),

/***/ "./UI/src/main.js":
/*!************************!*\
  !*** ./UI/src/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_form_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/form-controller */ "./UI/src/controllers/form-controller.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api-service */ "./UI/src/services/api-service.js");
﻿



const form = document.querySelector('form');
const formController = new _controllers_form_controller__WEBPACK_IMPORTED_MODULE_0__["default"](form);

formController.validate();
formController.submit();


/***/ }),

/***/ "./UI/src/services/api-service.js":
/*!****************************************!*\
  !*** ./UI/src/services/api-service.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-service */ "./UI/src/services/modal-service.js");
/* harmony import */ var _render_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-service */ "./UI/src/services/render-service.js");
/* harmony import */ var _transform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform-service */ "./UI/src/services/transform-service.js");
﻿



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
                new _render_service__WEBPACK_IMPORTED_MODULE_1__["default"]().renderCategory();
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
                const Tab = new _modal_service__WEBPACK_IMPORTED_MODULE_0__["default"]().Tabs();

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
                const Tab = new _modal_service__WEBPACK_IMPORTED_MODULE_0__["default"]().Tabs();

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


                const Tab = new _modal_service__WEBPACK_IMPORTED_MODULE_0__["default"]().Tabs();
                const TaskObject = data;


                const promise = Object(_transform_service__WEBPACK_IMPORTED_MODULE_2__["fbTransformToArray"])(TaskObject);

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

/* harmony default export */ __webpack_exports__["default"] = (ApiService);

/***/ }),

/***/ "./UI/src/services/modal-service.js":
/*!******************************************!*\
  !*** ./UI/src/services/modal-service.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ModalService {

    constructor() {
        this.listForm = document.querySelector("#ListForm");
        this.listName = document.querySelector("input.listName");
        this.modalButtons = document.querySelector(".modal-footer .buttons");
        this.modalTitle = document.querySelector("#ListModalTitle");
    }


    CreateCategory() {

        //open modal
        $("#ListModal").modal("show");

        this.modalButtons.innerHTML = "";

        //buttons template
        let buttons = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                       <button type="submit" class="btn btn-primary create">Save</button>`;
        this.modalButtons.insertAdjacentHTML("afterbegin", buttons);

        //modal options
        this.listForm.name = "createListForm";
        this.modalTitle.innerHTML = "Create New List";
        this.listName.id = "createList";
        this.listName.setAttribute("value", "");
    }
    EditCategory(e) {

        let link = e.target;
        let currentList = link.parentElement.parentElement;
        let currentListName = currentList.getAttribute("data-name");


        if (!link.classList.contains("fa-edit")) {
            return;
        }

        //open modal
        $("#ListModal").modal("show");

        this.modalButtons.innerHTML = "";

        //buttons template
        let buttons = `<button type="submit" style="position:absolute;left:30px;" class="btn btn-danger btn-delete">Delete</button>
                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                       <button type="submit" class="btn btn-primary save">Save</button>`;
        this.modalButtons.insertAdjacentHTML("afterbegin", buttons);

        //modal options
        this.listForm.name = "editListForm";
        this.modalTitle.innerHTML = "Edit List";
        this.listName.id = "editList";
        this.listName.setAttribute("value", currentListName);
    }


    Tabs() {
        return {
            listContainer: document.querySelector("#myList"),
            tabContainer: document.querySelector(".tab-content"),
            renderLists: function (list, index, array) {
                return `<a class="list-group-item list-group-item-action" data-name="${list}" data-id="${index}" role="tab">
                                <span class="listName"><i class="fa fa-list-ul"></i>${list}</span>
                                <span class="listCount badge badge-primary" title="Task count">${array}</span>
                                <span class="editList" title="List options"><i class="fa fa-edit"></i></span>
                            </a>`
            },
            renderTabs: function (tab, index) {
                return `<div class="tab-pane"  data-name="${tab}" data-id="${index}" role="tabpanel"></div>`
            }
        };
    }
    showTab (e) {
        let link = e.target;

        if (!link.classList.contains('list-group-item')) {
            return;
        }

        let linkName = link.dataset.name;
        let listSearch = document.querySelector(".tab-content .searchList");

        document.querySelectorAll('.tab-pane, .list-group-item').forEach(el => {
            el.classList.remove("active");
        });

        document.querySelectorAll(".tab-pane").forEach(value => value.classList.remove("hide"));
        document.querySelectorAll(".tab-pane.active").forEach(value => value.classList.add("show"));

        if (listSearch) {
            listSearch.remove();
        }


        link.classList.add("active");
        document.querySelector(`.tab-pane[data-name='${linkName}']`).classList.add("active");
        document.querySelector(".categoriesName").innerHTML = linkName;
        document.querySelector(".AddTask").style.display = "block";
    }
    showAccountTab(e) {

    let link = e.target;

    if (!link.classList.contains('setting-list-item')) {
        return;
    }

    let linkName = link.dataset.name;

    document.querySelectorAll('.setting-tab-pane, .setting-list-item').forEach(el => {
        el.classList.remove("active");
    });
    link.classList.add("active");
    document.querySelector(`.setting-tab-pane[id=${linkName}]`).classList.add("active");

    }

    showTaskModal(e) {

    let taskName = document.querySelector("#taskName");
    let taskNote = document.querySelector("#note");
    let taskDate = document.querySelector("#date-picker");
    let taskTime = document.querySelector("#input_starttime");

    let currentTaskItem = e.target;
    let currentTaskName = currentTaskItem.getAttribute("data-value");
    let currentTaskId = currentTaskItem.getAttribute("data-id");
    let currentTaskNote = currentTaskItem.getAttribute("data-note");
    let currentTaskDate = currentTaskItem.getAttribute("data-date");
    let currentTaskTime = currentTaskItem.getAttribute("data-time");

    if (!currentTaskItem.classList.contains('task-item')) {
        return;
    }

    $('#fullHeightModalRight').modal('show');
    taskName.value = currentTaskName;
    taskDate.value = currentTaskDate;
    taskTime.value = currentTaskTime;
    taskNote.innerHTML = currentTaskNote;
    taskName.setAttribute("data-id", currentTaskId);
}
}

/* harmony default export */ __webpack_exports__["default"] = (ModalService);

/***/ }),

/***/ "./UI/src/services/render-service.js":
/*!*******************************************!*\
  !*** ./UI/src/services/render-service.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-service */ "./UI/src/services/modal-service.js");


class RenderService {
    constructor(){}
    
    renderCategory(){
        let category = {
            categoryName: document.querySelector("#createList").value.toString().trim(),
           
        };

        const listForm = document.querySelector("#ListForm");
        let categoryName = document.querySelector("#createList");
        let tabNameLength = document.querySelector(`.tab-content .tab-pane[id="${category.categoryName}"]`);
        let listLength = document.querySelectorAll("#myList a").length;
        const lastId = parseInt($(".list-group a:last-child").attr("data-id"));
        const newId = (lastId + 1).toString();


        if (category.categoryName && isNaN(category.categoryName) && tabNameLength === null) {

            let Tab = new _modal_service__WEBPACK_IMPORTED_MODULE_0__["default"]().Tabs();

            // render
            Tab.listContainer.insertAdjacentHTML("beforeend", Tab.renderLists(category.categoryName, newId, category.taskCounts));
            Tab.tabContainer.insertAdjacentHTML("beforeend", Tab.renderTabs(category.categoryName, newId));

            //delete active class
            Tab.listContainer.querySelectorAll("a").forEach(value => value.classList.remove("active"));
            Tab.tabContainer.querySelectorAll(".tab-pane").forEach(value => value.classList.remove("active"));

            //add active class created category
            Tab.listContainer.querySelector(`a[data-name=${category.categoryName}]`).classList.add("active");
            Tab.tabContainer.querySelector(`.tab-pane[data-name=${category.categoryName}]`).classList.add("active");

            document.querySelector(".categoriesName").innerHTML = category.categoryName;

            // valid categoryName
            categoryName.classList.remove("is-invalid");
            categoryName.classList.add("is-valid");

            listForm.reset();

            $(".valid-feedback").html("");
            $(".invalid-feedback").html("");

            $('#ListModal').modal('hide');
        } else {
            categoryName.classList.add("is-invalid");
            return false;
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (RenderService);

/***/ }),

/***/ "./UI/src/services/transform-service.js":
/*!**********************************************!*\
  !*** ./UI/src/services/transform-service.js ***!
  \**********************************************/
/*! exports provided: fbTransformToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbTransformToArray", function() { return fbTransformToArray; });
// transform firebase data to object=>
async function fbTransformToArray(fbData) {
    return Object.keys(fbData).map(function (value) {
        const item = fbData[value];

        item.tasksCount = Object.keys(item).length-1;
        return item;
    })
}



/***/ }),

/***/ "./UI/src/services/validate-service.js":
/*!*********************************************!*\
  !*** ./UI/src/services/validate-service.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ValidateService {
    constructor() {
    }

    registration() {

        const form = document.forms.namedItem('registration');
        const btnSend = form.querySelector("button[type=submit]");

        console.log('test')


        $(form).validate({
            rules: {
                firstName: {
                    required: true,
                    rangelength: [2, 10]
                },
                lastName: {
                    required: true,
                    rangelength: [2, 15]
                },
                date: {
                    required: true,
                    date: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    rangelength: [6, 50],


                },
                confirmPassword: {
                    required: true,
                    equalTo: "#password"

                }
            },
            messages: {
                firstName: {
                    required: "Please enter your first name",
                    rangelength: "Login format not valid",
                },
                lastName: {
                    required: "Please enter your last name",
                    rangelength: "Login format not valid",
                },
                email: {
                    required: "Please input your email"
                },
                password: {
                    required: "Please enter your password",

                },
                confirmPassword: {
                    required: "Please enter confirmPassword",
                    equalTo: "Password and Confirm password  dont match"
                }
            },
            submitHandler: function (form) {
                form.submit();
                return false;
            }
        });

        if ($(form).valid()) {
            $(btnSend).removeClass('disabled');
            $(btnSend).removeAttr('disabled');
        }
    };


    auth() {
        const form = document.forms.namedItem('authForm');
        const btnSignIn = form.querySelector(".button[value=LogIn]");


        if (form.email.value === "" || form.password.value === "") {
            btnSignIn.disabled = "true";
            btnSignIn.classList.add("disabled")

        } else if (form.email.classList.contains("invalid")) {
            btnSignIn.disabled = "true";
            btnSignIn.classList.add("disabled")
        }


        if (form.email.value !== "" && form.password.value !== "") {
            btnSignIn.removeAttribute("disabled");
            btnSignIn.classList.remove("disabled")
        }


        $(form).validate({
            rules: {

                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                }

            },
            messages: {
                email: {
                    required: "Please input your email"
                },
                password: {
                    required: "Please enter your password",
                }
            },
            submitHandler: function (form) {
                form.submit();
                return false;
            }
        });
    };
}

/* harmony default export */ __webpack_exports__["default"] = (ValidateService);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map