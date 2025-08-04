import "./styles.css";
import {compareAsc, format} from "date-fns";
import { addProject, defaultProject} from "./project-dom";
import { deleteDefaultProject } from "./project";
import { displayForm } from "./to-do-dom";

format(new Date(1, 11, 2014), "dd-MM-yyyy");

addProject();
defaultProject();
deleteDefaultProject();
displayForm();