function createRow(rows) {
  const container = document.querySelector('.container');

  for (let i = 1; i <= rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  }
}

function createGrid(item) {
  createRow(item);
  const rows = document.querySelectorAll('.row');

  rows.forEach((row) => {
    for (let i = 1; i <= item; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }
  });

  const sqrs = document.querySelectorAll('.square');

  sqrs.forEach((sqr) => {
    sqr.addEventListener('mouseover', (e) => {
      sqr.style.backgroundColor = 'black';
    });
  });
}

createGrid(20);

function getRangeValue() {
  const range = document.querySelector('#range');
  return parseInt(range.value);
}

console.log(getRangeValue());
