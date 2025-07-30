import trash from "./trash-2.svg";

export function displayTrash(name) {
    const trashImage = document.createElement("img");
    trashImage.src = trash;
    name.addEventListener("mouseover", (e) => {
    trashImage.style.display = "block";
})

    name.addEventListener("mouseout", (e) => {
    trashImage.style.display = "none";
})
}
