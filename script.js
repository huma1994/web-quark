document.addEventListener('DOMContentLoaded', function() {
  // Generate the Ludo board dynamically
  generateBoard();
});

function generateBoard() {
  const board = document.getElementById('board');

  for (let row = 1; row <= 11; row++) {
    for (let col = 1; col <= 11; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = row;
      cell.dataset.col = col;

      // Add classes for colored cells
      if (row % 2 === 0 && col % 2 === 1) {
        cell.classList.add('red');
      } else if (row % 2 === 1 && col % 2 === 0) {
        cell.classList.add('yellow');
      }

      // Add classes for player cells
      if ((row === 1 || row === 11) && col > 1 && col < 11) {
        cell.classList.add('green');
      } else if ((col === 1 || col === 11) && row > 1 && row < 11) {
        cell.classList.add('blue');
      }

      board.appendChild(cell);
    }
  }
}
