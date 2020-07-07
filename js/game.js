
let perguntas = [
    {
        pergunta: 'Qual a capital do Brasil?',
        opcoes: {
            0: 'A) Rio de Janeiro',
            1: 'C) São Paulo',
            2: 'B) Brasília',
            3: 'D) Bahia',
        },

        resposta: 2,

    },
    {
        pergunta: 'Qual a capital do Chile?',
        0: 'A) Santiago',
        1: 'C) Aruba',
        2: 'B) San Chile',
        3: 'D) Montevideu',
        resposta: 1,
    }
];


console.log('Carreguei');


// Botoes
const btnInicio = document.getElementById("pronto-btn");
const btnDesistir = document.getElementById("desistir");
const btnVerifica = document.getElementById("btn-verifica");

// Telas
const telaInicial = document.getElementById("tela-inicial");
const telaQuiz = document.getElementById("tela-quiz");
const telaFinal = document.getElementById("tela-final");

// Mostradores de informacao
let numeroPergunta = document.getElementById('pergunta-numero');
let dificuldade = document.getElementById("dificuldade");
let premioAtual = document.getElementById("premio-atual");
let premioDerrota = document.getElementById("premio-derrota");
let premioProx = document.getElementById("premio-proximo");
let resultado = document.getElementById("resultado");
let enunciado = document.getElementById("pergunta");

// Alternativas

let alternativas = document.getElementsByClassName("alternativa");

console.log(alternativas);

let alternativaSelecionada = "";

for (let i = 0; i < alternativas.length; i++) {
    console.log(alternativas[i].id);
    alternativas[i].addEventListener("click", evt => {
        // Se alternativa estiver vazia
        if (alternativaSelecionada === evt.target) return

        if (alternativaSelecionada !== "") {
            // Alterando anterior
            alterarEstilo();
        }

        alternativaSelecionada = evt.target;

        console.log('Alternativa: ' + evt.target);
        // Alterando atual
        alterarEstilo();

        Number(alternativaSelecionada);
        console.log(alternativaSelecionada);

    });
}

btnInicio.addEventListener( "click", ev => {
    ev.preventDefault();
    telaInicial.classList.add('inativo');
    telaQuiz.classList.add('ativo');

});

btnDesistir.addEventListener("click", finalizar);

// btnVerifica.addEventListener("click", verifica);

async function verifica() {

    const respostaAtual = perguntas[0].resposta;
    Number(alternativaSelecionada);
    console.log('Voce selecionou: ' + alternativaSelecionada);
    console.log(typeof alternativaSelecionada);
    console.log('Resposta atual: ' + respostaAtual);
    console.log(typeof respostaAtual);

    const opcao = Number(alternativaSelecionada.id);

    if (opcao === respostaAtual) {
        resultado.classList.remove('inativo');
        resultado.innerText = 'Parabéns! Você acertou!';
        await new Promise(r => setTimeout(r, 2000));
        numeroPergunta += 1;
        geraPergunta();
        resultado.classList.add('ativo');

    } else if (opcao !== respostaAtual && alternativaSelecionada !== "") {
        console.log('errou');
        resultado.classList.remove('inativo');
        resultado.innerText = 'Que pena! Você errou!';
        resultado.classList.add('ativo');
        finalizar();

    } else if (alternativaSelecionada === "") {
        alert('Selecione uma alternativa!')
        resultado.classList.remove('inativo');
        resultado.classList.add('ativo');
        resultado.innerText = "Você não selecionou nenhuma alternativa!";
    }
}

function iniciar() {
    numeroPergunta = 1;
    if (numeroPergunta === 1) {
        dificuldade.innerText = 'Facil';
        premioAtual.innerText = 'R$1.000,00'
        premioDerrota.innerText = 'R$0,00'
        premioProx.innerText = 'R$5.000,00'
    }

    enunciado.innerText = perguntas[0].pergunta;
    for (let i = 0; i < alternativas.length; i++) {
        alternativas[i].innerHTML = perguntas[0].opcoes[i];
    }

}

function geraPergunta() {
    if (numeroPergunta === 2) {
        dificuldade.innerText = 'Fácil';
        premioAtual.innerText = 'R$5.000,00'
        premioDerrota.innerText = 'R$1.000,00'
        premioProx.innerText = 'R$25.000,00'
    }
}

function finalizar() {
    // alert('O jogo acabou! :)')
    telaInicial.classList.remove('ativo');
    telaInicial.classList.add('inativo');
    telaQuiz.classList.remove('ativo');
    telaQuiz.classList.add('inativo');
    telaFinal.classList.add('ativo');
}

function alterarEstilo() {
    alternativaSelecionada.classList.toggle('alternativa');
    alternativaSelecionada.classList.toggle('selecionada');
}

iniciar();

