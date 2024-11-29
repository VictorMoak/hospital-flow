const toggleThemeButton = document.querySelector('.btn-toggle-theme');

// Alternar entre temas claro e escuro
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('table').classList.toggle('dark-mode');
  toggleThemeButton.textContent = document.body.classList.contains('dark-mode')
    ? 'Alternar para Tema Claro'
    : 'Alternar para Tema Escuro';
});

