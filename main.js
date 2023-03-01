const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.innerText = 'Agregado al carrito';
    button.style.backgroundColor = '#f44336';
    button.style.cursor = 'default';
  });
});
