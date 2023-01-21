const buttons = document.querySelectorAll('.flex button');

let valor = 0;

buttons.forEach((btns) => {
  btns.addEventListener('click', () => {
    const getClass = btns.getAttribute('class');
    if (getClass === 'maior') {
      valor++;
    }
    if (valor > 0) {
      if (getClass === 'menor') {
        valor--;
      }
    }
    if (getClass === 'reset') {
      valor = 0;
    }
    document.querySelector('.inc-desc').innerHTML = valor;
  });
});
