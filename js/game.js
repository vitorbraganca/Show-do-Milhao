/* Array de objetos para as informações,
* contendo o número identificador do enunciado, prêmio atual
* prêmio caso erre a pergunta e o próximo prêmio.
 */

let informacoes = [
    {
        numero: 1,
        dificuldade: 'Fácil',
        premioAtual: 'R$1.000,00',
        premioDerrota: 'R$0,00',
        premioProx: 'R$1.500,00',
    },
    {
        numero: 2,
        dificuldade: 'Fácil',
        premioAtual: 'R$1.500,00',
        premioDerrota: 'R$1.000,00',
        premioProx: 'R$2.500,00',
    },
    {
        numero: 3,
        dificuldade: 'Fácil',
        premioAtual: 'R$2.500,00',
        premioDerrota: 'R$1.500,00',
        premioProx: 'R$5.000,00',
    },
    {
        numero: 4,
        dificuldade: 'Média',
        premioAtual: 'R$5.000,00',
        premioDerrota: 'R$2.500,00',
        premioProx: 'R$10.000,00',
    },
    {
        numero: 5,
        dificuldade: 'Média',
        premioAtual: 'R$15.000,00',
        premioDerrota: 'R$10.000,00',
        premioProx: 'R$20.000,00',
    },
    {
        numero: 6,
        dificuldade: 'Média',
        premioAtual: 'R$20.000,00',
        premioDerrota: 'R$15.000,00',
        premioProx: 'R$30.000,00',
    },
    {
        numero: 7,
        dificuldade: 'Média',
        premioAtual: 'R$30.000,00',
        premioDerrota: 'R$20.000,00',
        premioProx: 'R$50.000,00',
    },
    {
        numero: 8,
        dificuldade: 'Média',
        premioAtual: 'R$50.000,00',
        premioDerrota: 'R$30.000,00',
        premioProx: 'R$75.000,00',
    },
    {
        numero: 9,
        dificuldade: 'Média',
        premioAtual: 'R$75.000,00',
        premioDerrota: 'R$50.000,00',
        premioProx: 'R$100.000,00',
    },
    {
        numero: 10,
        dificuldade: 'Difícil',
        premioAtual: 'R$100.000,00',
        premioDerrota: 'R$75.000,00',
        premioProx: 'R$200.000,00',
    },
    {
        numero: 11,
        dificuldade: 'Difícil',
        premioAtual: 'R$200.000,00',
        premioDerrota: 'R$100.000,00',
        premioProx: 'R$300.000,00',
    },
    {
        numero: 12,
        dificuldade: 'Difícil',
        premioAtual: 'R$300.000,00',
        premioDerrota: 'R$200.000,00',
        premioProx: 'R$400.000,00',
    },
    {
        numero: 13,
        dificuldade: 'Difícil',
        premioAtual: 'R$400.000,00',
        premioDerrota: 'R$300.000,00',
        premioProx: 'R$500.000,00',
    },
    {
        numero: 14,
        dificuldade: 'Difícil',
        premioAtual: 'R$500.000,00',
        premioDerrota: 'R$400.000,00',
        premioProx: 'R$1.000.000,00',
    },
]
/* Array de objetos para as perguntas, contendo:
*  o enunciado, as opcoes, a dificuldade e a resposta correta.
*/
// LEMBRAR DE ENCONTRAR UMA FORMA ESCONDER ISSO DO USUARIO
let perguntas = [
    {
        pergunta: 'Qual a capital do Brasil?',
        opcoes: {
            0: 'A)  Rio de Janeiro',
            1: 'C) São Paulo',
            2: 'B) Brasília',
            3: 'D) Bahia',
        },
        resposta: 2,
        repetida: false,
    },

    {
        pergunta: 'Qual a capital do Peru?',
        opcoes: {
            0: 'A) Santiago',
            1: 'C) Lima',
            2: 'B) Cuzco',
            3: 'D) Montevideu',
        },
        resposta: 1,
        repetida: false,
    },

    {
        pergunta: 'Qual animação exibe uma princesa que perdeu seu sapatinho de Cristal?',
        opcoes: {
            0: 'A) Branca de Neve',
            1: 'C) Cinderella',
            2: 'B) Rapunzel',
            3: 'D) Pocahontas',
        },
        resposta: 1,
        repetida: false,
    },

    {
        pergunta: 'Banana, morango e limão são exemplos de:',
        opcoes: {
            0: 'A) Frutas',
            1: 'C) Hortaliças',
            2: 'B) Verduras',
            3: 'D) Tubérculos',
        },
        resposta: 0,
        repetida: false,
    },

    {
        pergunta: 'A personagem Sininho é uma: ',
        opcoes: {
            0: 'A) Sereia',
            1: 'C) Princesa',
            2: 'B) Fada',
            3: 'D) Rainha',
        },
        resposta: 2,
        repetida: false,
    },

    {
        pergunta: 'O sapo é da classe dos:',
        opcoes: {
            0: 'A) Herbívoros',
            1: 'C) Anfíbios',
            2: 'B) Répteis',
            3: 'D) Mamíferos',
        },
        resposta: 1,
        repetida: false,
    },

    {
        pergunta: 'A cobra é da classe dos:',
        opcoes: {
            0: 'A) Mamíferos',
            1: 'C) Répteis',
            2: 'B) Anfíbios',
            3: 'D) Herbívoros',
        },
        resposta: 1,
        repetida: false,
    },

    {
        pergunta: 'A personagem Ariel é uma:',
        opcoes: {
            0: 'A) Bruxa',
            1: 'C) Dançarina',
            2: 'B) Feiticeira',
            3: 'D) Sereia',
        },
        resposta: 3,
        repetida: false,
    },

    {
        pergunta: 'Em que dia comemora-se o dia da independência do Brasil?',
        opcoes: {
            0: 'A) 20 de novembro',
            1: 'C) 7 de setembro',
            2: 'B) 11 de setembro',
            3: 'D) 25 de março',
        },
        resposta: 1,
        repetida: false,
    },

/*    {
        pergunta: '',
        opcoes: {
            0: 'A) ',
            1: 'C) ',
            2: 'B) ',
            3: 'D) ',
            resposta: 1,
        },
        repetida: false,
    },*/

    {
        pergunta: 'Quantos países fazem parte da América Latina?',
        opcoes: {
            0: 'A) 15 países',
            1: 'C) 19 países',
            2: 'B) 20 países',
            3: 'D) 40 países',
        },
        resposta: 2,
        repetida: false,
    },

    {
        pergunta: 'Quem nasceu de 21/05 a 21/06 pertence a qual signo?',
        opcoes: {
            0: 'A) Gêmeos',
            1: 'C) Sagitário',
            2: 'B) Câncer',
            3: 'D) Leão',
        },
        resposta: 0,
        repetida: false,
    },

    {
        pergunta: 'Quantos continentes existem na Terra?',
        opcoes: {
            0: 'A) 3 continentes',
            1: 'C) 4 continentes',
            2: 'B) 5 continentes',
            3: 'D) 6 continentes',
        },
        resposta: 3,
        repetida: false,
    },

    {
        pergunta: 'Qual o maior ser vivo da Terra?',
        opcoes: {
            0: 'A) Baleia azul',
            1: 'C) Elefante',
            2: 'B) Fungos',
            3: 'D) Tubarão branco',
        },
        resposta: 2,
        repetida: false,
    },

    {
        pergunta: 'A azeitona é um:',
        opcoes: {
            0: 'A) Fruto',
            1: 'C) Legume',
            2: 'B) Vegetal',
            3: 'D) Tempero',
        },
        resposta: 0,
        repetida: false,
    },

    {
        pergunta: 'Qual o maior animal terrestre?',
        opcoes: {
            0: 'A) Baleia azul',
            1: 'C) Elefante africano',
            2: 'B) Girafa',
            3: 'D) Dinossauro',
        },
        resposta: 1,
        repetida: false,
    },

    {
        pergunta: 'Quem foi o primeiro homem a pisar na Lua?',
        opcoes: {
            0: 'A) Yuri Gagarin',
            1: 'C) Neil Armstrong',
            2: 'B) Charles Duke',
            3: 'D) Buzz Aldrin',
        },
        resposta: 1,
        repetida: false,
    },

    {
        pergunta: 'Quem pintou o teto da capela sistina?',
        opcoes: {
            0: 'A) Sandro Botticelli',
            1: 'C) Donatello',
            2: 'B) Michelangelo',
            3: 'D) Leonardo da Vinci',
        },
        resposta: 2,
        repetida: false,
    },

    {
        pergunta: 'Em que ano acabou a Segunda Guerra Mundial?',
        opcoes: {
            0: 'A) 1918',
            1: 'C) 1917',
            2: 'B) 1943',
            3: 'D) 1945',
        },
        resposta: 3,
        repetida: false,
    },

    {
        pergunta: 'Em que ano acabou a Primeira Guerra Mundial?',
        opcoes: {
            0: 'A) 1918',
            1: 'C) 1917',
            2: 'B) 1943',
            3: 'D) 1945',
        },
        resposta: 0,
        repetida: false,
    },

    {
        pergunta: 'Em que país fica a Esfinge?',
        opcoes: {
            0: 'A) França',
            1: 'C) Emirados Árabes',
            2: 'B) Egito',
            3: 'D) Dubai',
        },
        resposta: 2,
        repetida: false,
    },

    {
        pergunta: 'Qual o conceito que a Terceira Lei de Newton defende?',
        opcoes: {
            0: 'A) Energia',
            1: 'C) Gravidade',
            2: 'B) Inércia',
            3: 'D) Ação e Reação',
        },
        resposta: 3,
        repetida: false,
    },

    {
        pergunta: 'Qual a capital do Chile?',
        opcoes: {
            0: 'A) Santiago',
            1: 'C) Aruba',
            2: 'B) San Chile',
            3: 'D) Montevideu',
        },
        resposta: 0,
        repetida: false,
    }
];

// Botoes
const btnInicio = document.getElementById("pronto-btn");
const btnDesistir = document.getElementById("desistir");
const btnVerifica = document.getElementById("btn-verifica");
const btnNovamente = document.getElementById("novamente-btn");

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
let resultadoPerguntas = document.getElementById("resultado-perguntas");
let resultadoPremio = document.getElementById("resultado-premio");


// Alternativas
let alternativas = document.getElementsByClassName("alternativa");

let alternativaSelecionada = "";

btnInicio.addEventListener( "click", ev => {
    ev.preventDefault();

    // COLOCAR NUMA FUNÇÃO
    telaInicial.classList.add('inativo');
    telaQuiz.classList.add('ativo');
});

btnDesistir.addEventListener("click", finalizar);

btnVerifica.addEventListener("click", verifica);

btnNovamente.addEventListener("click", recarrega);

// Função usada para iniciar o jogo.
function iniciar() {
    numeroPergunta = 1;
    insereInfo(numeroPergunta);
    const respostaAtual = geraPergunta();

}

// Função usada para randomizar um indice para ser usado na seleção de pergunta
function randomiza(range) {
    let indice;
    return indice = Math.floor(Math.random() * range);
}
// Função usada para verificar e garantir que nenhuma pergunta seja repetida.
function verificaRepeticao() {
    let tentativas = 0;
    while (true) {
        let indice = randomiza(perguntas.length);
        tentativas += 1;
        if (perguntas[indice].repetida === false) {
            // Setando pergunta como repetida
            perguntas[indice].repetida = true;
            return indice
        } else if (tentativas > 15) return indice = 999;
    }
}

// Função usada para geração de pergunta
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
    resultado.innerText = `Que pena!! A resposta correta era: ${perguntas[indice].opcoes[perguntas[indice].resposta]}`;

    for (let i = 0; i < alternativas.length; i++) {
        alternativas[i].innerHTML = perguntas[indice].opcoes[i];
    }

    for (let i = 0; i < alternativas.length; i++) {
        alternativas[i].addEventListener("click", evt => {
            // Se alternativa estiver vazia
            if (alternativaSelecionada === evt.target) return

            if (alternativaSelecionada !== "") {
                // Alterando anterior
                alterarEstilo();
            }

            alternativaSelecionada = evt.target;

            // Alterando atual
            alterarEstilo();

            Number(alternativaSelecionada);

        });
    }

    return respostaAtual = perguntas[indice].resposta;
}

// Função usada para inserir informação nos campos de informação da tela.
function insereInfo(numeroPergunta) {
    // Limpa alternativa selecionada
    if (alternativaSelecionada) limpar();


    if (numeroPergunta <= informacoes.length) {
        infoNumeroPergunta.innerText = 'Pergunta ' + informacoes[numeroPergunta-1].numero + ':';
        dificuldade.innerText = informacoes[numeroPergunta-1].dificuldade;
        if (informacoes[numeroPergunta-1].dificuldade === 'Média') {
            dificuldadeItem.setAttribute("id", "dificuldade-media");
            dificuldade.setAttribute("id", "dificuldade-media");
        }
        else if (informacoes[numeroPergunta-1].dificuldade === 'Difícil'){
            dificuldadeItem.setAttribute("id", "dificuldade-dificil");
            dificuldade.setAttribute("id", "dificuldade-dificil")
        }
        premioAtual.innerText = informacoes[numeroPergunta-1].premioAtual;
        premioDerrota.innerText = informacoes[numeroPergunta-1].premioDerrota;
        premioProx.innerText = informacoes[numeroPergunta-1].premioProx;
    } else finalizar();
}

// Função usada para comparar a resposta do usuário com a resposta da pergunta.
async function verifica() {

    const opcao = Number(alternativaSelecionada.id);

    if (opcao === respostaAtual) {
        resultado.classList.remove('inativo');
        resultado.innerText = 'Parabéns! Você acertou!';
        await new Promise(r => setTimeout(r, 3000));
        numeroPergunta += 1;
        resultado.classList.add('ativo');
        if (numeroPergunta > perguntas.length) finalizar();
        geraPergunta();

    } else if (opcao !== respostaAtual && alternativaSelecionada !== "") {
        resultado.classList.remove('inativo');
        await new Promise(r => setTimeout(r, 3000));
        resultado.classList.add('ativo');
        finalizar();

    } else if (alternativaSelecionada === "") {
        alert('Selecione uma alternativa!')
        resultado.classList.remove('inativo');
        resultado.classList.add('ativo');
        resultado.innerText = "Você não selecionou nenhuma alternativa!";
    }
}

function alterarEstilo() {
    alternativaSelecionada.classList.toggle('alternativa');
    alternativaSelecionada.classList.toggle('selecionada');
}

// Função usada ao encerrar o jogo.
// FALTA ADICIONAR UMA FORMA DE RETORNAR AO INICIO!!!
function finalizar() {
    // ADICIONAR UMA FUNCAO DEPOIS (codigo repetido)
    telaInicial.classList.remove('ativo');
    telaInicial.classList.add('inativo');
    telaQuiz.classList.remove('ativo');
    telaQuiz.classList.add('inativo');
    telaFinal.classList.add('ativo');
    resultadoPerguntas.innerText = `Você conseguiu responder ${numeroPergunta-1} de ${informacoes.length} perguntas e faturou...`;
    if (numeroPergunta-1 === 0) resultadoPremio.innerText = `R$0,00 reais! Que pena :(`;
    else if (numeroPergunta >= informacoes.length) resultadoPremio.innerText = `R$1.000.000,00 de reais! Parabéns!`;
    resultadoPremio.innerText = `${informacoes[numeroPergunta-1].premioDerrota} reais!`;
}

// Função usada pra limpar a alternativa selecionada
function limpar() {
    if (alternativaSelecionada) {
        alterarEstilo();
        alternativaSelecionada = "";
    }
    resultado.classList.remove('ativo');
    resultado.classList.add('inativo');
}

// Função usada para recarregar a página
function recarrega() {
    document.location.reload(true);
}

iniciar();