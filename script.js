let result = document.getElementById('result');

function addInput(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculate() {
    let expression = result.value;
    let answer = eval(expression);
    result.value = answer;
}


// Selección de los botones
const buttons = document.querySelectorAll('.key');

// Animación al pasar el ratón por encima
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'all 0.2s ease-in-out';
  });
  
  // Animación al dejar de pasar el ratón por encima
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
    button.style.transition = 'all 0.2s ease-in-out';
  });
  
  // Animación al hacer clic en el botón
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.9)';
    button.style.transition = 'all 0.2s ease-in-out';
  });
  
  // Animación al soltar el botón del ratón
  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
    button.style.transition = 'all 0.2s ease-in-out';
  });
});
