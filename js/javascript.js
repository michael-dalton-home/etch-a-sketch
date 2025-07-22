'use strict'

/* Constants */
const GRID_ROWS   = 16;
const GRID_BORDER = 2;
const GRID_WIDTH  = 800;

/* Grid parent element */
const divGrid = document.querySelector('#div-grid');

/* Number of elements per side of the grid */
let gridSize = GRID_ROWS;


/* Builds the grid using current gris width /height but within
 * a set grid width container.
*/
function build_new_grid(container, gSize = GRID_ROWS) {

    let new_row = undefined;
    let new_item = undefined;

    let itemSize = Math.floor((GRID_WIDTH / gSize) - GRID_BORDER);

    container.innerHTML = '';

    for (let cols=0; cols<gSize; cols++) {
        // Div acting as row container
        new_row = document.createElement('div');
        new_row.classList.add('grid-rows');
        container.appendChild(new_row);

        // Populate new row with further child divs
        for (let rows=0; rows<gSize; rows++) {
            new_item = document.createElement('div');
            new_item.classList.add('grid-items');
            new_item.style.width = `${itemSize}px`;
            new_item.style.height= `${itemSize}px`;
            new_row.appendChild(new_item);
        }
    }
}

/* Determines what happens when the mouse hovers over a grid item
*/
function setupHoverEffect() {
    divGrid.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grid-items')) {
            e.target.style.backgroundColor = 'rgb(56, 205, 254)';
        }
    });
}

/* Sets up handler for the 'Set Grid Size' button.
 * Prompts user for a new grid width/height and rebuilds the grid
*/
function setupGridSizeButton() {
    const button = document.querySelector('#set-grid-size');
    button.addEventListener('click', (e) => {
        let sz = window.prompt("Enter new grid size (max 100)", GRID_ROWS);
        if (!isNaN(sz) && sz <= 100) {
            build_new_grid(divGrid, sz);
        }
    });
}

/* MAIN 
*/
{
    build_new_grid(divGrid);
    setupHoverEffect();
    setupGridSizeButton();
}