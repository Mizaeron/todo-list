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

export function submitForm(call) {
    const myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        call(formProps);
    })
}

