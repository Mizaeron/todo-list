import edit from "./edit.png";
import deleted from "./delete.png";
import { format } from "date-fns";
import { newProjectArray } from "./project-dom";

export const selectedProjects = [];

const toDoList = document.querySelector(".to-do-list");
const inbox = document.querySelector(".default-project");
let index = 0;

export function todoFactory(title, date, priority, description) {
  return {
    displayCheckbox() {
      const div = document.createElement("div");
      const span = document.createElement("span");
      const checkbox = document.createElement("input");
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
      dateDiv.innerText = format(new Date(date), "HH:mm EEEE [do MMM yyyy]");
    },
    displayPriority() {
      const span = document.createElement("span");
      const select = document.createElement("select");
      const option = document.createElement("option");
      toDoList.lastChild.append(span);
      span.append(select);
      select.append(option);
      option.innerText = priority;

      if (option.innerText === "high") {
        option.style.background = "red";
        select.style.background = option.style.background;
        const medium = document.createElement("option");
        const low = document.createElement("option");
        medium.innerText = "medium";
        medium.style.background = "green";
        low.innerText = "low";
        low.style.background = "yellow";
        select.append(medium, low);
      } else if (option.innerText === "medium") {
        option.style.background = "green";
        select.style.background = option.style.background;
        const low = document.createElement("option");
        const high = document.createElement("option");
        high.innerText = "high";
        high.style.background = "Red";
        low.innerText = "low";
        low.style.background = "Yellow";
        select.append(high, low);
      } else {
        option.style.background = "yellow";
        select.style.background = option.style.background;
        const medium = document.createElement("option");
        const high = document.createElement("option");
        high.innerText = "high";
        high.style.background = "Red";
        medium.innerText = "medium";
        medium.style.background = "Green";
        select.append(high, medium);
      }

      select.addEventListener("change", () => {
        const selectedOption = select.options[select.selectedIndex];
        switch (selectedOption.text) {
          case "high":
            select.style.background = "red";
            break;
          case "medium":
            select.style.background = "green";
            break;
          case "low":
            select.style.background = "yellow";
            break;
        }
      });
    },
    displayDelete() {
      const deleteImage = document.createElement("img");
      deleteImage.src = deleted;

      const span = document.createElement("span");
      span.classList.add("delete");
      toDoList.lastChild.append(span);
      span.append(deleteImage);
    },
    displayEdit() {
      const editImage = document.createElement("img");

      editImage.src = edit;
      const span = document.createElement("span");
      span.classList.add("edit");
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

      newProjectArray.forEach((name) => {
        const option = document.createElement("option");
        option.textContent = name;
        select.append(option);
      });
      changeProject();
      console.log(newProjectArray);
    },
    displayDescription() {
      const span = document.createElement("span");
      const descriptionDiv = document.createElement("div");

      span.classList.add("description");
      span.setAttribute("data-index", index);
      toDoList.lastChild.append(span);

      descriptionDiv.classList.add("editDescr");
      descriptionDiv.innerText = description.value;
      span.append(descriptionDiv);
      span.style.display = "none";

      index++;
    },
  };
}

function changeProject() {
  const selections = document.querySelectorAll("select.project-select");

  selections.forEach((select) => {
    select.addEventListener("change", (e) => {
      const selectedTodo = e.target.closest(".new-todo");
      const selectionText = e.target.value;
      const projectIndex = newProjectArray.indexOf(selectionText);
      const projectText = newProjectArray[projectIndex];

      if (selectionText === projectText) {
        selectedTodo.style.display = "none";
        const className = projectText.replace(/\s+/g, "-");

        const existingClasses = Array.from(selectedTodo.classList);
        existingClasses.forEach((cls) => {
          if (cls.startsWith("project-")) {
            selectedTodo.classList.remove(cls);
          }
        });
        selectedTodo.classList.add(`project-${className}`);

        if (!selectedProjects.includes(projectText)) {
          selectedProjects.push(projectText);
        }
      }
    });
  });
}
