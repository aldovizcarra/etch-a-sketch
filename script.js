createGrid(getRangeValue);

function createRow(rows) {
  const container = document.querySelector('.container');

  for (let i = 1; i <= rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  }
}

function createGrid(item) {
  item = item();
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
    sqr.addEventListener('mouseover', () => {
      sqr.style.backgroundColor = 'black';
    });
  });
}

function getRangeValue() {
  const range = document.querySelector('#range');
  const ouput = document.querySelector('.output');
  ouput.textContent = `${range.value} x ${range.value}`;
  return parseInt(range.value);
}

range.addEventListener('input', (e) => {
  const squares = document.querySelectorAll('.square');
  const rows = document.querySelectorAll('.row');

  squares.forEach((square) => {
    square.parentNode.removeChild(square);
  });
  rows.forEach((row) => {
    row.parentNode.removeChild(row);
  });

  const output = document.querySelector('.output');
  output.textContent = `${e.target.value} x ${e.target.value}`;
  createGrid(getRangeValue);
});

const blackBtn = document.querySelector('.black-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');

blackBtn.addEventListener('click', () => {
  const sqrs = document.querySelectorAll('.square');

  sqrs.forEach((sqr) => {
    sqr.addEventListener('mouseover', () => {
      sqr.style.backgroundColor = 'black';
    });
  });
});

rainbowBtn.addEventListener('click', () => {
  const sqrs = document.querySelectorAll('.square');

  sqrs.forEach((sqr) => {
    sqr.addEventListener('mouseover', () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      sqr.style.backgroundColor = `#${randomColor}`;
    });
  });
});

eraserBtn.addEventListener('click', () => {
  const sqrs = document.querySelectorAll('.square');

  sqrs.forEach((sqr) => {
    sqr.addEventListener('mouseover', () => {
      sqr.style.backgroundColor = 'white';
    });
  });
});

clearBtn.addEventListener('click', () => {
  const sqrs = document.querySelectorAll('.square');

  sqrs.forEach((sqr) => {
    sqr.style.backgroundColor = 'white';
  });
});
