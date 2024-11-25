const square = document.createElement("div");
square.className = "square";

for (let i = 0; i < 256; i++) {
    //square.innerText = i;
    document.getElementById("grid-container").appendChild(square.cloneNode(true)); 
}