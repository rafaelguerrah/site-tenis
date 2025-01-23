
document.querySelectorAll('.menu-site a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').slice(1); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const modal = document.createElement('div');
modal.id = 'modal';
modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s;
`;

const modalContent = document.createElement('div');
modalContent.style.cssText = `
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 500px;
`;
modalContent.innerHTML = `
    <h2>Informações Adicionais</h2>
    <p>O tênis é um esporte cheio de história, técnica e paixão. Explore mais sobre sua evolução no nosso conteúdo detalhado.</p>
    <button id="closeModal" style="margin-top: 20px; padding: 10px 20px; background-color: #f00; color: #fff; border: none; border-radius: 5px;">Fechar</button>
`;

modal.appendChild(modalContent);
document.body.appendChild(modal);

document.querySelector('.botao').addEventListener('click', () => {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
});

document.getElementById('closeModal').addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
});

document.querySelectorAll('.menu-site li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#f00'; 
    });
    link.addEventListener('mouseout', () => {
        link.style.color = ''; 
    });
});
