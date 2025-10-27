import { selectedProjects } from "./to-do";
import trash from "./trash-2.svg";
export const newProjectArray = [];

export function addProject() {
  const newProjectContainer = document.querySelector(".new-projects");
  const newProjectBtn = document.querySelector(".project-btn");
  const newProjectInput = document.getElementById("new-project");

  newProjectContainer.addEventListener("click", (e) => {
    const projectEl = e.target.closest(".new-project");
    const projectDefault = e.target.closest(".default-project");
    if (!projectEl && !projectDefault) return;
    if (e.target && e.target.parentElement.classList.contains("new-project")) {
      const textContent = projectEl.innerText.trim();

      const index = newProjectArray.indexOf(textContent);
      if (index !== -1) {
        newProjectArray.splice(index, 1);

        projectEl.remove();

        const selectMenus = document.querySelectorAll("select");

        selectMenus.forEach((selectMenu) => {
          const optionList = Array.from(selectMenu.options);

          optionList.forEach((option) => {
            if (option.textContent.trim() === textContent) {
              selectMenu.remove(optionList.indexOf(option));
            }
          });
        });
      }
    }

    const projectName = e.target.innerText;
    const todoIndex = selectedProjects.indexOf(projectName);
    const todoName = selectedProjects[todoIndex];
    const allTodo = document.querySelectorAll(".new-todo");
    const allTodoArray = Array.from(allTodo);
    const inboxTodos = allTodoArray.filter((todo) => {
      return !Array.from(todo.classList).some((className) =>
        className.startsWith("project-"),
      );
    });

    if (todoName === undefined) {
      allTodoArray.forEach((todo) => (todo.style.display = "none"));
      inboxTodos.forEach((todo) => (todo.style.display = "flex"));
    }

    if (todoIndex !== -1) {
      allTodoArray.forEach((todo) => (todo.style.display = "none"));
      const todoNameFixed = todoName.replace(/\s+/g, "-");
      const classElements = document.getElementsByClassName(
        `project-${todoNameFixed}`,
      );
      Array.from(classElements).forEach((element) => {
        element.style.display = "flex";
        console.log(allTodoArray);
        console.log(classElements);
      });
      inboxTodos.forEach((todo) => (todo.style.display = "none"));
    }
  });
  newProjectBtn.addEventListener("click", (e) => {
    const projectName = newProjectInput.value;

    if (projectName.length < 2) {
      alert("Project name must have at least 2 characters!");
      e.preventDefault();
    } else {
      e.preventDefault();
      createProjectElement(newProjectContainer, projectName);
      newProjectInput.value = "";
      newProjectArray.push(projectName);
      saveToLocalStorage(projectName);
    }
  });
}

function saveToLocalStorage(projectName) {
  let projects = JSON.parse(localStorage.getItem("projects") || "[]");
  projects.push(projectName);
  localStorage.setItem("projects", JSON.stringify(projects));
}

document.addEventListener("DOMContentLoaded", function () {
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");

  projects.forEach((project) => {
    createProjectElement(document.querySelector(".new-projects"), project);
  });
});

function removeProject(projectToRemove) {
  let projects = JSON.parse(localStorage.getItem("projects") || "[]");
  projects = projects.filter((project) => project !== projectToRemove);
  localStorage.setItem("projects", JSON.stringify(projects));
}

function createProjectElement(container, projectName) {
  const newProjectDiv = document.createElement("div");
  newProjectDiv.classList.add("new-project");
  newProjectDiv.innerText = projectName;

  const trashImage = document.createElement("img");
  trashImage.src = trash;

  newProjectDiv.append(trashImage);
  container.append(newProjectDiv);

  newProjectDiv.addEventListener("mouseover", () => {
    trashImage.style.display = "block";
  });

  newProjectDiv.addEventListener("mouseout", () => {
    trashImage.style.display = "none";
  });

  trashImage.addEventListener("click", () => {
    removeProject(projectName);
    newProjectDiv.remove();
  });

  const option = document.createElement("option");
  option.innerText = newProjectDiv.innerText;
  document
    .querySelectorAll("select.project-select")
    .forEach((sel) => sel.append(option.cloneNode(true)));
}
