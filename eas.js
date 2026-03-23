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
let pattern;
let opacity = 0;
let btnactive = false;

// declaring function to create grid
let startart = () => {

    if(gridinput.value && btnactive == true){
        startbtn.style.backgroundColor = 'white';
        for (let i=0; i<gridinput.value; i++){
            arrColumn[i] = document.createElement('div');
            artboard.appendChild(arrColumn[i]);
            arrColumn[i].setAttribute("style", "flex: 1; display: flex; flex-direction: column");

            for (let j=0; j<gridinput.value; j++){
            arrRow[j] = document.createElement('div');
            arrColumn[i].appendChild(arrRow[j]);
            arrRow[j].setAttribute("style", "flex: 1;");
            arrRow[j].addEventListener("mouseenter", (event) => {

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

                event.currentTarget.style.backgroundColor = pattern;
                console.log('Mouse hovered over me')
               });
            };
        };    
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
        rgbbtn.style.backgroundColor = 'white';
        blackbtn.style.backgroundColor = '';
        shadebtn.style.backgroundColor = '';
        } else if (blackbtn.classList.contains('active')){
        blackbtn.style.backgroundColor = 'white';
        rgbbtn.style.backgroundColor = '';
        shadebtn.style.backgroundColor = '';          
        } else if (shadebtn.classList.contains('active')){
        shadebtn.style.backgroundColor = 'white';
        blackbtn.style.backgroundColor = '';
        rgbbtn.style.backgroundColor = '';
    }
}

startbtn.addEventListener("click", startart);

rgbbtn.addEventListener("click", () => {
    btnactive = true;
    rgbbtn.classList.add('active')
    blackbtn.classList.remove('active');
    shadebtn.classList.remove('active');
    changeActiveButtonColor();
});
blackbtn.addEventListener("click", () => {
    btnactive = true;
    rgbbtn.classList.remove('active')
    blackbtn.classList.add('active');
    shadebtn.classList.remove('active');
    changeActiveButtonColor();
});
shadebtn.addEventListener("click", () => {
    btnactive = true;
    rgbbtn.classList.remove('active')
    blackbtn.classList.remove('active');
    shadebtn.classList.add('active');
    opacity = 0;
    changeActiveButtonColor();
});
resetbtn.addEventListener("click", () => {
    opacity = 0;
    btnactive = false;
    removeButtonActiveStates();
    startbtn.style.backgroundColor = '';
    for (let i=0; i<gridinput.value; i++){
            artboard.removeChild(arrColumn[i]);
    }
    gridinput.value = ""; 
})