const select = document.querySelector('.select');
const blackbtn = document.querySelector('.black');
const random = document.querySelector('.random');
const reset = document.querySelector('.reset');
const container = document.querySelector('.container');
let color = "black";

function changeColor(e) {
    if (color === "random") {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        e.target.style.backgroundColor = color;
    }
}

blackbtn.addEventListener("click", () => {
    color = "black";
});

random.addEventListener("click", () => {
    color = "random";
});

reset.addEventListener('click', () => {
    container.querySelectorAll('div').forEach(div => {
        div.style.backgroundColor = 'white';
    });
});

select.addEventListener('click', () => {
    let size = prompt("Enter the size of the grid (between 16 and 64):");
    size = parseInt(size);
    if (size >= 16 && size <= 64) {
        createGrid(size);
    } else {
        alert("Please enter a number between 16 and 64.");
    }
});

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
}

createGrid(16);
