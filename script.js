const quizData = [
    {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "HighText Machine Language",
              "Hyperlinking and Text Management Language", "Home Tool Markup Language"],
    answer: 0
  },
   {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
   {
    question: "Which of the following is NOT a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: 2
  },
  {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Strong Question Language",
              "Structured Question Language", "Style Question Language"],
    answer: 0
  },
  {
    question: "What is the name of the protocol used to securely browse the web?",
    options: ["FTP", "HTTP", "HTTPS", "SSH"],
    answer: 2
  },
  {
    question: "Which company developed the Java programming language?",
    options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
    answer: 1
  },
   {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    answer: 1
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "Which of the following is an operating system?",
    options: ["BIOS", "HTTP", "Linux", "HTML"],
    answer: 2
  },
  {
    question: "2. Which language is used for web apps?",
    options: ["PHP", "Python", "JavaScript", "All of the above"],
    answer: 3
  },
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");

function loadQuestion() {
  const current = quizData[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.classList.add("hide");

  current.options.forEach((opt, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(index, current.answer);
    li.appendChild(btn);
    optionsEl.appendChild(li);
  });
}

function selectAnswer(selectedIndex, correctIndex) {
  const buttons = document.querySelectorAll("#options button");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIndex) btn.classList.add("correct");
    else if (idx === selectedIndex) btn.classList.add("wrong");
  });

  feedbackEl.textContent =
    selectedIndex === correctIndex ? "✅ Correct!" : "❌ Wrong!";
  if (selectedIndex === correctIndex) score++;

  nextBtn.classList.remove("hide");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hide");
  resultBox.classList.remove("hide");
  scoreText.textContent = `You scored ${score} out of ${quizData.length}.`;
}

// Start quiz
loadQuestion();
