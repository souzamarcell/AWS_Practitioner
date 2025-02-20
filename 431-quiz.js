document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const submitButton = document.getElementById("submit");
    const resultText = document.getElementById("result");

    let currentQuestionIndex = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let selectedAnswer = null;
    let questions = [];

    // Função para embaralhar um array
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Exibir o menu de seleção antes de começar o quiz
    function showMenu() {
        quizContainer.innerHTML = `
            <h2>Select a Question Set:</h2>
            <button onclick="startQuiz(window.questions1)">Quiz 1</button>
            <button onclick="startQuiz(window.questions2)">Quiz 2</button>
            <button onclick="startQuiz(window.questions3)">Quiz 3</button>
        `;
        submitButton.style.display = "none"; // Esconde o botão até o quiz começar
    }

    // Iniciar o quiz com um conjunto específico de perguntas
    window.startQuiz = function (selectedQuestions) {
        questions = shuffleArray(selectedQuestions); // Embaralha as perguntas
        currentQuestionIndex = 0;
        correctCount = 0;
        wrongCount = 0;
        submitButton.style.display = "block"; // Exibe o botão de verificar
        showQuestion();
    };

    // Função para exibir a pergunta atual
    function showQuestion() {
        quizContainer.innerHTML = ""; // Limpa o conteúdo anterior
        resultText.textContent = ""; // Reseta o feedback

        if (currentQuestionIndex >= questions.length) {
            // Final do quiz
            quizContainer.innerHTML = `
                <h2>🎉 Quiz Finished!</h2>
                <p>✅ Correct answers: <b>${correctCount}</b></p>
                <p>❌ Wrong answers: <b>${wrongCount}</b></p>
                <button onclick="showMenu()">Choose Another Quiz</button>
            `;
            submitButton.style.display = "none"; // Esconde o botão de verificar
            return;
        }

        const question = questions[currentQuestionIndex];

        // Cria a pergunta
        const questionElement = document.createElement("h3");
        questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${question.text}`;
        quizContainer.appendChild(questionElement);

        // Embaralhar as alternativas
        const shuffledOptions = shuffleArray([...question.options]);

        // Criar opções de resposta
        shuffledOptions.forEach((option) => {
            const label = document.createElement("label");
            label.classList.add("option-label");
            label.innerHTML = `
                <input type="radio" name="quiz" value="${option}">
                ${option}
            `;
            quizContainer.appendChild(label);
        });

        selectedAnswer = null; // Resetar a resposta selecionada
    }

    // Captura a resposta selecionada
    quizContainer.addEventListener("change", (event) => {
        if (event.target.name === "quiz") {
            selectedAnswer = event.target.value;
        }
    });

    // Verifica a resposta e avança para a próxima questão
    submitButton.addEventListener("click", () => {
        if (!selectedAnswer) {
            resultText.textContent = "⚠️ Please select an answer!";
            return;
        }

        const question = questions[currentQuestionIndex];

        if (selectedAnswer === question.correct) {
            resultText.innerHTML = "✅ Correct!";
            correctCount++;
        } else {
            resultText.innerHTML = `❌ Wrong! The correct answer is: <b>${question.correct}</b>`;
            wrongCount++;
        }

        // Avança para a próxima pergunta após 2 segundos
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 2000);
    });

    // Exibir o menu de seleção ao carregar a página
    showMenu();
});
