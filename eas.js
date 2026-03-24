// declaring objects to give reference to nodes 
const gridinput = document.querySelector('input');
const rgbbtn = document.querySelector('#rgbbtn');
const blackbtn = document.querySelector('#blackbtn');
const shadebtn = document.querySelector('#shadebtn');
const startbtn = document.querySelector('#startbtn');
const resetbtn = document.querySelector('#resetbtn');
const artboard = document.querySelector('#artboard');

// declaring global variables
let arrColumn = [];
let arrRow = [];
let opacity = 0;
let patternbtnactive = false;
let startbtnactive = false;

// start to draw function
function startart(){
    if(gridinput.value<100 && patternbtnactive == true && startbtnactive == false){
        startbtn.style.backgroundColor = 'yellow';
        makeGrid();
    } else if(gridinput.value<100 && patternbtnactive == true && startbtnactive == true) {
        alert('To start again please click Restart button')
    } else if(gridinput.value>=100){
        alert('Please enter grid size less than 100')
    } else {
        alert('To start drawing, please:\n1)Enter grid size.\n2)Select colour pattern.')
    }  
}

//function to remove 'active' class to avoid future conflict
let removeButtonActiveStates = () => {
    rgbbtn.classList.remove('active');
    shadebtn.classList.remove('active');
    blackbtn.classList.remove('active');
}

//function to change colour of active button
let changeActiveButtonColor = () => {
    if(rgbbtn.classList.contains('active')){
        rgbbtn.style.backgroundColor = 'yellow';
        blackbtn.style.backgroundColor = '';
        shadebtn.style.backgroundColor = '';
        } else if (blackbtn.classList.contains('active')){
        blackbtn.style.backgroundColor = 'yellow';
        rgbbtn.style.backgroundColor = '';
        shadebtn.style.backgroundColor = '';          
        } else if (shadebtn.classList.contains('active')){
        shadebtn.style.backgroundColor = 'yellow';
        blackbtn.style.backgroundColor = '';
        rgbbtn.style.backgroundColor = '';
    }
}

// event listeners for buttons
startbtn.addEventListener("click", () => {
    startart();
    startbtnactive = true;
});
rgbbtn.addEventListener("click", () => {
    patternbtnactive = true;
    rgbbtn.classList.add('active')
    blackbtn.classList.remove('active');
    shadebtn.classList.remove('active');
    changeActiveButtonColor();
});
blackbtn.addEventListener("click", () => {
    patternbtnactive = true;
    rgbbtn.classList.remove('active')
    blackbtn.classList.add('active');
    shadebtn.classList.remove('active');
    changeActiveButtonColor();
});
shadebtn.addEventListener("click", () => {
    patternbtnactive = true;
    rgbbtn.classList.remove('active')
    blackbtn.classList.remove('active');
    shadebtn.classList.add('active');
    opacity = 0;
    changeActiveButtonColor();
});
resetbtn.addEventListener("click", () => {
    opacity = 0;
    patternbtnactive = false;
    startbtnactive = false;
    removeButtonActiveStates();
    startbtn.style.backgroundColor = '';
    rgbbtn.style.backgroundColor = '';
    shadebtn.style.backgroundColor = '';
    blackbtn.style.backgroundColor = '';
    artboard.innerHTML = "";
    gridinput.value = ""; 
})

function patternSelection(){
    if(rgbbtn.classList.contains('active')){
                    let r = Math.floor(Math.random()*256);
                    let g = Math.floor(Math.random()*256);
                    let b = Math.floor(Math.random()*256);
                    pattern = 'rgb(' + r + ',' + g + ',' + b + ')';
                } else if (blackbtn.classList.contains('active')){
                    pattern = 'black';            
                } else if (shadebtn.classList.contains('active')){
                    let r = 0;
                    let g = 0;
                    let b = 0;
                    pattern = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
                    opacity = opacity + 0.1;
                }

                return pattern;
};

function makeGrid(){
    for (let i=0; i<gridinput.value; i++){
            arrColumn[i] = document.createElement('div');
            artboard.appendChild(arrColumn[i]);
            arrColumn[i].setAttribute("style", "flex: 1; display: flex; flex-direction: column");

            for (let j=0; j<gridinput.value; j++){
                arrRow[j] = document.createElement('div');
                arrColumn[i].appendChild(arrRow[j]);
                arrRow[j].setAttribute("style", "flex: 1;");
                arrRow[j].addEventListener("mouseenter", (event) => {
                event.currentTarget.style.backgroundColor = patternSelection();
               });
            };
    }
};    