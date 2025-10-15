import "./styles.css";
import { addProject, newProjectArray } from "./project-dom";
import { displayForm, closeForm, submitForm, completeTask, deleteEditTask } from "./to-do-dom";
import { todoFactory } from "./to-do";

addProject();
displayForm();
closeForm();
completeTask();
deleteEditTask();

const todos = [];

submitForm((formProps) => {
    const { title, dueDate, priority } = formProps;
    const newTodo = todoFactory(title, dueDate, priority, description);
    
    newTodo.displayCheckbox();
    newTodo.displayTitle();
    newTodo.displayDate();
    newTodo.displayPriority();
    newTodo.displayDelete();
    newTodo.displayEdit();
    newTodo.selectProject();
    newTodo.displayDescription();

    todos.push(formProps);
})

document.querySelector(".console").addEventListener("click", () => {
    console.log(todos);
    console.log(newProjectArray, index);
})

