const container = document.querySelector("#container");
const containerSize = Math.min(window.innerWidth, window.innerHeight) * 0.9;
const gridSize = 16;
const boxSize = containerSize / gridSize;

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.margin = "0 auto"
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.boxSizing = "border-box";

for (let i = 0; i < (gridSize * gridSize); i++) {
    container.appendChild(div.cloneNode(true));
}





