let grid = document.getElementById('grid');
let resizeValue = document.getElementById('size-input');
let submit = document.getElementById('submit');
let clearButton = document.getElementById('clear-grid')

console.log(submit)

let mouseDown = false;

document.body.onmousedown = () => {
    (mouseDown = true);
}
document.body.onmouseup = () => {
    (mouseDown = false);
}
function coloring(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    }
    console.log(e.target)
    e.target.setAttribute('class', 'pressed')
}

function createGrid() {
        grid.style.gridTemplateColumns = `repeat(${resizeValue.value}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${resizeValue.value}, 1fr)`
        for (let i = 0; i < (resizeValue.value * resizeValue.value); i++) {
        let gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'grid-cell');
        gridCell.setAttribute('class', 'unpressed')
        gridCell.addEventListener('mouseover', coloring);
        grid.appendChild(gridCell);
        };
    }

function clearGrid() {
    let gridCell = document.querySelectorAll('.pressed');
    Object.values(gridCell).map((item) => 
    {item.removeAttribute('pressed');
    item.setAttribute('class', 'unpressed')});
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