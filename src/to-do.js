import { format } from "date-fns";

const toDoList = document.querySelector(".to-do-list");

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
            const headingDiv = document.createElement("div");
            const titleDiv = document.createElement("div");
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(headingDiv);
            span.append(titleDiv);
            headingDiv.innerText = "Title";
            titleDiv.innerText = title;
        },
        displayDate() {
            const headingDiv = document.createElement("div");
            const dateDiv = document.createElement("div");
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(headingDiv);
            span.append(dateDiv);
            headingDiv.innerText = "Due-date";
            dateDiv.innerText = format(new Date(date), 'HH:mm dd/MM/yyyy');
        },
        displayPriority() {
            const headingDiv = document.createElement("div");
            const priorityDiv = document.createElement("div");
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(headingDiv);
            span.append(priorityDiv);
            headingDiv.innerText = "Priority";
            priorityDiv.innerText = priority;
        },
        displayDelete() {
            const headingDiv = document.createElement("div");
            const deleteDiv = document.createElement("div");
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(headingDiv);
            span.append(deleteDiv);
            headingDiv.innerText = "Delete";
        },
        displayEdit() {
            const headingDiv = document.createElement("div");
            const editDiv = document.createElement("div");
            const span = document.createElement("span");
            toDoList.lastChild.append(span);
            span.append(headingDiv);
            span.append(editDiv);
            headingDiv.innerText = "Edit";
        }
    }
}