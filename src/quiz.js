const questions = [
  {
      id: "q1",
      text: "Qual é a capital da França?",
      options: ["Londres", "Paris", "Berlim", "Madri"],
      correct: "Paris"
  },
  {
      id: "q2",
      text: "Quanto é 5 + 3?",
      options: ["5", "8", "10", "7"],
      correct: "8"
  },
  {
      id: "q3",
      text: "Qual é a cor do céu em um dia claro?",
      options: ["Verde", "Azul", "Vermelho", "Amarelo"],
      correct: "Azul"
  }
];

const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit");
const resultDisplay = document.getElementById("result");

// Gerar perguntas no HTML
questions.forEach((q) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const questionText = document.createElement("p");
  questionText.innerText = q.text;
  questionDiv.appendChild(questionText);

  q.options.forEach((option) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="${q.id}" value="${option}"> ${option}`;
      questionDiv.appendChild(label);
  });

  quizContainer.appendChild(questionDiv);
});

// Verificar respostas
submitButton.addEventListener("click", () => {
  let score = 0;
  questions.forEach((q) => {
      const selectedOption = document.querySelector(`input[name="${q.id}"]:checked`);
      if (selectedOption && selectedOption.value === q.correct) {
          score++;
      }
  });

  resultDisplay.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
});
  