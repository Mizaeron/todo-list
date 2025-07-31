export function deleteDefaultProject() {
    const trashIcon = document.querySelector(".new-projects img");
    const inbox = document.querySelector(".default-project");
    const newProject = document.querySelectorAll(".new-project");

    trashIcon.addEventListener("click", (e) => {
        if(e.target.tagName == "IMG") {
            inbox.remove();
        }
    })

}

