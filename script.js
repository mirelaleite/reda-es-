document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de projeto
    const botoesProjeto = document.querySelectorAll('.btn-projeto');
    // 2. Seleciona todos os cards de detalhes de projeto
    const cardsProjeto = document.querySelectorAll('.projeto-card');
    // 3. Seleciona todos os botões de fechar
    const botoesFechar = document.querySelectorAll('.fechar-btn');
    
    let projetoAberto = null; // Variável para rastrear qual projeto está aberto

    // Função para esconder todos os cards
    function esconderTodosProjetos() {
        cardsProjeto.forEach(card => {
            card.classList.remove('visible');
            card.classList.add('hidden');
        });
        projetoAberto = null;
    }

    // Adiciona evento de clique a cada botão de projeto
    botoesProjeto.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const projetoId = e.target.dataset.projeto; // Pega o valor do 'data-projeto' (ex: 'projeto1')
            const cardAlvo = document.getElementById(projetoId);
            
            // Se o projeto já estiver aberto, fecha ele
            if (projetoAberto === cardAlvo) {
                esconderTodosProjetos();
            } else {
                // Senão, esconde todos e mostra o card alvo
                esconderTodosProjetos();
                if (cardAlvo) {
                    cardAlvo.classList.remove('hidden');
                    cardAlvo.classList.add('visible');
                    projetoAberto = cardAlvo;
                }
            }
        });
    });
    
    // Adiciona evento de clique aos botões de fechar
    botoesFechar.forEach(botao => {
        botao.addEventListener('click', esconderTodosProjetos);
    });

    // Opcional: Fechar ao clicar fora do card
    document.addEventListener('click', (e) => {
        // Verifica se o clique não foi em um card ou em um botão que abre um card
        if (projetoAberto && 
            !projetoAberto.contains(e.target) && 
            !e.target.classList.contains('btn-projeto')) {
            esconderTodosProjetos();
        }
    });
});