// Teste automático de progresso e liberação da avaliação final
// Execute este script no console do navegador na página principal do sistema

(function() {
  if (!window.sistemaProgresso) {
    console.error('sistemaProgresso não encontrado. Carregue a página principal do curso antes de rodar este teste.');
    return;
  }

  // Limpa o progresso para simular um novo usuário
  sistemaProgresso.limparProgresso();

  // Simula conclusão de todos os módulos e quizzes
  for (let i = 1; i <= 8; i++) {
    sistemaProgresso.marcarModuloConcluido(i);
    sistemaProgresso.salvarResultadoQuiz(i, 100, 10, 10); // nota 100%, 10 acertos de 10
  }

  // Atualiza o progresso geral
  const progressoGeral = sistemaProgresso.calcularProgressoGeral();

  // Verifica se todos os módulos e quizzes foram concluídos
  const modulosOk = progressoGeral.modulosConcluidos === 8;
  const quizzesOk = progressoGeral.quizzesConcluidos === 8;

  // Simula tentativa de acessar a avaliação final
  if (modulosOk && quizzesOk) {
    // Tenta iniciar a avaliação final
    if (typeof startAvaliacaoFinal === 'function') {
      startAvaliacaoFinal();
      setTimeout(() => {
        const container = document.getElementById('avaliacao-container');
        if (container && container.innerHTML.includes('Questão 1')) {
          console.log('%c[SUCESSO] Avaliação final liberada corretamente após todos os módulos concluídos!', 'color: green; font-weight: bold;');
        } else {
          console.error('[ERRO] Avaliação final NÃO foi liberada mesmo com todos os módulos concluídos.');
        }
      }, 1000);
    } else {
      console.error('Função startAvaliacaoFinal não encontrada.');
    }
  } else {
    console.error('[ERRO] Nem todos os módulos/quizzes foram concluídos.');
  }

  // Opcional: restaurar progresso original após o teste
  // sistemaProgresso.limparProgresso();
})(); 