







// const btn1 = document.getElementById("button1")
// const btn2 = document.getElementById("button2")
// const btn3 = document.getElementById("button3")
// const btn4 = document.getElementById("button4")
// const buttons = [btn1, btn2, btn3, btn4];

const buttons = [
  document.getElementById("button1"),
  document.getElementById("button2"),
  document.getElementById("button3"),
  document.getElementById("button4")
];
const nxt = document.getElementById("nextBtn")
const vraag = document.getElementById("question")
const score = document.getElementById("score")
let scoreadd = 0
let currentQuestion = 0;
let answered = false


const vragen = [
    'Welke waarde is “falsy”?',
    "Welke keyword gebruik je het meest om een variabele te maken?", 
    "Hoe log je iets in de console?", 
    "Wat betekent === in JavaScript?", 
    'Wat is de uitkomst van 2 + "2"?', 
    'Welke datatype is "Hallo"?', 
    'Wat geeft typeof 10 terug?', 
    'Hoe maak je een array?', 
    'Hoe haal je het 1e element uit een array arr?', 
    'Welke loop gebruik je vaak om iets meerdere keren te herhalen?', 
    'Wat doet if?', 
    'Wat is de uitkomst van 5 > 10?', 
    'Hoe schrijf je een functie in JS?', 
    'Wat doet document.getElementById("test")?', 
    'Wat doet addEventListener?'
]
const answers = [
    '0',
    'let', 
    'console.log()', 
    'Waarde + type vergelijken', 
    '"22"', 
    'string', 
    '"number"', 
    '[1,2,3]', 
    'arr[0]', 
    'for', 
    'Controleert een voorwaarde', 
    'false', 
    'function mijnFunctie()', 
    'Het pakt een HTML element met ID "test"?', 
    'Een event (klik etc.) koppelen'
]


const questionsWithOptions = [
  { correct: "0", options: ["0", "1", "true", "null"] },

  { correct: "let", options: ["let", "make", "varible", "create"] },

  { correct: "console.log()", options: ["console.log()", "console.print()", "print()", "log.console()"] },

  { correct: "Waarde + type vergelijken", options: ["Waarde + type vergelijken", "Alleen waarde vergelijken", "Optellen", "Groter dan"] },

  { correct: '"22"', options: ['"22"', '"4"', "4", "Error"] },

  { correct: "string", options: ["string", "number", "boolean", "object"] },

  { correct: '"number"', options: ['"number"', '"int"', '"float"', '"digit"'] },

  { correct: "[1,2,3]", options: ["[1,2,3]", "{1,2,3}", "(1,2,3)", "<1,2,3>"] },

  { correct: "arr[0]", options: ["arr[0]", "arr(0)", "arr{0}", "arr<0>"] },

  { correct: "for", options: ["for", "repeat", "loop", "next"] },

  { correct: "Controleert een voorwaarde", options: ["Controleert een voorwaarde", "Maakt een functie", "Print tekst", "Stopt de code"] },

  { correct: "false", options: ["false", "true", "0", "null"] },

  { correct: "function mijnFunctie()", options: ["function mijnFunctie()", "func mijnFunctie()", "def mijnFunctie()", "fun mijnFunctie()"] },

  { correct: 'Het pakt een HTML element met ID "test"?', options: [
      'Het pakt een HTML element met ID "test"?',
      "Het telt IDs",
      "Het maakt een nieuwe ID",
      "Het verwijdert een element"
    ]
  },

  { correct: "Een event (klik etc.) koppelen", options: [
      "Een event (klik etc.) koppelen",
      "Een vraag toevoegen",
      "Een variable maken",
      "HTML verwijderen"
    ]
  }
];



// function pick_question() {
    // let x = Math.floor(Math.random() * length(vragen))
    // let current_question = vragen.pop(x)
    // let antwoord = answers.pop(x)

        // vraag.innerHTML(current_question)
    // let random_button = buttons[Math.floor(Math.random() * buttons.length)];
    // random_button.textContent = current_question
    // buttons[random_button].dataset.correct = "true"


    // let w = 0
    // for (let i = 0; i < buttons.length; i++) {


    // } 
// }
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function showQuestion(questionObj) {
  const shuffledOptions = shuffle([...questionObj.options]);
  buttons.forEach((btn, index) => {
    btn.textContent = shuffledOptions[index];
    btn.dataset.correct =
    shuffledOptions[index] === questionObj.correct ? "true" : "false";
  });
}


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {

    if (answered) return;
    answered = true
  
    if (btn.dataset.correct === "true") {
      alert("dat is correct");
      scoreadd += 900;
      score.innerHTML = scoreadd;
    } else {
      alert("dat is niet goed");
    }
  });
});


const times = 5;

nxt.addEventListener("click", () => {

  if (currentQuestion >= vragen.length) {
    alert("Quiz klaar!");
    return;
  }
  answered = false
  vraag.innerHTML = vragen[currentQuestion];
  showQuestion(questionsWithOptions[currentQuestion]);

  currentQuestion++;
});
vraag.innerHTML = vragen[currentQuestion];
showQuestion(questionsWithOptions[currentQuestion]);
currentQuestion++;
