export function displayForm() {
  const formButton = document.querySelector(".todo-button");
  const formContainer = document.querySelector(".form-container");
  const container = document.querySelector(".container");

  formButton.addEventListener("click", (e) => {
    e.stopPropagation();
    container.style.backgroundColor = "rgba(236, 156, 6, 0.5)";
    formContainer.style.display = "flex";
  });
}

export function closeForm() {
  const container = document.querySelector(".container");
  const formContainer = document.querySelector(".form-container");

  container.addEventListener("click", (e) => {
    if (formContainer.style.display === "flex") {
      formContainer.style.display = "none";
      container.style.backgroundColor = "";
    }
  });

  formContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });
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
  });
}

export function completeTask() {
  const todos = document.querySelector(".to-do-list");

  todos.addEventListener("change", (e) => {
    const parentDiv = e.target.closest("div");
    if (
      e.target.tagName === "INPUT" &&
      e.target.type === "checkbox" &&
      e.target.checked
    ) {
      parentDiv.style.textDecoration = "line-through";
    } else {
      parentDiv.style.textDecoration = "none";
    }
  });
}

export function deleteEditTask() {
  const toDoList = document.querySelector(".to-do-list");

  toDoList.addEventListener("click", (e) => {
    const delBtn = e.target.closest(".delete");
    if (delBtn) {
      const parentDiv = delBtn.closest("div");
      if (parentDiv) parentDiv.remove();
      return;
    }

    const editBtn = e.target.closest(".edit");
    if (editBtn) {
      const itemDiv = editBtn.closest("div");
      const desc = itemDiv && itemDiv.querySelector(".description");
      if (!desc) return;
      desc.style.display = desc.style.display === "none" ? "flex" : "none";
      return;
    }

    const descriptionDivs = document.querySelectorAll(".editDescr");
    if (descriptionDivs.length > 0) {
      descriptionDivs.forEach((descriptionDiv) => {
        makeEditable(descriptionDiv);
      });
    }
  });
}

function makeEditable(descriptionDiv) {
  const currentText = descriptionDiv.textContent;
  const input = document.createElement("textarea");
  input.value = currentText;
  descriptionDiv.innerHTML = "";
  descriptionDiv.appendChild(input);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      descriptionDiv.textContent = input.value;
    }
  });

  input.focus();
}
