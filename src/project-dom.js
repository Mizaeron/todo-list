import { selectedProjects } from "./to-do";
import trash from "./trash-2.svg";
export const newProjectArray = [];

export function addProject() {
    const newProjectContainer = document.querySelector(".new-projects");
    const newProjectBtn = document.querySelector(".project-btn");
    const newProjectInput = document.getElementById("new-project");

    newProjectContainer.addEventListener("click", (e) => {
        const projectEl = e.target.closest(".new-project");
        if(!projectEl) return;
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
    const allElements = document.querySelectorAll(".new-todo");

    allElements.forEach((element) => {
        element.style.display = "none";
    })

    console.log("Selected projects array:", selectedProjects);
    console.log(`selected project array: ${selectedProjects}`);
    console.log("New Project Array: ", newProjectArray);
    console.log(todoName);

    if (todoIndex !== -1) {
        const todoNameFixed = todoName.replace(/\s+/g, "-");
        const classElements = document.getElementsByClassName(`project-${todoNameFixed}`);
        Array.from(classElements).forEach((element) => {
            element.style.display = "flex";
        })
    }
    if (todoName === undefined) console.log("kek");

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

// export function defaultProject() {

// const inbox = document.querySelector(".default-project");
// const trashImage = document.createElement("img");
// trashImage.src = trash;
// inbox.append(trashImage);

// inbox.addEventListener("mouseover", (e) => {
//     trashImage.style.display = "block";
// })

// inbox.addEventListener("mouseout", (e) => {
//     trashImage.style.display = "none";
// })

// }
