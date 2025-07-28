import "./styles.css";
import {compareAsc, format} from "date-fns";
import { addProject } from "./project-dom";

format(new Date(1, 11, 2014), "dd-MM-yyyy");

addProject();
