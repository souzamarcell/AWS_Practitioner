document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const submitButton = document.getElementById("submit");
  const resultText = document.getElementById("result");

  let currentQuestionIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let selectedAnswer = null;

  // 🔹 Perguntas especiais para ADMIN
  let questionsAdmin = [
      {
          id: "q1",
          text: "What is an AWS root user?",
          options: ["Admin account", "IAM User", "Guest account", "S3 Bucket Owner"],
          correct: "Admin account",
      },
      {
          id: "q2",
          text: "What service allows running containerized applications in AWS?",
          options: ["EC2", "ECS", "RDS", "S3"],
          correct: "ECS",
      },
      {
          id: "q3",
          text: "Which AWS service is used for identity management?",
          options: ["IAM", "CloudTrail", "Lambda", "EC2"],
          correct: "IAM",
      },
  ];

  function shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
  }

  function showQuestion() {
      quizContainer.innerHTML = "";
      resultText.textContent = "";

      if (currentQuestionIndex >= questionsAdmin.length) {
          quizContainer.innerHTML = `
              <h2>🎉 Admin Quiz Completed!</h2>
              <p>✅ Correct answers: <b>${correctCount}</b></p>
              <p>❌ Wrong answers: <b>${wrongCount}</b></p>
              <button onclick="window.location.reload()">Try Again</button>
          `;
          submitButton.style.display = "none";
          return;
      }

      const question = questionsAdmin[currentQuestionIndex];
      const questionElement = document.createElement("h3");
      questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${question.text}`;
      quizContainer.appendChild(questionElement);

      const shuffledOptions = shuffleArray([...question.options]);

      shuffledOptions.forEach((option) => {
          const label = document.createElement("label");
          label.innerHTML = `
              <input type="radio" name="quiz" value="${option}">
              ${option}
          `;
          quizContainer.appendChild(label);
      });

      selectedAnswer = null;
  }

  quizContainer.addEventListener("change", (event) => {
      if (event.target.name === "quiz") {
          selectedAnswer = event.target.value;
      }
  });

  submitButton.addEventListener("click", () => {
      if (!selectedAnswer) {
          resultText.textContent = "⚠️ Please select an answer!";
          return;
      }

      const question = questionsAdmin[currentQuestionIndex];

      if (selectedAnswer === question.correct) {
          resultText.innerHTML = "✅ Correct!";
          correctCount++;
      } else {
          resultText.innerHTML = `❌ Wrong! The correct answer is: <b>${question.correct}</b>`;
          wrongCount++;
      }

      setTimeout(() => {
          currentQuestionIndex++;
          showQuestion();
      }, 2000);
  });

  showQuestion();
});
