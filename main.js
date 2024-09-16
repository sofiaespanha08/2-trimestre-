const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Alice encontrou uma caixa misteriosa no chão: [
            " Abir a caixa e ver o que há dentro",
            " DEixar a caixa e seguir em frente"
        ]
    },
    {
        enunciado: " Alice abriu a caixa e, dentro dela, encontrou uma mapa com um X marcado um ponto distante : [
            "Seguir o mapa e descobrir o que o X esconde",
            "Guardar o mapa e voltar pra casa evitando possíveis perigos ",
        ]
    },
    {
        pergunta: "Alice escolheu seguir o mapa, intrigada pelo o mistério. Após horas caminhando, ela chegou a uma caverna escura onde mandava uma fraca luz",
        alternativas: [
            "Entrar na caverna e descobrir a origem da luz",
            "Ficar no lado de fora pensando em uma estratégia mais segura "
        ]
    },
    {
        enunciado: "Com o coração acelerado ela decie entrar e encontra uma baú cum alguns cristais brilhantes, ao se aproximar leu no lado de fora do baú uma carta escrito que para abrir o baú deve sacrificae algo que precioso",
        alternativas: [
            "Sacrificar algo precioso para abrir o baú",
            "SAir da caverna e desistir do baú"
        ]
    },
    {
        enunciado: "Alice cheia de curiosidade, respirou fundo e tmou uma decisão",
        alternativas: [
           "Ela decide sacrificar um pequeno pingente que sua vó lhe deu",
            "Alice decide sair da caverna, abandonando o baú e levando consigo a lição de que nem todo tesouro vale o risco"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta(); 
