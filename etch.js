
let currentColor = '#333333';
let grid = document.getElementById('grid');
let resizeValue = document.getElementById('size-input');
let submit = document.getElementById('submit');
let clearButton = document.getElementById('clear-grid');
let eraserButton = document.getElementById('eraser');
let markerButton = document.getElementById('marker');
let rainbowButton = document.getElementById('rainbow');
let colorPicker = document.getElementById('colorPicker')

resizeValue.value = 16; //default starting size of grid

let mouseDown = false;

document.body.onmousedown = () => {
    (mouseDown = true);
}
document.body.onmouseup = () => {
    (mouseDown = false);
}

let currentMode = 'marker'

rainbowButton.addEventListener('click', () => {
    currentMode = 'rainbow'
} )

eraserButton.addEventListener('click', () => {
    currentMode = 'eraser';
})

markerButton.addEventListener('click', () => {
    currentMode = 'marker';
})

colorPicker.oninput = (e) => {currentColor = e.target.value}

function coloring(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    }

    if (currentMode === 'rainbow') {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`

    } else if (currentMode === 'marker') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
}

function createGrid() {
        grid.style.gridTemplateColumns = `repeat(${resizeValue.value}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${resizeValue.value}, 1fr)`
        for (let i = 0; i < (resizeValue.value * resizeValue.value); i++) {
        let gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'grid-cell');
        gridCell.addEventListener('mouseover', coloring);
        gridCell.addEventListener('mousedown', coloring);
        grid.appendChild(gridCell);
        };
    }

function clearGrid() {
    let gridCell = document.querySelectorAll('div.grid-cell');
    Object.values(gridCell).map((item) => 
        {item.style.backgroundColor = 'white'});
    // {item.removeAttribute('pressed');
    // item.setAttribute('class', 'unpressed')});
}

function removeGrid() {
    grid.innerHTML = '';
}

clearButton.addEventListener('click', () => {
    clearGrid();
    console.log('button working')
})

submit.addEventListener('click', () => {
    removeGrid();
    createGrid();
    console.log(resizeValue.value);
})
//working createGrid
// function createGrid() {
//     for (let i = 0; i < 273; i++) {
//     let gridCell = document.createElement('div');
//     gridCell.setAttribute('class', 'grid-cell');
//     gridCell.addEventListener('mouseover', coloring);
//     grid.appendChild(gridCell);
//     };
// }

createGrid();