const button = document.getElementById('theme-toggle');
const body = document.body;


button.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  
  if (body.classList.contains('dark-theme')) {
    button.textContent = 'Mudar para Tema Claro';
  } else {
    button.textContent = 'Mudar para Tema Escuro';
  }
});