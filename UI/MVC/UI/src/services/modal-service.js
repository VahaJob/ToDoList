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

export default ModalService;