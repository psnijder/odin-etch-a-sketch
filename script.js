const square = document.createElement("div");
square.className = "square";

for (let i = 0; i < 256; i++) {
    document.getElementById("grid-container").appendChild(square.cloneNode(true));
}

const clonedSquares = document.querySelectorAll(".square");

clonedSquares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    });
});