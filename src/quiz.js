document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const submitButton = document.getElementById("submit");
  const resultText = document.getElementById("result");

  let currentQuestionIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let selectedAnswer = null;

  // Lista de perguntas
  const questions = [
      {
          id: "q1",
          text: "Which AWS storage class should be used for long-term archiving?",
          options: ["Glacier", "Long-Term", "Standard", "Infrequent Access"],
          correct: "Glacier",
      },
      {
          id: "q2",
          text: "What does S3 stand for?",
          options: [
              "Simple Storage Service",
              "Simplified Storage Service",
              "Simple Store Service",
              "Service for Simple Storage",
          ],
          correct: "Simple Storage Service",
      },
      {
          id: "q3",
          text: "Which service provides auto-scaling in AWS?",
          options: ["EC2", "Auto Scaling", "S3", "Lambda"],
          correct: "Auto Scaling",
      },
  ];

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
              <button onclick="restartQuiz()">Try Again</button>
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
      const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

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
      }, 3000);
  });

  // Reiniciar o quiz
  window.restartQuiz = function () {
      currentQuestionIndex = 0;
      correctCount = 0;
      wrongCount = 0;
      submitButton.style.display = "block"; // Exibe o botão de verificar novamente
      showQuestion();
  };

  // Inicia o quiz
  showQuestion();
});
