export function addProject() {
    const newProjectContainer = document.querySelector(".new-projects");
    const newProjectBtn = document.querySelector(".project-btn");
    const newProjectInput = document.getElementById("new-project");

    newProjectBtn.addEventListener("click", (e) => {
        const newProjectDiv = document.createElement("div");

        newProjectDiv.innerText = `${newProjectInput.value}`;
        
        newProjectContainer.append(newProjectDiv);
        newProjectInput.value = "";
    })

    
}

const inbox = document.querySelector(".default-project");

import trash from "./trash-2.svg";

const trashImage = document.createElement("img");
trashImage.src = trash;

inbox.append(trashImage);

inbox.addEventListener("mouseover", (e) => {
    trashImage.style.display = "block";
})

inbox.addEventListener("mouseout", (e) => {
    trashImage.style.display = "none";
})