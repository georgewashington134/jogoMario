# TODO — jogoMario

## Prioridade

- [ ] Corrigir confiabilidade do score (contagem por passagem do cano em vez de animationiteration)
	- Arquivos: `js/script.js`
	- Descrição: em vez de confiar em `animationiteration`, detectar quando o `pipe` cruza a posição X  e então incrementar score. Evita problemas em alguns navegadores/arquivos locais.
- [ ] Adicionar botão "Reiniciar" que reinicia o estado do jogo sem recarregar a página
	- Arquivos: `index.html`, `css/style.css`, `js/script.js`
	- Descrição: criar botão no HUD que redefine `score`, reposiciona o `pipe` reinicia animação e restaura `mario` para o estado inicial.
