let newColor = "white";
let mouseClick = true;
const board = document.querySelector('.board');
const inputField = document.querySelector('#size-input');
 
function generateBoard(size){
    board.querySelectorAll('div').forEach(box => box.remove());
    const total = size * size;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i < total; i++){
        let cell = document.createElement('div');
        board.insertAdjacentElement('beforeend', cell);
        cell.addEventListener('mouseover', colorCells);
    }
    bColor(); 
 }

 function bColor(){
    const colButtons = document.querySelectorAll('.colors');
    colButtons.forEach((button) => {
        if(button.value === 'mixed'){
            button.style.border = `3px solid hsl(${Math.random()*360}, 100%, 50%)`;
            button.style.color = `hsl(${Math.random()*360}, 100%, 50%)`;
        } else {
            button.style.border = `3px solid ${button.value}`;
            button.style.color = `${button.value}`;
        }
    });
 }
 
 function boardSize(input){
    if (input > 100 || input < 2){ 
        alert("Enter a size between 2 and 200");
        return;}
    else {
    newColor = 'white';
    inputField.value = `${input}`;
    generateBoard(input);
    }
 }

 function setColor(color){
    newColor = color;
 }

 function colorCells(){
    if(mouseClick){
        if(newColor === "mixed"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else { 
            this.style.backgroundColor = `${newColor}`; 
        }
    }
 }

board.addEventListener('click', () => mouseClick = !mouseClick); //sketch toggle

 generateBoard(50); //board ready to sketch for first page load
