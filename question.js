// Sample questions for the quiz
const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: "Delhi"
    },
    {
      question: "Who wrote the national anthem of India?",
      options: ["Rabindranath Tagore", "Mahatma Gandhi", "B. R. Ambedkar", "Sarojini Naidu"],
      answer: "Rabindranath Tagore"
    },
    {
      question: "What is the currency of India?",
      options: ["Dollar", "Rupee", "Euro", "Pound"],
      answer: "Rupee"
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
  
   
    optionsElement.innerHTML = '';
  
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
  
    currentQuestion.options.forEach(option => {
      const div = document.createElement('div');
      div.classList.add('form-check');
      div.innerHTML = `
        <input class="form-check-input" type="radio" name="mcqOption" id="${option}" value="${option}">
        <label class="form-check-label" for="${option}">${option}</label>
      `;
      optionsElement.appendChild(div);
    });
  }
  
 
  document.getElementById('nextButton').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      alert("You have reached the end of the quiz.");
    }
  });
  
  document.getElementById('submitButton').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="mcqOption"]:checked');
    if (!selectedOption) {
      alert("Please select an option before submitting.");
      return;
    }
  
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption.value === currentQuestion.answer;
  
    alert(isCorrect ? "Correct!" : `Wrong! The correct answer is ${currentQuestion.answer}`);
  });
  
 
  window.onload = loadQuestion;
  