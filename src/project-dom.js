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