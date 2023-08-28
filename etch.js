let container = document.getElementById('container')

function coloring(grid) {
    grid.setAttribute('class', 'pressed');
}

function createGrid() {
    for (let i = 0; i < 273; i++) {
    let gridCell = document.createElement('div');
    gridCell.setAttribute('class', 'grid-cell');
    gridCell.addEventListener('mousedown', () => {
        gridCell.addEventListener('mouseover', coloring(gridCell));
    });
    container.appendChild(gridCell);
}
}

createGrid();