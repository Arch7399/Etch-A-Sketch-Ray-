const board = document.querySelector('.board');
 function makeBoard(size){
    const total = size * size;
    
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < total; i++){
        let cell = document.createElement('div');
        board.insertAdjacentElement('beforeend', cell);
    }
 }
 makeBoard(16);

 function colorSelect(colors){
    const cells = board.querySelectorAll('div');
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = `${colors}`;
    }));
 };
