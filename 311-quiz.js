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
        quizContainer.innerHTML = `
            <h2>AWS-Certified-Cloud-Practitioner</h2>
            <p id="welcome-message"></p> <!-- Mostra o nome do usuário -->
            <h2>Select a Question Set:</h2>
            <button onclick="startQuiz(window.questions1)">Quiz 1</button>
            <button onclick="startQuiz(window.questions2)">Quiz 2</button>
            <button onclick="startQuiz(window.questions3)">Quiz 3</button>
            <button onclick="startQuiz(window.questions4)">Quiz 4</button>
            <button onclick="startQuiz(window.questions5)">Quiz 5</button>
            <button onclick="startQuiz(window.questions6)">Quiz 6</button>
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
        }, 5000); // Avança em 5 segundos se o usuário não apertar o botão
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
