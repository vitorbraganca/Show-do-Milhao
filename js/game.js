let informacoes = [
    {
        numero: 1,
        dificuldade: 'Fácil',
        premioAtual: 'R$1.000,00',
        premioDerrota: 'R$0,00',
        premioProx: 'R$5.000,00',
    },
    {
        numero: 2,
        dificuldade: 'Fácil',
        premioAtual: 'R$5.000,00',
        premioDerrota: 'R$1.000,00',
        premioProx: 'R$10.000,00',
    },
    {
        numero: 3,
        dificuldade: 'Média',
        premioAtual: 'R$25.000,00',
        premioDerrota: 'R$5.000,00',
        premioProx: 'R$50.000,00',
    },
    {
        numero: 4,
        dificuldade: 'Média',
        premioAtual: 'R$50.000,00',
        premioDerrota: 'R$25.000,00',
        premioProx: 'R$100.000,00',
    },
    {
        numero: 5,
        dificuldade: 'Difícil',
        premioAtual: 'R$500.000,00',
        premioDerrota: 'R$100.000,00',
        premioProx: 'R$1.000.000,00',
    },
    {
        numero: 6,
        dificuldade: 'Difícil;',
        premioAtual: 'R$1.000.000,00',
        premioDerrota: 'R$0,00',
        premioProx: 'VITÓRIA',
    }
]

let perguntas = [
    {
        pergunta: 'Qual a capital do Brasil?',
        opcoes: {
            0: 'A) Rio de Janeiro',
            1: 'C) São Paulo',
            2: 'B) Brasília',
            3: 'D) Bahia',
        },
        repetida: '',
        resposta: 2,

    },

    {
        pergunta: 'Qual a capital do Peru?',
        opcoes: {
            0: 'A) Santiago',
            1: 'C) Aruba',
            2: 'B) San Chile',
            3: 'D) Montevideu',
        },

        repetida: '',
        resposta: 0,
    },

    {
        pergunta: 'Qual a capital do Chile?',
        opcoes: {
            0: 'A) Santiago',
            1: 'C) Aruba',
            2: 'B) San Chile',
            3: 'D) Montevideu',
        },

        repetida: '',
        resposta: 0,
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
let infoNumeroPergunta = document.getElementById('pergunta-numero');
let dificuldade = document.getElementById("dificuldade");
let dificuldadeItem = document.getElementById("dificuldade-item");
let premioAtual = document.getElementById("premio-atual");
let premioDerrota = document.getElementById("premio-derrota");
let premioProx = document.getElementById("premio-proximo");
let resultado = document.getElementById("resultado");
let enunciado = document.getElementById("pergunta");

// Mostradores de prêmio
let premios = [
    document.getElementById("premio-1"),
    document.getElementById("premio-2"),
    document.getElementById("premio-3"),
    document.getElementById("premio-4"),
    document.getElementById("premio-5"),
    document.getElementById("premio-6")
]
let resultadoPerguntas = document.getElementById("resultado-perguntas");
let resultadoPremio = document.getElementById("resultado-premio");


// Alternativas

let alternativas = document.getElementsByClassName("alternativa");

console.log(alternativas);

let alternativaSelecionada = "";

btnInicio.addEventListener( "click", ev => {
    ev.preventDefault();
    console.log('Iniciando');
    telaInicial.classList.add('inativo');
    telaQuiz.classList.add('ativo');

});

btnDesistir.addEventListener("click", finalizar);

btnVerifica.addEventListener("click", verifica);

// btnVerifica.addEventListener("click", verifica);

async function verifica() {

    Number(alternativaSelecionada);

    const opcao = Number(alternativaSelecionada.id);
    console.log('Opcao ' + opcao);

    // RESPOSTA ATUAL NÃO ESTÁ SENDO ENCONTRADA
    if (opcao === respostaAtual) {
        resultado.classList.remove('inativo');
        resultado.innerText = 'Parabéns! Você acertou!';
        await new Promise(r => setTimeout(r, 2000));
        numeroPergunta += 1;
        resultado.classList.add('ativo');
        if (numeroPergunta > 6) finalizar();
        geraPergunta();

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
    insereInfo(numeroPergunta);

    const respostaAtual = geraPergunta();
    console.log('Nova resposta atual :' + respostaAtual);
    // enunciado.innerText = perguntas[0].pergunta;
    // for (let i = 0; i < alternativas.length; i++) {
    //     alternativas[i].innerHTML = perguntas[0].opcoes[i];
    // }

}

function geraPergunta() {
    insereInfo(numeroPergunta);



    let indice = verificaRepeticao();
    if (indice === 999) {
        enunciado.innerText = 'Acho que acabaram minhas perguntas... Recarregue a página!'
        for (let i = 0; i < alternativas.length; i++) {
            alternativas[i].classList.add('inativo');
        }
    }



    enunciado.innerText = perguntas[indice].pergunta;
    for (let i = 0; i < alternativas.length; i++) {
        alternativas[i].innerHTML = perguntas[indice].opcoes[i];
    }

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

    return respostaAtual = perguntas[indice].resposta;
}

function randomiza(range) {
    let indice;
    return indice = Math.floor(Math.random() * range);
}

function verificaRepeticao() {
    let tentativas = 0;
    while (true) {
        let indice = randomiza(perguntas.length);
        tentativas += 1;
        if (perguntas[indice].repetida === '') {
            // Setando pergunta como repetida
            perguntas[indice].repetida = 'sim';
            return indice
        } else if (tentativas > 15) return indice = 999;
    }
}


function finalizar() {
    // alert('O jogo acabou! :)')
    telaInicial.classList.remove('ativo');
    telaInicial.classList.add('inativo');
    telaQuiz.classList.remove('ativo');
    telaQuiz.classList.add('inativo');
    telaFinal.classList.add('ativo');
    alert(numeroPergunta-1);

    resultadoPerguntas.innerText = `Você conseguiu responder ${numeroPergunta-1} de 6 perguntas e faturou...`;
    if (numeroPergunta-1 === 0) resultadoPremio.innerText = `R$0,00 reais! Que pena :(`;
    else if (numeroPergunta >= 6) resultadoPremio.innerText = `R$1.000.000,00 de reais! Parabéns!`;

    resultadoPremio.innerText = `${informacoes[numeroPergunta-1].premioDerrota} reais!`;

}

function alterarEstilo() {
    console.log('limpando ' + alternativaSelecionada.id)
    alternativaSelecionada.classList.toggle('alternativa');
    alternativaSelecionada.classList.toggle('selecionada');
}

function limpar() {
    if (alternativaSelecionada) {
        alterarEstilo();
        alternativaSelecionada = "";
    }

    resultado.classList.remove('ativo');
    resultado.classList.add('inativo');
}

function insereInfo(numeroPergunta) {
    // Limpa alternativa selecionada
    if (alternativaSelecionada) limpar();

    infoNumeroPergunta.innerText = 'Pergunta ' + informacoes[numeroPergunta-1].numero + ':';
    dificuldade.innerText = informacoes[numeroPergunta-1].dificuldade;
    if (informacoes[numeroPergunta-1].dificuldade === 'Média') dificuldadeItem.setAttribute("id", "dificuldade-media");
    else if (informacoes[numeroPergunta-1].dificuldade === 'Difícil') dificuldadeItem.setAttribute("id", "dificuldade-dificil");
    premioAtual.innerText = informacoes[numeroPergunta-1].premioAtual;
    premioDerrota.innerText = informacoes[numeroPergunta-1].premioDerrota;
    premioProx.innerText = informacoes[numeroPergunta-1].premioProx;
    console.log('premio selecionado: ' + premios[numeroPergunta-1])
    premios[numeroPergunta-1].setAttribute("id","premio-selecionado");
}

iniciar();
