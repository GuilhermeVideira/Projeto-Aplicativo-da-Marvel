let correctAnswers = 0;
let currentQuestion = 1; // Inicialmente, estamos na primeira pergunta

function checkAnswer(isCorrect) {
  if (isCorrect) {
    correctAnswers++;
  }

  if (currentQuestion < 2) {
    // Redirecionar para a próxima pergunta
    currentQuestion++;
    window.location.href = `pergunta2${currentQuestion}.html`;
  } else {
    // Mostrar a quantidade de respostas corretas em uma página final
    window.location.href = `QuizResultado.html${correctAnswers}`;
  }
}
