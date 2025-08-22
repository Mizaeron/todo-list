import "./styles.css";
import { addProject, defaultProject, newProjectArray } from "./project-dom";
import { deleteDefaultProject } from "./project";
import { displayForm, closeForm, submitForm } from "./to-do-dom";
import { todoFactory } from "./to-do";

addProject();
defaultProject();
deleteDefaultProject();
displayForm();
closeForm();

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