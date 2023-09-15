"use strict";

const container = document.querySelector(".main-container");
container.setAttribute(
  "style",
  `display: flex;
box-sizing: border-box;
width: 500px;
height: 500px;
flex-direction: column; 
 border: 3px solid black;
 border-radius: 8px`
);

var gridSize = 20;
function getdata() {
  const pxData = document.getElementById("textbox-data").value;
  const newPxData = pxData.slice(0, 2);
  if (pxData == []) {
    alert("Nothing Inserted");
  } else {
    //alert(newPxData);
    gridSize = Number(newPxData);
    document.getElementById("textbox-data").value = null;
    return gridSize;
  }
}

function getDataKeyboard(event) {
  const keyData = document.getElementById("textbox-data").value;
  const newKeyData = keyData.slice(0, 2);
  if (event.keyCode === 13) {
    if (keyData == []) {
      alert("Nothing Inserted");
    } else {
      //alert(newKeyData);
      gridSize = Number(newKeyData);
      alert(gridSize);
      document.getElementById("textbox-data").value = null;
      return gridSize;
    }
  }
}

for (let i = 0; i < gridSize; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  // row.classList.add('drawPad');
  row.setAttribute("style", "flex: 1; display: flex; flex-direction: row;  "); //border: 1px solid black;
  container.appendChild(row);

  for (let j = 0; j < gridSize; j++) {
    const column = document.createElement("div");
    column.classList.add("column");
    //   column.classList.add('drawPad');
    column.addEventListener("mouseover", draw);
    //   column.setAttribute('onmouseover', 'this.style.backgroundColor= "darkblue"' );
    column.setAttribute("style", "flex: 1; ");
    row.appendChild(column);
  }
}
let clickFlag;
function draw() {
  this.style.backgroundColor = "#606C5D";
}

const buttons = document.querySelector(".buttons");
const eraseBtn = document.createElement("button");
eraseBtn.addEventListener("click", clearDiv);
eraseBtn.textContent = "Erase";
buttons.appendChild(eraseBtn);
eraseBtn.setAttribute("class", "rsBtn");

function clearDiv() {
  let clearedDiv = document.querySelector(".column");

  clearedDiv.addEventListener("click", function (cleared) {
    cleared.style.backgroundColor = "white";
  });
}

const resetButton = document.createElement("button");
resetButton.setAttribute("class", "rsBtn");
resetButton.textContent = "Reset";
resetButton.setAttribute("onclick", "resetDivColor()");
buttons.appendChild(resetButton);

function resetDivColor() {
  let divs = document.querySelectorAll(".column");
  divs.forEach(function (div) {
    div.style.backgroundColor = "white";
  });
}
const increasePxDiv = document.createElement("div");
increasePxDiv.setAttribute("class", "divNmbr");
buttons.appendChild(increasePxDiv);

const pxTextbox = document.querySelector(".divNmbr");
const pxInstr = document.createElement("p");
pxInstr.textContent = "Enter Grid number:";
pxInstr.setAttribute(
  "style",
  `margin-top: 20px;
 margin-bottom: 0;
 color: darkred;
 font-size: .8rem;`
);
pxTextbox.appendChild(pxInstr);

const pxText = document.createElement("input");
pxText.setAttribute("type", "textbox");
pxText.setAttribute("class", " rsBtn");
pxText.addEventListener("keypress", getDataKeyboard);
pxText.setAttribute("id", "textbox-data");
pxText.setAttribute("placeholder", " 16 SQ ");
pxText.setAttribute(
  "style",
  `
 background-color: white;
  margin-top: 1px; 
  margin-bottom: 0px;
  color: black;
  font-size: .7rem;`
);
pxTextbox.appendChild(pxText);

const pxSubmit = document.createElement("button");
pxSubmit.textContent = "Submit";
pxSubmit.setAttribute("class", "rsBtn");
pxSubmit.setAttribute("style", "margin-top: 5px;");
pxSubmit.addEventListener("click", getdata);
pxTextbox.appendChild(pxSubmit);
