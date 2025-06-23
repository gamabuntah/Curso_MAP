// Teste automático visual do frontend - Sistema PNSB
// Este script cria um painel na página mostrando o resultado do teste
// Para rodar, basta incluir <script src="teste-frontend-automatico.js"></script> no index.html

(function() {
  // Cria painel visual
  const painel = document.createElement('div');
  painel.style.position = 'fixed';
  painel.style.top = '20px';
  painel.style.right = '20px';
  painel.style.background = 'rgba(0,0,0,0.85)';
  painel.style.color = '#fff';
  painel.style.padding = '20px';
  painel.style.zIndex = 9999;
  painel.style.borderRadius = '10px';
  painel.style.fontFamily = 'monospace';
  painel.style.maxWidth = '400px';
  painel.innerHTML = '<b>🧪 Teste Automático do Frontend PNSB</b><br><div id="teste-log"></div>';
  document.body.appendChild(painel);
  const logDiv = document.getElementById('teste-log');
  function log(msg, ok) {
    logDiv.innerHTML += `<div style="color:${ok===false?'#ff5252':'#8bc34a'}">${msg}</div>`;
  }

  // Aguarda o carregamento do sistema
  function aguardar(cond, cb, tentativas = 30) {
    if (cond()) return cb();
    if (tentativas <= 0) return log('Timeout ao aguardar sistema carregar', false);
    setTimeout(() => aguardar(cond, cb, tentativas-1), 300);
  }

  // Início do teste
  aguardar(
    () => window.ProgressManager && document.querySelector('.main-content'),
    async () => {
      try {
        // Cria usuário de teste
        const testUser = 'teste_frontend_auto';
        sessionStorage.setItem('currentUser', testUser);
        sessionStorage.setItem('userRole', 'user');
        // Instancia ProgressManager
        let pm = await new ProgressManager(testUser).init();
        log('ProgressManager inicializado', true);
        // Reseta progresso
        pm.progress = {};
        await pm.saveProgress();
        await pm.init();
        // Testa fluxo de módulos
        let erros = 0;
        for (let i = 1; i <= 8; i++) {
          pm.progress.modules[i.toString()].audioCompleted = true; // Marca áudio como concluído
          await pm.completeModule(i.toString(), 100);
          if (pm.progress.modules[i.toString()].status !== 'completed') {
            log(`[ERRO] Módulo ${i} não foi marcado como concluído!`, false);
            erros++;
          } else {
            log(`[OK] Módulo ${i} concluído.`, true);
          }
        }
        // Testa liberação da avaliação final
        await pm.completeFinalEvaluation(100);
        if (pm.progress.final_evaluation.status === 'passed') {
          log('[OK] Avaliação final liberada e aprovada!', true);
        } else {
          log('[ERRO] Avaliação final não foi liberada corretamente!', false);
          erros++;
        }
        if (erros === 0) {
          log('<b>[SUCESSO] Fluxo de progresso e avaliação final funcionando!</b>', true);
        } else {
          log(`<b>[ATENÇÃO] Foram encontrados ${erros} erro(s) no fluxo.</b>`, false);
        }
      } catch (e) {
        log('[FALHA] Erro inesperado: ' + e.message, false);
      }
    }
  );
})(); 