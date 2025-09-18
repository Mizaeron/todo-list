import "./styles.css";
import { addProject, newProjectArray } from "./project-dom";
import { displayForm, closeForm, submitForm, completeTask } from "./to-do-dom";
import { todoFactory } from "./to-do";

addProject();
displayForm();
closeForm();
completeTask();

const todos = [];

submitForm((formProps) => {
    const { title, dueDate, priority } = formProps;
    const newTodo = todoFactory(title, dueDate, priority);
    
    newTodo.displayCheckbox();
    newTodo.displayTitle();
    newTodo.displayDate();
    newTodo.displayPriority();
    newTodo.displayDelete();
    newTodo.displayEdit();
    newTodo.selectProject();

    todos.push(formProps);
})

document.querySelector(".console").addEventListener("click", () => {
    console.log(todos);
    console.log(newProjectArray);
})

