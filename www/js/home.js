// Manipulação do menu hamburguer
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const overlay = document.createElement('div'); // Cria o overlay
overlay.classList.add('overlay');
document.body.appendChild(overlay); // Adiciona o overlay ao body
let showMenu = false;

menuBtn.addEventListener('click', () => {
    if (!showMenu) {
        nav.style.left = '0'; // Faz o menu aparecer
        menuBtn.classList.add('open'); // Atualiza o ícone do hambúrguer
        overlay.classList.add('show'); // Mostra o overlay
        showMenu = true;
    } else {
        nav.style.left = '-250px'; // Esconde o menu
        menuBtn.classList.remove('open'); // Volta o ícone ao estado normal
        overlay.classList.remove('show'); // Esconde o overlay
        showMenu = false;
    }
});

// Exibe o nome do usuário logado
const userName = localStorage.getItem('usuario');
document.getElementById('user-name').textContent = userName;

// Função de logout
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('senha');
    window.location.href = 'login.html'; // Redireciona para a página de login
});
