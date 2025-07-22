'use strict'

const GRID_ROWS = 16;
const GRID_COLS = 16;

const divGrid = document.querySelector('#div-grid');


function build_new_grid(container) {

    let new_row = undefined;
    let new_item = undefined;

    for (let cols=0; cols<GRID_COLS; cols++) {
        // Div acting as row container
        new_row = document.createElement('div');
        new_row.classList.add('grid-rows');
        container.appendChild(new_row);

        // Populate new row with further child divs
        for (let rows=0; rows<GRID_ROWS; rows++) {
            new_item = document.createElement('div');
            new_item.classList.add('grid-items');
            new_row.appendChild(new_item);
        }
    }
}

/* MAIN 
*/
{
    build_new_grid(divGrid);
}