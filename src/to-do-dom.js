export function displayForm() {
    const formButton = document.querySelector(".todo-button");
    const formContainer = document.querySelector(".form-container");
    const container = document.querySelector(".container");

    
        formButton.addEventListener("click", (e) => {
        e.stopPropagation();
        container.style.backgroundColor = "rgba(236, 156, 6, 0.5)"
        formContainer.style.display = "flex";
    })

}

export function closeForm() {
    const container = document.querySelector(".container");
    const formContainer = document.querySelector(".form-container");


    container.addEventListener("click", (e) => {
        if(formContainer.style.display === "flex") {
            formContainer.style.display = "none";
            container.style.backgroundColor = "";
        }
    })

    formContainer.addEventListener("click", (e) => {
        e.stopPropagation();
    })
}

export function submitForm(callback) {
    const myForm = document.getElementById("myForm");
    const formContainer = document.querySelector(".form-container");
    const container = document.querySelector(".container");

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        callback(formProps);
        formContainer.style.display = "none";
        container.style.backgroundColor = "";
        myForm.reset();
    })
}

export function completeTask() {

    const todos = document.querySelector(".to-do-list");

    todos.addEventListener("change", e => {
        const parentDiv = e.target.closest("div");
        if(e.target.tagName === "INPUT" && e.target.type === "checkbox" && e.target.checked) {
            parentDiv.style.textDecoration = "line-through";
        } else {
            parentDiv.style.textDecoration = "none";
        }
    })
}
