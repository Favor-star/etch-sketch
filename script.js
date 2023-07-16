'use strict';

//inupt buton creations
let buttonsDiv = document.querySelector('.buttons2');
let resizeBox = document.createElement('input');
resizeBox.setAttribute('id', 'inputBox');
resizeBox.setAttribute('placeholder', '16-100 SQ');
resizeBox.setAttribute('title', 'input');
resizeBox.setAttribute('type', 'textbox');
buttonsDiv.appendChild(resizeBox);

//Submit button creation
let submitBtn = document.createElement('button');
submitBtn.addEventListener('click', submitData);
submitBtn.setAttribute('id', 'submitBtn');
submitBtn.setAttribute('type', 'submit');
submitBtn.textContent = 'Submit';
buttonsDiv.appendChild(submitBtn);

//function to clear div so as not to add divs to other after clearing.
let mainContainer2 = document.querySelector('.main-container2');
function clearGrid() {
    while (mainContainer2.firstChild) {
        mainContainer2.removeChild(mainContainer2.firstChild);
    }
}
// function to create divs after taking certian size of divs 
function container(size) {
 clearGrid();
    for (let i = 0; i < size; i++) {
        let rows = document.createElement('div');
        rows.setAttribute('class', 'rows');
        let mainContainer2 = document.querySelector('.main-container2');
        mainContainer2.appendChild(rows);

        for (let j = 0; j < size; j++) {
            let columns = document.createElement('div');
            columns.setAttribute('class', 'columns');
            columns.addEventListener('mouseover', drawColor);
            rows.appendChild(columns);
        }
    }
}

container(17);
//function to get user's desired div numbers
function getData() {
    const userInput = document.getElementById('inputBox').value;
    return userInput;
}
//function to change div number after taking user's desired divs
function submitData() {
    let resized = getData();
    if (resized >= 16 && resized <= 100) {
        container(resized);
        alert(resized);
    } else {
        alert(resized);
    }
}

//button for applying black colors
let blackButton = document.createElement('button');
blackButton.setAttribute('class', 'color black');
blackButton.addEventListener('click', function() {
    applyColor('black');
});
blackButton.textContent = 'Black';
buttonsDiv.appendChild(blackButton);

//Blue Button
let blueButton = document.createElement('button');
blueButton.setAttribute('class', 'color blue');
blueButton.addEventListener('click', function(){
    applyColor('blue');
})
blueButton.textContent = 'Blue';
buttonsDiv.appendChild(blueButton);

//Red Button
let redButton = document.createElement('button');
redButton.setAttribute('class', 'color red');
redButton.addEventListener('click', function(){
    applyColor('red');
})
redButton.textContent = 'Red';
buttonsDiv.appendChild(redButton);

//Random Color
let randomButton = document.createElement('button');
randomButton.setAttribute('class', 'color random');
randomButton.addEventListener('click', function(){
    applyColor(`rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)} , ${Math.floor(Math.random() *255)})`);
})
randomButton.textContent = 'Random';
buttonsDiv.appendChild(randomButton);


let newColor;

function applyColor(choice) {
  newColor = choice;
}

// function to apply certain colors
function drawColor() {
    this.style.backgroundColor = newColor;
  
}