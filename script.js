const square = document.createElement("div");
square.className = "square";

const size = document.getElementById("slider");
const showSize = document.getElementById("sizeText");

function generateGrid(size) {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = '';
    for (let i = 0; i < size*size; i++) {
        let squareSize = 480 / size;
        let clonedSquare = square.cloneNode(true);
        clonedSquare.style.width = squareSize + "px";
        clonedSquare.style.height = squareSize + "px";
        gridContainer.appendChild(clonedSquare);
    }

    let clonedSquares = document.querySelectorAll(".square");
    clonedSquares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
        square.style.backgroundColor = "white";
    });
}

let defaultSize = 16;
generateGrid(defaultSize);

slider.addEventListener("input", () => {
    generateGrid(size.value);
    showSize.textContent = "Grid size: " + size.value + "x" + size.value;
});