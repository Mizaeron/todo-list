const toDoList = document.querySelector(".to-do-list");
const div = document.createElement("div");
const span = document.createElement("span");
const displayDiv = document.createElement("div");

export function todoFactory(title) {
    return {
        title,
        display() {
            toDoList.append(div);
            div.append(span);
            span.append(displayDiv);
            displayDiv.innerText = "haaa";
        }
    }
}

let firstTitle = todoFactory("football");

firstTitle.display();

console.log(displayDiv)
