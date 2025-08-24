import edit from "./edit.png";
import deleted from "./delete.png";
import { format } from "date-fns";
import { newProjectArray } from "./project-dom";

const toDoList = document.querySelector(".to-do-list");
const inbox = document.querySelector(".default-project");

export function todoFactory(title, date, priority) {
    return {
        displayCheckbox() {
            const div = document.createElement("div");
            const span = document.createElement("span");
            const checkbox = document.createElement("input")
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", "check");
            toDoList.append(div);
            div.classList.add("new-todo");
            div.append(span);
            span.append(checkbox);
        },
        displayTitle() {
            const titleDiv = document.createElement("div");
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(titleDiv);
            titleDiv.innerText = title;
        },
        displayDate() {
            const dateDiv = document.createElement("div");
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(dateDiv);
            dateDiv.innerText = format(new Date(date), 'HH:mm dd/MM/yyyy');
        },
        displayPriority() {
            const priorityDiv = document.createElement("div");
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(priorityDiv);
            priorityDiv.innerText = priority;
        },
        displayDelete() {
            const deleteImage = document.createElement("img");
            deleteImage.src = deleted;
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(deleteImage);
        },
        displayEdit() {
            const editImage = document.createElement("img");
            editImage.src = edit;
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(editImage);
        },
        selectProject() {
            const select = document.createElement("select");
            const span = document.createElement("span");
            const option = document.createElement("option");
            toDoList.lastChild.append(span);
            span.append(select);
            select.classList.add("project-select");
            option.innerText = inbox.innerText;
            select.append(option);

            newProjectArray.forEach(name => {
                const option = document.createElement('option');
                option.textContent = name;
                select.append(option);
                
            })   
            changeProject();
        }
    }
}

function changeProject() {
       const selections = document.querySelectorAll("select.project-select");

            selections.forEach((select) => {
                select.addEventListener("change", (e) => {
                    console.log("mama");                
                })
            })
}