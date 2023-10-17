const clearBtn = document.querySelector('#clear-');
// const gameContainerWindow = document.querySelector('#grid-container');

function createGrid(size = 32 * 44, cssClass = 'medium-grid') {
  const gameContainerWindow = document.querySelector('#grid-container');

  gameContainerWindow.innerHTML = '';

  gameContainerWindow.classList.remove('small-grid','medium-grid','big-grid');
  gameContainerWindow.classList.add(cssClass);

  for (let i = 0; i < size; i += 1) {
    const div = document.createElement('div');
    gameContainerWindow.appendChild(div);
    
  }
}


function startGame() {
  createGrid();
}


startGame();