'use strict'

const container = document.querySelector('.main-container');
container.setAttribute('style', 
`display: flex;
box-sizing: border-box;
width: 500px;
height: 500px;
flex-direction: column; 
 border: 3px solid black;
 border-radius: 8px`);
const gridSize = 20;

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    // row.classList.add('drawPad');
    row.setAttribute('style', 'flex: 1; display: flex; flex-direction: row;  ');//border: 1px solid black;
    container.appendChild(row);
  
    for (let j = 0; j < gridSize; j++) {
      const column = document.createElement('div');
      column.classList.add('column');
    //   column.classList.add('drawPad');
    column.addEventListener('mouseover', draw);
    //   column.setAttribute('onmouseover', 'this.style.backgroundColor= "darkblue"' ); 
      column.setAttribute('style', 'flex: 1; ');
      row.appendChild(column);
    }
  }
  let clickFlag;
function draw(){
    this.style.backgroundColor = '#606C5D'; 
    
}
 
const buttons = document.querySelector('.buttons');
const eraseBtn = document.createElement('button');
 eraseBtn.addEventListener('click', clearDiv);
 eraseBtn.textContent = "Erase" ;
 buttons.appendChild(eraseBtn);
 eraseBtn.setAttribute('class', 'rsBtn');
 

 function clearDiv() {
    
    let clearedDiv = document.querySelector('.column');
  
    clearedDiv.addEventListener('click', function(cleared){
    
    cleared.style.backgroundColor = 'white';
    });
    
 }


  const resetButton = document.createElement('button');
  resetButton.setAttribute('class', 'rsBtn');
  resetButton.textContent = 'Reset';
  resetButton.setAttribute('onclick', 'resetDivColor()');
  buttons.appendChild(resetButton);

  function resetDivColor() {
    let divs = document.querySelectorAll('.column');
    divs.forEach(function(div){
        div.style.backgroundColor= 'white';
    })
  }
 
