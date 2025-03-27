const container = document.querySelector("#container");
const containerSize = Math.min(window.innerWidth, window.innerHeight) * 0.9;
let gridSize = 16;
const boxSize = containerSize / gridSize;

const button = document.createElement("button");
    button.textContent = "Resize board";
    button.style.display = "flex";
    button.style.justifySelf = "center";
    button.style.margin = "10px";
    button.addEventListener("click", () => {
        do {
            gridSize = parseInt(prompt("Grid size? Enter a whole number."), 10);
        } while (isNaN(gridSize) || gridSize <= 0);
    })
document.querySelector("body").insertBefore(button, container);

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.margin = "0 auto"
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;


for (let i = 0; i < (gridSize * gridSize); i++) {
    const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        div.style.boxSizing = "border-box";
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#4a46467c";
    });
    
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "gainsboro";
    });
}






