export function displayForm() {
    const formButton = document.querySelector(".todo-button");
    const formContainer = document.querySelector(".form-container");
    const container = document.querySelector(".container");

    formButton.addEventListener("click", (e) => {
        container.style.backgroundColor = "rgba(236, 156, 6, 0.5)"
        formContainer.style.cssText = "display: flex";     
    })
}