const gridinput = document.querySelector('input');
const rgbbtn = document.querySelector('#rgbbtn');
const blackbtn = document.querySelector('#blackbtn');
const shadebtn = document.querySelector('#shadebtn');
const startbtn = document.querySelector('#startbtn');
const resetbtn = document.querySelector('#resetbtn');

const artboard = document.querySelector('#artboard');

let arrColumn = [];
let arrRow = [];

let startart = () => {
    for (let i=0,j=0; i<gridinput.value; i++){

        arrColumn[i] = document.createElement('div');
        artboard.appendChild(arrColumn[i]);
        arrColumn[i].setAttribute("style", "flex: 1; display: flex; flex-direction: column");

        for (j=0; j<gridinput.value; j++){
        arrRow[j] = document.createElement('div');
        arrColumn[i].appendChild(arrRow[j]);
        arrRow[j].setAttribute("style", "flex: 1;");
        }
    }






}

startbtn.addEventListener("click", startart)