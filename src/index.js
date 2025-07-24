import "./styles.css";
import {compareAsc, format} from "date-fns";

format(new Date(2014, 1, 11), "yyyy-MM-dd");

const dates = [
    new Date(1995, 6, 2),
    new Date(2005, 3, 4),
    new Date(1991, 2, 3)
]

console.log(dates);