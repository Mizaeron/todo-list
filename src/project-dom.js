import trash from "./trash-2.svg";

export function addProject() {
    const newProjectContainer = document.querySelector(".new-projects");
    const newProjectBtn = document.querySelector(".project-btn");
    const newProjectInput = document.getElementById("new-project");

    newProjectBtn.addEventListener("click", (e) => {
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

        
    })

    
}

export function defaultProject() {

const inbox = document.querySelector(".default-project");
const trashImage = document.createElement("img");
trashImage.src = trash;
inbox.append(trashImage);

inbox.addEventListener("mouseover", (e) => {
    trashImage.style.display = "block";
})

inbox.addEventListener("mouseout", (e) => {
    trashImage.style.display = "none";
})

}



