'use strict'

const container = document.querySelector('.main-container');
container.setAttribute('style', 
`display: flex;
box-sizing: border-box;
width: 500px;
height: 500px;
flex-direction: column; 
border: .2px solid black;`);
const gridSize = 20;

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('drawPad');

    row.setAttribute('style', 'flex: 1; display: flex; flex-direction: row;  border: 1px solid black;');
    container.appendChild(row);
  
    for (let j = 0; j < gridSize; j++) {
      const column = document.createElement('div');
      column.classList.add('column');
      column.classList.add('drawPad');
      column.setAttribute('style', 'flex: 1; border: 1px solid red;');
      row.appendChild(column);
    }
  }
  const clickedDiv = document.querySelectorAll('.drawPad');