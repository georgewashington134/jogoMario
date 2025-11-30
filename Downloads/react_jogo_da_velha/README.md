# ♟️ Jogo da Velha - React

Um clássico jogo da velha (Tic Tac Toe) desenvolvido com **React** e **JavaScript**, com interface moderna e funcionalidades completas.

## 🎮 Sobre o Jogo

O Jogo da Velha é um jogo de estratégia para dois jogadores em um tabuleiro 3x3. O objetivo é conseguir três de seus símbolos (X ou O) em linha - vertical, horizontal ou diagonal - antes que seu oponente.

### Características

- ✅ **Modo Pvp**: Jogue contra outro jogador
- ✅ **Detecção de Vencedor**: Identifica automaticamente quando há um vencedor
- ✅ **Histórico de Jogadas**: Navegue pelo histórico completo da partida
- ✅ **Interface Responsiva**: Design moderno e fácil de usar
- ✅ **Alternância de Turnos**: Controle automático de turno entre X e O
- ✅ **Status do Jogo**: Acompanhamento de qual jogador está na vez

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado (v14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/georgewashington134/jogoMario.git
cd react_jogo_da_velha
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Abra seu navegador e acesse:
```
http://localhost:3000
```

## 🕹️ Como Jogar

1. **Comece o Jogo**: O jogador X começa primeiro
2. **Faça Suas Jogadas**: Clique em qualquer quadrado vazio para marcar seu símbolo
3. **Ganhe**: Crie uma linha com três de seus símbolos (X ou O)
4. **Navegue**: Use o histórico para revisar as jogadas anteriores

## 🛠️ Tecnologias Utilizadas

- **React 19.2**: Biblioteca JavaScript para construir interfaces de usuário
- **React DOM 19.2**: Renderização de componentes React no navegador
- **CSS3**: Estilização moderna e responsiva
- **JavaScript ES6+**: Funcionalidades modernas do JavaScript
- **React Scripts 5.0**: Ferramentas de build e desenvolvimento

## 📁 Estrutura do Projeto

```
react_jogo_da_velha/
├── public/
│   ├── index.html          # Arquivo HTML principal
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js              # Componente principal do jogo
│   ├── App.css             # Estilos do jogo
│   ├── index.js            # Ponto de entrada
│   └── index.css           # Estilos globais
├── package.json            # Dependências do projeto
└── README.md              # Este arquivo
```

## 📝 Componentes Principais

### Square
Componente que representa um quadrado individual do tabuleiro.

### Board
Renderiza o tabuleiro 3x3 com todos os quadrados e gerencia a lógica de cliques.

### Game
Componente principal que gerencia o estado do jogo, histórico de jogadas e navegação.

## 🎯 Funcionalidades

- **Cálculo de Vencedor**: Verifica todas as combinações de vitória possíveis
- **Histórico Completo**: Salva todas as jogadas e permite voltar a qualquer momento
- **Status em Tempo Real**: Mostra qual jogador está na vez ou quem venceu
- **Reinício Automático**: Após uma vitória, é possível iniciar um novo jogo

## 📦 Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm build          # Cria build otimizado para produção
npm test           # Executa os testes
npm eject          # Ejetar configurações (irreversível)
```

## 💡 Exemplo de Uso

```javascript
// O jogo é inicializado automaticamente ao abrir a aplicação
// Basta clicar nos quadrados do tabuleiro para jogar
```

## 🔧 Customizações Possíveis

- Adicionar um modo contra IA
- Implementar diferentes temas
- Adicionar placar permanente
- Criar levels de dificuldade
- Adicionar efeitos sonoros

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

Desenvolvido por **George Washington** - [@georgewashington134](https://github.com/georgewashington134)

## 📞 Suporte

Se tiver dúvidas ou encontrar problemas, abra uma issue no repositório GitHub.

---

**Divirta-se jogando! 🎉**
