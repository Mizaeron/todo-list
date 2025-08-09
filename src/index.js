import "./styles.css";
import { addProject, defaultProject} from "./project-dom";
import { deleteDefaultProject } from "./project";
import { displayForm, closeForm, submitForm } from "./to-do-dom";
import { todoFactory } from "./to-do";

addProject();
defaultProject();
deleteDefaultProject();
displayForm();
closeForm();

submitForm((formProps) => {
    const { title, dueDate, priority } = formProps;
    const newTodo = todoFactory(title, dueDate, priority);
    newTodo.displayCheckbox();
    newTodo.displayTitle();
    newTodo.displayDate();
    newTodo.displayPriority();
    newTodo.displayDelete();
    newTodo.displayEdit();
})