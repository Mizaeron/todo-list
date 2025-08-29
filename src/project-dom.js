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
        if(!projectEl && !projectDefault) return;
    if (e.target && e.target.parentElement.classList.contains("new-project")) {
        const textContent = projectEl.innerText.trim();
        
        const index = newProjectArray.indexOf(textContent);
        if (index !== -1) {
            newProjectArray.splice(index, 1);

            projectEl.remove();

            const selectMenus = document.querySelectorAll("select");

            selectMenus.forEach(selectMenu => {
                const optionList = Array.from(selectMenu.options);

                optionList.forEach(option => {
                    if (option.textContent.trim() === textContent) {
                        selectMenu.remove(optionList.indexOf(option));
                    }
                })
            })
        }
    }

    const projectName = e.target.innerText;
    const todoIndex = selectedProjects.indexOf(projectName);
    const todoName = selectedProjects[todoIndex];
    const allTodo = document.querySelectorAll(".new-todo");
    const allTodoArray = Array.from(allTodo);
    const inboxTodos = allTodoArray.filter(todo => {
        return !Array.from(todo.classList).some(className => className.startsWith("project-"));
    })

    if (todoName === undefined) {
        allTodoArray.forEach(todo => todo.style.display = "none");
        inboxTodos.forEach(todo => todo.style.display = "flex");
    }

    if (todoIndex !== -1) {
        allTodoArray.forEach(todo => todo.style.display = "none");
        const todoNameFixed = todoName.replace(/\s+/g, "-");
        const classElements = document.getElementsByClassName(`project-${todoNameFixed}`);
        Array.from(classElements).forEach((element) => {
            element.style.display = "flex";
            console.log(allTodoArray);
            console.log(classElements);
        })
        inboxTodos.forEach(todo => todo.style.display = "none");
    }
})

    newProjectBtn.addEventListener("click", (e) => {

        if (newProjectInput.value.length < 2) {
            alert("project name must have at least 2 characters!");
            e.preventDefault();
        } else {
        e.preventDefault();
        const newProjectDiv = document.createElement("div");
        newProjectDiv.classList.add("new-project");

        newProjectDiv.innerText = `${newProjectInput.value}`;

        const trashImage = document.createElement("img");
        trashImage.src = trash;
        
        newProjectContainer.append(newProjectDiv);
        newProjectDiv.append(trashImage);
        newProjectInput.value = "";

        newProjectDiv.addEventListener("mouseover", (e) => {
        trashImage.style.display = "block";
})

        newProjectDiv.addEventListener("mouseout", (e) => {
        trashImage.style.display = "none";
})
         newProjectArray.push(newProjectDiv.innerText);
         
         const option = document.createElement("option");
         option.innerText = newProjectDiv.innerText;
         document.querySelectorAll("select.project-select").forEach(sel => sel.append(option.cloneNode(true)));

}})

    
}
