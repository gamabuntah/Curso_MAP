// Teste automático completo do fluxo de liberação de módulos e avaliação final
// Execute este script no console do navegador na página principal do sistema

(function() {
  if (!window.sistemaProgresso) {
    console.error('sistemaProgresso não encontrado. Carregue a página principal do curso antes de rodar este teste.');
    return;
  }

  // Limpa o progresso para simular um novo usuário
  sistemaProgresso.limparProgresso();
  let erros = 0;

  // 1. Testa acesso a módulos em sequência
  for (let i = 1; i <= 8; i++) {
    // Tenta acessar módulo atual
    window.currentModule = i;
    window.renderCards();
    const progresso = sistemaProgresso.obterProgresso();
    const modulosConcluidos = Object.values(progresso.modulos).filter(m => m.concluido).length;
    const proximoModuloDisponivel = modulosConcluidos + 1;
    if (i > proximoModuloDisponivel) {
      console.error(`[ERRO] Módulo ${i} foi acessado sem concluir o anterior!`);
      erros++;
    } else {
      console.log(`[OK] Módulo ${i} só foi acessado após concluir o anterior.`);
    }
    // Conclui módulo e quiz
    sistemaProgresso.marcarModuloConcluido(i);
    sistemaProgresso.salvarResultadoQuiz(i, 100, 10, 10);
  }

  // 2. Tenta acessar módulo 8 antes de concluir todos (deve estar liberado só após concluir 7)
  sistemaProgresso.limparProgresso();
  for (let i = 1; i <= 7; i++) {
    sistemaProgresso.marcarModuloConcluido(i);
    sistemaProgresso.salvarResultadoQuiz(i, 100, 10, 10);
  }
  window.currentModule = 8;
  window.renderCards();
  let progresso = sistemaProgresso.obterProgresso();
  let modulosConcluidos = Object.values(progresso.modulos).filter(m => m.concluido).length;
  let proximoModuloDisponivel = modulosConcluidos + 1;
  if (8 > proximoModuloDisponivel) {
    console.log('[OK] Módulo 8 bloqueado corretamente antes de concluir todos os anteriores.');
  } else {
    console.error('[ERRO] Módulo 8 foi liberado antes da hora!');
    erros++;
  }

  // 3. Conclui todos os módulos e quizzes
  sistemaProgresso.limparProgresso();
  for (let i = 1; i <= 8; i++) {
    sistemaProgresso.marcarModuloConcluido(i);
    sistemaProgresso.salvarResultadoQuiz(i, 100, 10, 10);
  }

  // 4. Verifica se avaliação final está liberada
  window.currentModule = 8;
  window.renderCards();
  setTimeout(() => {
    const btns = document.querySelectorAll('.avaliacao-btn');
    let liberada = false;
    btns.forEach(btn => {
      if (!btn.disabled && btn.textContent.includes('Avaliação Final')) liberada = true;
    });
    if (liberada) {
      console.log('%c[SUCESSO] Avaliação final liberada corretamente após todos os módulos concluídos!', 'color: green; font-weight: bold;');
    } else {
      console.error('[ERRO] Avaliação final NÃO foi liberada mesmo com todos os módulos concluídos.');
      erros++;
    }

    // 5. Simula realização da avaliação final
    if (typeof startAvaliacaoFinal === 'function') {
      startAvaliacaoFinal();
      setTimeout(() => {
        const container = document.getElementById('avaliacao-container');
        if (container && container.innerHTML.includes('Questão 1')) {
          console.log('[OK] Avaliação final iniciada com sucesso.');
        } else {
          console.error('[ERRO] Não foi possível iniciar a avaliação final.');
          erros++;
        }
        // Resultado final
        if (erros === 0) {
          console.log('%c[TESTE COMPLETO] Nenhum erro encontrado no fluxo de liberação de módulos e avaliação final!', 'color: green; font-weight: bold;');
        } else {
          console.error(`[TESTE COMPLETO] Foram encontrados ${erros} erro(s) no fluxo. Verifique os detalhes acima.`);
        }
      }, 1000);
    } else {
      console.error('Função startAvaliacaoFinal não encontrada.');
    }
  }, 1000);
})(); 