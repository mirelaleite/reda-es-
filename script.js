document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de interatividade: Adicionar um efeito de destaque ao passar o mouse
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseout', function() {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Você pode adicionar mais código JavaScript aqui para:
    // 1. Navegação suave (scroll suave ao clicar nos links do menu).
    // 2. Validação de formulários de contato.
    // 3. Efeitos de animação ou carregamento (ex: Scroll Reveal).
});