// declaração de variáveis
const question = document.querySelector("#question");
const answerBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const explain = document.getElementById("explicacao");
const nextButton = document.getElementById('next-btn');
const nextField = document.querySelector('.next-field');
const letters = ["a", "b", "c", "d", "e"];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
    {
        question:
            "Qual foi o período histórico em que a Revolução Industrial teve início?",
        answers: [
            {
                answer: "Século XVII",
                correct: false,
                explanation: "Resposta Incorreta! A Revolução Industrial não começou no século XVII e sim no século XVIII.",

            },
            {
                answer: "Século XVIII",
                correct: true,
                explanation: "Resposta Correta! ",

            },
            {
                answer: "Século XIX",
                correct: false,
                explanation: " Resposta Incorreta! Nesse período, começou a Segunda Revolução Industrial"
            },
            {
                answer: "Século XVI",
                correct: false,
                explanation: "Resposta Incorreta! A Revolução Industrial não começou no século XVI e sim no século XVIII."
            },
        ],
    },
    {
        question:
            "Qual foi a principal fonte de energia usada durante a Primeira Revolução Industrial?",
        answers: [
            {
                answer: "Petróleo",
                correct: false,
                explanation: "Resposta Incorreta! O petróleo era utilizado na Segunda Revolução Industrial"
            },
            {
                answer: "Gás Natural",
                correct: false,
                explanation: "Resposta Incorreta! O carvão foi a principal fonte de energia durante a Primeira Revolução Industrial."
            },
            {
                answer: "Carvão Mineral",
                correct: true,
                explanation: "Resposta Correta!"
            },
            {
                answer: "Energia Solar",
                correct: false,
                explanation: "Resposta Incorreta! O carvão foi a principal fonte de energia durante a Primeira Revolução Industrial."
            },
            {
                answer: "Eletricidade",
                correct: false,
                explanation: "Resposta Incorreta! O carvão foi a principal fonte de energia durante a Primeira Revolução Industrial."
            },
        ],
    },
    {
        question: "Quais foram os principais setores industriais que se desenvolveram na Segunda Revolução Industrial?",
        answers: [
            {
                answer: "Agricultura e mineração",
                correct: false,
                explanation: "Resposta Incorreta! Na Segunda Revolução Industrial, houve avanços significativos nos setores de energia (eletricidade) e transporte (ferrovias e automóveis)."
            },
            {
                answer: "Têxtil e metalurgia",
                correct: false,
                explanation: "Resposta Incorreta! Na Segunda Revolução Industrial, houve avanços significativos nos setores de energia (eletricidade) e transporte (ferrovias e automóveis)."
            },
            {
                answer: "Energia e transporte",
                correct: true,
                explanation: "Resposta Correta!"
            },
            {
                answer: "Educação e saúde",
                correct: false,
                explanation: "Resposta Incorreta! Na Segunda Revolução Industrial, houve avanços significativos nos setores de energia (eletricidade) e transporte (ferrovias e automóveis)."
            },
            {
                answer: "Arte e entretenimento",
                correct: false,
                explanation: "Resposta Incorreta! Na Segunda Revolução Industrial, houve avanços significativos nos setores de energia (eletricidade) e transporte (ferrovias e automóveis)."
            },
        ],
    },
    {
        question: "Quais setores econômicos sofreram os impactos da redução da atividade industrial?",
        answers: [
            {
                answer: " Indústria e serviços",
                correct: true,
                explanation: "Reposta correta!"
            },
            {
                answer: "Tecnologia e comunicações",
                correct: false,
                explanation: "Resposta Incorreta!  A desindustrialização envolve a diminuição do setor industrial em favor do setor de serviços."
            },
            {
                answer: "Agricultura e mineração",
                correct: false,
                explanation: "Resposta Incorreta!  A desindustrialização envolve a diminuição do setor industrial em favor do setor de serviços."
            },
            {
                answer: "Energia e transporte",
                correct: false,
                explanation: "Resposta Incorreta!  A desindustrialização envolve a diminuição do setor industrial em favor do setor de serviços."
            },
        ],
    },
    {
        question: "Quais setores industriais foram priorizados durante o governo de Juscelino Kubitschek (1956-1961) no Brasil?",
        answers: [
            {
                answer: "Serviços financeiros e tecnologia",
                correct: false,
                explanation: "Resposta Incorreta! Os setores priorizados foram Energia e Transporte"
            },
            {
                answer: "Alimentos e vestuário",
                correct: false,
                explanation: "Resposta Incorreta! Os setores priorizados foram Energia e Transporte"
            },
            {
                answer: "Energia e transporte",
                correct: true,
                explanation: "Resposta Correta!"
            },
            {
                answer: "Agricultura e mineração",
                correct: false,
                explanation: "Resposta Incorreta! Os setores priorizados foram Energia e Transporte"
            },
            {
                answer: "Indústria bélica e têxtil",
                correct: false,
                explanation: "Resposta Incorreta! Os setores priorizados foram Energia e Transporte"
            },
        ],
    },
        {
            question: "Quais países foram os pioneiros na industrialização no século XIX?",
            answers: [
                {
                    answer: "Rússia e China",
                    correct: false,
                    explanation: "Resposta Incorreta! Reino Unido e Bélgica foram os países pioneiros na industrialização no século XIX."
                },
                {
                    answer: "Estados Unidos e Brasil",
                    correct: false,
                    explanation: "Resposta Incorreta! Reino Unido e Bélgica foram os países pioneiros na industrialização no século XIX."
                    
                },
                {
                    answer: "Reino Unido e Bélgica",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Japão e Índia",
                    correct: false,
                    explanation: "Resposta Incorreta! Reino Unido e Bélgica foram os países pioneiros na industrialização no século XIX."
                },
                {
                    answer: "Canadá e Austrália",
                    correct: false,
                    explanation: "Resposta Incorreta! Reino Unido e Bélgica foram os países pioneiros na industrialização no século XIX."
                },
            ],
        },

        {
            question: "Quais foram as principais inovações tecnológicas da Revolução Industrial?",
            answers: [
                {
                    answer: "Imprensa e máquina de escrever",
                    correct: false,
                    explanation: "Resposta Incorreta! As principais inovações tecnológicas da Revolução Industrial foram a máquina a vapor e a locomotiva."
                },
                {
                    answer: "Máquina a vapor e locomotiva",
                    correct: true,
                    explanation: "Resposta Correta!"
                    
                },
                {
                    answer: "Computador e telefone",
                    correct: false,
                    explanation: "Resposta Incorreta! As principais inovações tecnológicas da Revolução Industrial foram a máquina a vapor e a locomotiva."
                },
                {
                    answer: "Rádio e Televisão",
                    correct: false,
                    explanation: "Resposta Incorreta! As principais inovações tecnológicas da Revolução Industrial foram a máquina a vapor e a locomotiva. ."
                },
                {
                    answer: "Avião e automóvel",
                    correct: false,
                    explanation: "Resposta Incorreta! As principais inovações tecnológicas da Revolução Industrial foram a máquina a vapor e a locomotiva. ."
                },
            ],
        },
        {
            question: "Qual setor da economia brasileira foi mais influenciado pela industrialização durante a Era Vargas?",
            answers: [
                {
                    answer: "Agricultura",
                    correct: false,
                    explanation: "Resposta Incorreta! O setor mais influenciado foi a Indústria."
                },
                {
                    answer: "Indústria",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Mineração",
                    correct: false,
                    explanation: "Resposta Incorreta! O setor mais influenciado foi a Indústria."
                },
                {
                    answer: "Serviços",
                    correct: false,
                    explanation: "Resposta Incorreta! O setor mais influenciado foi a Indústria."
                },
                {
                    answer: "Comércio",
                    correct: false,
                    explanation: "Resposta Incorreta! O setor mais influenciado foi a Indústria."
                }
            ]
        },
        {
            question: "Quem foi o presidente do Brasil durante a implantação do Plano de Metas?",
            answers: [
                {
                    answer: "Jânio Quadros",
                    correct: false,
                    explanation: "Resposta Incorreta! Quem implementou o Plano de Metas foi Juscelino Kubitschek."
                },
                {
                    answer: "João Goulart",
                    correct: false,
                    explanation: "Resposta Incorreta! Quem implementou o Plano de Metas foi Juscelino Kubitschek."
                },
                {
                    answer: "Juscelino Kubitschek",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Fernando Collor de Mello",
                    correct: false,
                    explanation: "Resposta Incorreta! Quem implementou o Plano de Metas foi Juscelino Kubitschek."
                },
                {
                    answer: "José Sarney",
                    correct: false,
                    explanation: "Resposta Incorreta! Quem implementou o Plano de Metas foi Juscelino Kubitschek."
                }
            ]
        },
        {
            question: "Qual foi o principal objetivo do Plano de Metas?",
            answers: [
                {
                    answer: "Modernizar o setor agrícola",
                    correct: false,
                    explanation: "Resposta Incorreta! O principal objetivo era fomentar a indústria pesada."
                },
                {
                    answer: "Fomentar a indústria pesada",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Estabilizar a moeda",
                    correct: false,
                    explanation: "Resposta Incorreta! O principal objetivo era fomentar a indústria pesada."
                },
                {
                    answer: "Promover a educação",
                    correct: false,
                    explanation: "Resposta Incorreta! O principal objetivo era fomentar a indústria pesada."
                },
                {
                    answer: "Expandir o setor de serviços",
                    correct: false,
                    explanation: "Resposta Incorreta! O principal objetivo era fomentar a indústria pesada."
                }
            ]
        },
        {
            question: "Qual país asiático passou por uma industrialização acelerada após a Segunda Guerra Mundial, tornando-se uma potência industrial?",
            answers: [
                {
                    answer: "Índia",
                    correct: false,
                    explanation: "Resposta Incorreta! O país que teve essa mudança significativa pós 2ª Guerra Mundial foi o Japão."
                },
                {
                    answer: "Brasil",
                    correct: false,
                    explanation: "Resposta Incorreta! O país que teve essa mudança significativa pós 2ª Guerra Mundial foi o Japão."
                },
                {
                    answer: "Japão",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Indonésia",
                    correct: false,
                    explanation: "Resposta Incorreta! O país que teve essa mudança significativa pós 2ª Guerra Mundial foi o Japão."
                },
                {
                    answer: "Coreia do Sul",
                    correct: false,
                    explanation: "Resposta Incorreta! O país que teve essa mudança significativa pós 2ª Guerra Mundial foi o Japão."
                }
            ]
        },
        {
            question: "Durante a Ditadura Militar no Brasil, qual setor econômico recebeu maior investimento?",
            answers: [
                {
                    answer: "Agricultura",
                    correct: false,
                    explanation: "Resposta Incorreta! O setor que teve maior investimento foi da Indústria."
                },
                {
                    answer: "Serviços",
                    correct: false,
                    explanation: "Resposta Incorreta! O setor que teve maior investimento foi da Indústria."
                },
                {
                    answer: "Comércio",
                    correct: false,
                    explanation: "Resposta Incorreta! O setor que teve maior investimento foi da Indústria."
                },
                {
                    answer: "Indústria",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Energia",
                    correct: false,
                    explanation: "Resposta Incorreta! O setor que teve maior investimento foi da Indústria."
                }
            ]
        },
        {
            question: "Qual presidente brasileiro implementou o 'Plano Real' para controlar a inflação?",
            answers: [
                {
                    answer: "Luiz Inácio Lula da Silva",
                    correct: false,
                    explanation: "Resposta Incorreta! Em 1° de julho de 1994, Fernando Henrique Cardoso implementou o Plano Real."
                },
                {
                    answer: "Dilma Rousseff",
                    correct: false,
                    explanation: "Resposta Incorreta! Em 1° de julho de 1994, Fernando Henrique Cardoso implementou o Plano Real."
                },
                {
                    answer: "Fernando Henrique Cardoso",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Jair Bolsonaro",
                    correct: false,
                    explanation: "Resposta Incorreta! Em 1° de julho de 1994, Fernando Henrique Cardoso implementou o Plano Real."
                },
                {
                    answer: "Itamar Franco",
                    correct: false,
                    explanation: "Resposta Incorreta! Em 1° de julho de 1994, Fernando Henrique Cardoso implementou o Plano Real."
                }
            ]
        },
        {
            question: "Qual foi o impacto da Revolução Industrial no meio ambiente global?",
            answers: [
                {
                    answer: "Não teve impacto ambiental",
                    correct: false,
                    explanation: "Resposta Incorreta! Com o aumento da produção em massa, aumentou-se a poluição e a degradação do meio ambiente."
                },
                {
                    answer: " Aumentou a poluição e degradação ambiental",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Reduziu a poluição",
                    correct: false,
                    explanation: "Resposta Incorreta! Com o aumento da produção em massa, aumentou-se a poluição e a degradação do meio ambiente."
                },
                {
                    answer: "Aumentou a preservação ambiental",
                    correct: false,
                    explanation: "Resposta Incorreta! Com o aumento da produção em massa, aumentou-se a poluição e a degradação do meio ambiente."
                },
                {
                    answer: "Promoveu a sustentabilidade",
                    correct: false,
                    explanation: "Resposta Incorreta! Com o aumento da produção em massa, aumentou-se a poluição e a degradação do meio ambiente."
                }
            ]
        },
        {
            question: "Como a Revolução Industrial afetou as condições de trabalho?",
            answers: [
                {
                    answer: "Melhorou as condições de trabalho",
                    correct: false,
                    explanation: "Resposta Incorreta! As condições de trabalho pioraram bastante nesse período."
                },
                {
                    answer: "Manteve as condições de trabalho inalteradas",
                    correct: false,
                    explanation: "Resposta Incorreta! As condições de trabalho pioraram bastante nesse período."
                },
                {
                    answer: "Piorou as condições de trabalho",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Não teve impacto nas condições de trabalho",
                    correct: false,
                    explanation: "Resposta Incorreta! As condições de trabalho pioraram bastante nesse período."
                },
                {
                    answer: "Aboliu o trabalho",
                    correct: false,
                    explanation: "Resposta Incorreta! As condições de trabalho pioraram bastante nesse período."
                }
            ]
        },
        {
            question: "Qual evento político marcou o fim da Ditadura Militar no Brasil?",
            answers: [
                {
                    answer: "A Constituição de 1967",
                    correct: false,
                    explanation: "Resposta Incorreta!"
                },
                {
                    answer: "O Golpe de Estado",
                    correct: false,
                    explanation: "Resposta Incorreta!"
                },
                {
                    answer: "O AI-5",
                    correct: false,
                    explanation: "Resposta Incorreta!"
                },
                {
                    answer: "A Anistia",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "A Constituição de 1988",
                    correct: false,
                    explanation: "Resposta Incorreta!"
                }
            ]
        },
        {
            question: "Qual das seguintes cidades brasileiras foi um importante centro industrial durante a Era Vargas?",
            answers: [
                {
                    answer: "Brasília",
                    correct: false,
                    explanation: "Resposta Incorreta! São Paulo foi um importante centro industrial desse período."
                },
                {
                    answer: "Salvador",
                    correct: false,
                    explanation: "Resposta Incorreta! São Paulo foi um importante centro industrial desse período."
                },
                {
                    answer: "São Paulo",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: "Belo Horizonte",
                    correct: false,
                    explanation: "Resposta Incorreta! São Paulo foi um importante centro industrial desse período."
                },
                {
                    answer: "Rio de Janeiro",
                    correct: false,
                    explanation: "Resposta Incorreta! São Paulo foi um importante centro industrial desse período."
                }
            ]
        },
        {
            question: "Qual foi o papel das ferrovias na Revolução Industrial?",
            answers: [
                {
                    answer: "Facilitaram o transporte de produtos agrícolas.",
                    correct: false,
                    explanation: "Resposta Incorreta! Além de propiciar a entrada de capital estrangeiro no país, tinha, também, o objetivo de incentivar a economia exportadora."
                },
                {
                    answer: "Facilitaram o transporte de mercadorias e pessoas, impulsionando o comércio e a industrialização.",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: " Não tiveram papel na Revolução Industrial.",
                    correct: false,
                    explanation: "Resposta Incorreta! Além de propiciar a entrada de capital estrangeiro no país, tinha, também, o objetivo de incentivar a economia exportadora."
                },
                {
                    answer: "Contribuíram para a urbanização.",
                    correct: false,
                    explanation: "Resposta Incorreta! Além de propiciar a entrada de capital estrangeiro no país, tinha, também, o objetivo de incentivar a economia exportadora."
                },
                {
                    answer: "Aumentaram a poluição ambiental.",
                    correct: false,
                    explanation: "Resposta Incorreta! Além de propiciar a entrada de capital estrangeiro no país, tinha, também, o objetivo de incentivar a economia exportadora e o transporte de pessoas."
                }
            ]
        },
        {
            question: "Como a Revolução Industrial influenciou a distribuição de renda no mundo?",
            answers: [
                {
                    answer: "Reduziu significativamente a desigualdade de renda.",
                    correct: false,
                    explanation: "Resposta Incorreta! A Revolução Industrial, na verdade, aumentou a desigualdade de renda no mundo, em vez de reduzi-la."
                },
                {
                    answer: "Aumentou a desigualdade de renda.",
                    correct: true,
                    explanation: "Resposta Correta!"
                },
                {
                    answer: " Não teve impacto na distribuição de renda.",
                    correct: false,
                    explanation: "Resposta Incorreta! A Revolução Industrial, na verdade, aumentou a desigualdade de renda no mundo, em vez de reduzi-la."
                },
                {
                    answer: "Equilibrou a distribuição de renda.",
                    correct: false,
                    explanation: "Resposta Incorreta! A Revolução Industrial, na verdade, aumentou a desigualdade de renda no mundo, em vez de reduzi-la."
                },
                {
                    answer: "Promoveu a igualdade de renda.",
                    correct: false,
                    explanation: "Resposta Incorreta! A Revolução Industrial, na verdade, aumentou a desigualdade de renda no mundo, em vez de reduzi-la."
                }
            ]
        },
        {
            question: "O que foi o Estado Novo na Era Vargas?",
            answers: [
                {
                    answer: "Um regime democrático",
                    correct: false,
                    explanation: "Resposta Incorreta! O Estado Novo foi um regime autoritário no qual foi responsável pelo fechamento do Congresso."
                },
                {
                    answer: "Um regime parlamentarista",
                    correct: false,
                    explanation: "Resposta Incorreta! O Estado Novo foi um regime autoritário no qual foi responsável pelo fechamento do Congresso."
                },
                {
                    answer: "Um regime militar",
                    correct: false,
                    explanation: "Resposta Incorreta! O Estado Novo foi um regime autoritário no qual foi responsável pelo fechamento do Congresso."
                },
                {
                    answer: "Um regime socialista",
                    correct: false,
                    explanation: "Resposta Incorreta! O Estado Novo foi um regime autoritário no qual foi responsável pelo fechamento do Congresso."
                },
                {
                    answer: "Um regime autoritário",
                    correct: true,
                    explanation: "Resposta Correta!"
                }
            ]
        },
];

// substituição do quizz para a primeira pergunta
function init() {
    // criar primeira pergunta
    createQuestion(0);
}

// Função para desativar todos os botões de resposta
function disableAnswerButtons() {
    const buttons = answerBox.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

// Função para ativar todos os botões de resposta
function enableAnswerButtons() {
    const buttons = answerBox.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = false;
    });
}

// cria uma pergunta
function createQuestion(i) {
    // limpar questão anterior
    const oldButtons = answerBox.querySelectorAll("button");
    oldButtons.forEach((btn) => {
        btn.remove();
    });

    // alterar texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // inserir alternativas
    questions[i].answers.forEach((answer, i) => {
        // cria template botão quizz
        const answerTemplate = document
            .querySelector(".answer-template")
            .cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer["answer"];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);
        answerTemplate.setAttribute("data-explanation", answer["explanation"]);

        // remover hide e template class
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        // inserir alternativa na tela
        answerBox.appendChild(answerTemplate);

        // inserir evento click no botão
        answerTemplate.addEventListener("click", function () {
            if (!this.classList.contains("answered")) {
                checkAnswer(this);
                this.classList.add("answered");
                // Desativa os botões de resposta após o usuário selecionar uma resposta
                const buttons = answerBox.querySelectorAll("button");
                buttons.forEach((button) => {
                    button.disabled = true;
                });
            }
        });
    });

    // incrementar o número da questão
    actualQuestion++;
}


// verificar resposta do usuário
function checkAnswer(btn) {
    // seleciona todos os botões
    const buttons = answerBox.querySelectorAll("button");

    // Verifique se a resposta está correta
    const isCorrect = btn.getAttribute("correct-answer") === "true";

    // Exiba a mensagem de explicação com base na opção selecionada
    const explanation = btn.getAttribute("data-explanation");
    explain.textContent = explanation;

    nextField.classList.add('active')
    
    // Adicione classes apropriadas
    buttons.forEach((button) => {
        if (button === btn) {
            if (isCorrect) {
                button.classList.add("correct-answer");
                // Incremento dos pontos
                points++;
            } else {
                button.classList.add("wrong-answer");
            }
        }
    });

}

// redirecionando para outra questão com o botão

    nextButton.addEventListener('click', () =>{
        redirectButton()
    })
 function redirectButton(){
    nextQuestion();
 }


// limpando o campo que explica a resposta.
function clearExplain() {
    explain.textContent = "";
    nextField.classList.remove('active')
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
    // timer para usuário ver as respostas
    setTimeout(function () {
        // verifica se ainda há perguntas
        if (actualQuestion >= questions.length) {
            // apresenta mensagem de sucesso
            showSuccessMessage();
            return;
        }
        createQuestion(actualQuestion);
        clearExplain();
    });
}

// exibe a tela final
function showSuccessMessage() {
    hideOrShowQuizz();

    // trocar dados tela de sucesso
    // calcular score
    const score = ((points / questions.length) * 100).toFixed(2);

    const displayScore = document.querySelector("#display-score span");
    displayScore.textContent = score.toString();

    //alterar o número de perguntas corretas
    const correctAnswers = document.querySelector("#correct-answers");
    correctAnswers.textContent = points;

    // alterar o total de perguntas
    const totalQuestions = document.querySelector("#questions-qty");
    totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

// reiniciar quizz
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", function () {
    //zerar jogo
    actualQuestion = 0;
    points = 0;
    
    // Limpar a mensagem de explicação
    clearExplain();

    // Remover a classe "answered" de todos os botões
    const buttons = answerBox.querySelectorAll("button");
    buttons.forEach((button) => {
        button.classList.remove("answered");
    });

    // Reativar os botões de resposta
    enableAnswerButtons(); // Ativar os botões novamente

    hideOrShowQuizz();
    init();
});

// inicialização do quizz
init();
