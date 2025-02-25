document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const submitButton = document.getElementById("submit");
    const resultText = document.getElementById("result");
    const nextButton = document.createElement("button");

    let currentQuestionIndex = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let selectedAnswers = [];
    let questions = [];
    let autoNextTimeout;

    // Configuração do botão "Next Question"
    nextButton.textContent = "Next Question";
    nextButton.style.display = "none";
    nextButton.addEventListener("click", () => {
        clearTimeout(autoNextTimeout); // Cancela a troca automática se o usuário apertar o botão
        nextQuestion();
    });

    // Função para embaralhar um array
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Exibir o menu de seleção antes de começar o quiz
    function showMenu() {
        // <h2>6° Ano - Disciplinas</h2>
        quizContainer.innerHTML = `
            <p id="welcome-message"></p> <!-- Mostra o nome do usuário -->
            <h2>Selecione um grupo de 10 questões:</h2>
            <button onclick="startQuiz(window.questions1)">Questões 01</button>
            <button onclick="startQuiz(window.questions2)">questões 02</button>           
            <button onclick="startQuiz(window.questions3)">questões 03</button>           
            <button onclick="startQuiz(window.questions4)">questões 04</button>           
            <button onclick="startQuiz(window.questions4)">questões 05</button>           
            <button onclick="startQuiz(window.questions4)">questões 06</button>           
            <button onclick="startQuiz(window.questions4)">questões 07</button>           
            <button onclick="startQuiz(window.questions4)">questões 08</button>           
        `;
        submitButton.style.display = "none";
        nextButton.style.display = "none";
    }

    // Iniciar o quiz com um conjunto específico de perguntas
    window.startQuiz = function (selectedQuestions) {
        questions = shuffleArray(selectedQuestions);
        currentQuestionIndex = 0;
        correctCount = 0;
        wrongCount = 0;
        submitButton.style.display = "block";
        nextButton.style.display = "none";
        showQuestion();
    };

    // Função para exibir a pergunta atual
    function showQuestion() {
        quizContainer.innerHTML = "";
        resultText.textContent = "";
        selectedAnswers = [];
        nextButton.style.display = "none";

        if (currentQuestionIndex >= questions.length) {
            // Final do quiz
            quizContainer.innerHTML = `
                <h2>🎉 Quiz Finished!</h2>
                <p>✅ Correct answers: <b>${correctCount}</b></p>
                <p>❌ Wrong answers: <b>${wrongCount}</b></p>
                <button onclick="window.location.href='index.html'">Choose Another Quiz</button>                
                `;
            submitButton.style.display = "none";
            return;
        }
        // <button onclick="showMenu()">Choose Another Quiz</button>

        const question = questions[currentQuestionIndex];

        // Cria a pergunta
        const questionElement = document.createElement("h3");
        questionElement.textContent = `${currentQuestionIndex + 1}: ${question.text}`;
        quizContainer.appendChild(questionElement);

        // Embaralha as alternativas
        const shuffledOptions = shuffleArray([...question.options]);

        // Criar opções de resposta
        shuffledOptions.forEach((option) => {
            const label = document.createElement("label");
            label.classList.add("option-label");
            label.innerHTML = `
                <input type="${question.multiple ? "checkbox" : "radio"}" name="quiz" value="${option}">
                ${option}
            `;
            quizContainer.appendChild(label);
        });

        selectedAnswers = [];
    }

    // Captura a resposta selecionada
    quizContainer.addEventListener("change", (event) => {
        const question = questions[currentQuestionIndex];

        if (question.multiple) {
            if (event.target.checked) {
                selectedAnswers.push(event.target.value);
            } else {
                selectedAnswers = selectedAnswers.filter(answer => answer !== event.target.value);
            }
        } else {
            selectedAnswers = [event.target.value];
        }
    });

    // Verifica a resposta e exibe o botão "Next Question"
    submitButton.addEventListener("click", () => {
        if (selectedAnswers.length === 0) {
            resultText.textContent = "⚠️ Please select an answer!";
            return;
        }

        const question = questions[currentQuestionIndex];

        let isCorrect = false;
        if (question.multiple) {
            isCorrect =
                selectedAnswers.length === question.correct.length &&
                selectedAnswers.every(ans => question.correct.includes(ans));
        } else {
            isCorrect = selectedAnswers[0] === question.correct[0];
        }

        if (isCorrect) {
            resultText.innerHTML = "✅ Correct!";
            correctCount++;
        } else {
            // let correctAnswerText = `❌ Wrong! The correct answer is: <b>${question.correct.join(", ")}</b>`;
            let correctAnswerText = `❌ Wrong! The correct answer is:<br>
                <span style="color: red; font-weight: bold; display: block; margin-top: 5px; line-height: 2;">
                    ${question.correct.join("<br>")}
                </span>`;

            if (question.explanation) {
                correctAnswerText += `<br><i>Explanation: ${question.explanation}</i>`;
            }
            resultText.innerHTML = correctAnswerText;
            wrongCount++;
        }

        // Exibe o botão "Next Question"
        nextButton.style.display = "block";

        // Define um tempo para avançar automaticamente
        autoNextTimeout = setTimeout(() => {
            nextQuestion();
        }, 20000); // Avança em 20 segundos se o usuário não apertar o botão
    });

    function nextQuestion() {
        currentQuestionIndex++;
        showQuestion();
    }

    // Exibir o menu de seleção ao carregar a página
    showMenu();

    // Adiciona o botão "Next Question" ao final da página
    document.body.appendChild(nextButton);
});
