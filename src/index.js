import "./styles.css";
import { addProject, newProjectArray } from "./project-dom";
import {
  displayForm,
  closeForm,
  submitForm,
  completeTask,
  deleteEditTask,
} from "./to-do-dom";
import { todoFactory } from "./to-do";

const clear = document.createElement("button");
clear.addEventListener("click", (e) => {
  localStorage.clear();
  location.reload();
});
document.body.append(clear);

addProject();
displayForm();
closeForm();
completeTask();
deleteEditTask();

const todos = [];

submitForm((formProps) => {
  const { title, dueDate, priority } = formProps;
  const newTodo = todoFactory(title, dueDate, priority);

  displayTodo(newTodo);
  saveToLocalStorage(formProps);
});

function saveToLocalStorage(formProps) {
  const existingData = JSON.parse(localStorage.getItem("formProps")) || [];

  existingData.push(formProps);

  localStorage.setItem("formProps", JSON.stringify(existingData));
}

const savedData = JSON.parse(localStorage.getItem("formProps"));
if (savedData) {
  savedData.forEach((item) => {
    const { title, dueDate, priority } = item;
    const newTodo = todoFactory(title, dueDate, priority);

    displayTodo(newTodo);
  });
}

function displayTodo(todoInstance) {
  todoInstance.displayCheckbox();
  todoInstance.displayTitle();
  todoInstance.displayDate();
  todoInstance.displayPriority();
  todoInstance.displayDelete();
  todoInstance.displayEdit();
  todoInstance.selectProject();
  todoInstance.displayDescription();
}
