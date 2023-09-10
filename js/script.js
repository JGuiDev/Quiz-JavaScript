// declaração de variáveis
const question = document.querySelector("#question");
const answerBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const explain = document.getElementById("explicacao");
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
        question: "Quais setores da economia foram afetados pela desindustrialização?",
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

    // Exibir próxima pergunta
    nextQuestion();
}

// limpando o campo que explica a resposta.
function clearExplain() {
    explain.textContent = "";
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
    }, 3000);
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
