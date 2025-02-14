const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.Barra_navegação');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('ativo');
}

// Função de confirmação
function confirmacao() {
    const mensagemConfirmacao = document.getElementById('mensagemConfirmacao');
    mensagemConfirmacao.style.display = 'inline-block';
    mensagemConfirmacao.innerHTML = 'Sua mensagem foi encaminhada com sucesso!';

    setTimeout(function() {
        mensagemConfirmacao.style.display = 'none';
    }, 2000);  
}