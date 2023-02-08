function createRow(rows) {
  const container = document.querySelector('.container');

  for (let i = 1; i <= rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  }
}
