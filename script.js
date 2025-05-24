// Select elements
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

// Data për quiz-et
const quizzes = {
  "quiz1.html": [ // Pi Day quiz
    { question: "Çfarë përfaqëson Pi?", answers: { a: "Një frut", b: "Një konstantë matematikore", c: "Një festë" }, correct: "b" },
    { question: "Cila është vlera e përafërt e Pi?", answers: { a: "3.14", b: "2.71", c: "1.41" }, correct: "a" },
    { question: "Pi është raporti i:", answers: { a: "Diametrit me rrezen", b: "Perimetrit me diametrin", c: "Rrezes me sipërfaqen" }, correct: "b" },
    { question: "Cila shkronjë greke përfaqëson Pi?", answers: { a: "Alfa", b: "Pi", c: "Gamma" }, correct: "b" },
    { question: "Sa shifra të Pi përdoren zakonisht në llogaritje?", answers: { a: "2", b: "5", c: "Pafund" }, correct: "b" },
    { question: "Kur festohet Dita e Pi-së?", answers: { a: "14 Mars", b: "14 Prill", c: "22 Korrik" }, correct: "a" },
    { question: "Cila është Pi deri në 10 shifra pas presjes dhjetore?", answers: { a: "3.1415926535", b: "3.1415926536", c: "3.1415926534" }, correct: "a" },
    { question: "Cili është simboli i Pi?", answers: { a: "π", b: "δ", c: "σ" }, correct: "a" },
    { question: "Pi është shembull i cilit lloj numri?", answers: { a: "Iracional", b: "Racional", c: "Prim" }, correct: "a" },
    { question: "Cila është shifra e 100-të e Pi?", answers: { a: "9", b: "4", c: "7" }, correct: "b" }
  ],
  
  "quiz2.html": [ // Math quiz
    { question: "Sa është 5 + 3?", answers: { a: "8", b: "9", c: "7" }, correct: "a" },
    { question: "Sa është 7 * 9?", answers: { a: "63", b: "72", c: "56" }, correct: "a" },
    { question: "Sa është 100 / 4?", answers: { a: "25", b: "20", c: "15" }, correct: "a" },
    { question: "Sa është 15^2?", answers: { a: "225", b: "200", c: "250" }, correct: "a" },
    { question: "Nëse x = 4, sa është 3x^2 - 2x + 5?", answers: { a: "45", b: "33", c: "40" }, correct: "a" },

    // Pyetjet më të vështira të reja:
    { question: "Sa është katrori i 25?", answers: { a: "625", b: "500", c: "700" }, correct: "a" },
    { question: "Sa është rrënja katrore e 784?", answers: { a: "28", b: "32", c: "30" }, correct: "a" },
    { question: "Sa është 4^4?", answers: { a: "256", b: "124", c: "512" }, correct: "a" },
    { question: "Nëse një rreth ka rrezen 12 cm, sa është sipërfaqja (pi = 3.14)?", answers: { a: "452.16 cm²", b: "440.56 cm²", c: "500.00 cm²" }, correct: "a" },

    // Pyetje më të avancuara dhe me shumë hapa:
    { question: "Sa është 3x^2 - 7x + 5 =0 për x?", answers: { a: "2 dhe -1", b: "-2 dhe 1", c: "-1 dhe 2" }, correct: "a" },
    { question: "Nëse një trekëndësh kenddrejt ka brinjet 6 cm, 8 cm dhe 10 cm, cila është sipërfaqja e tij?", answers: { a: "24 cm²", b: "30 cm²", c: "48 cm²" }, correct: "a" },
    { question: "Sa është 3! ?", answers: { a: "12", b: "6", c: "10" }, correct: "b" },
    { question: "Një rreth ka një rreze prej 10 cm. Sa është gjatësia e tij? (pi = 3.14)", answers: { a: "62.8 cm", b: "60 cm", c: "70 cm" }, correct: "a" }
  ],

  "quiz3.html": [ // Science quiz
    { question: "Cili është elementi kimik me simbolin O?", answers: { a: "Oxigjeni", b: "Oksidi", c: "Osmium" }, correct: "a" },
    { question: "Sa është temperatura e duhur për të pasur ujë në gjendje të lëngshme?", answers: { a: "0°C", b: "100°C", c: "50°C" }, correct: "a" },
    { question: "Cila është formula e ujit?", answers: { a: "H2O", b: "H2SO4", c: "CO2" }, correct: "a" },
    { question: "Cili është planeti më i afërt me Diellin?", answers: { a: "Venusi", b: "Merkuri", c: "Toka" }, correct: "b" },
    { question: "Cili është procesi përmes të cilit bimët bëjnë ushqim?", answers: { a: "Fotosinteza", b: "Respirimi", c: "Dhembja" }, correct: "a" },
    { question: "Cila është ngjyra që përdoret për të përfaqësuar botën e gjallë në grafikun e ekosistemit?", answers: { a: "E kuqe", b: "E gjelbër", c: "E kaltër" }, correct: "b" },
    { question: "Cili është elementet që krijojnë molekulën e CO2?", answers: { a: "Karboni dhe oksigjeni", b: "Hidrogjeni dhe oksigjeni", c: "Karboni dhe azoti" }, correct: "a" },
    { question: "Si quhet procesi që përdor shigjetat elektrike për të transportuar informacione në trurin e njeriut?", answers: { a: "Impulsi nervor", b: "Fotosinteza", c: "Energji elektrike" }, correct: "a" },
    { question: "Sa vjet mund të jetojë një dhelpër në natyrë?", answers: { a: "4-5 vjet", b: "10-15 vjet", c: "20 vjet" }, correct: "a" },
    { question: "Çfarë është një element në tabelën periodike?", answers: { a: "Një material që nuk mund të ndahet më tej", b: "Një substancë që ka vetëm një tip atomi", c: "Një lloj molekule" }, correct: "b" }
  ]
};

// Merr quiz-in aktual nga URL-ja
const quizName = window.location.pathname.split('/').pop();
const questions = quizzes[quizName];

// Krijo quiz-in dinamikisht
function buildQuiz() {
  const output = questions.map((q, index) => {
    const answers = Object.keys(q.answers).map(
      key =>
        `<label>
          <input type="radio" name="question${index}" value="${key}">
          ${q.answers[key]}
        </label>`
    ).join('');
    return `<div class="question">${q.question}</div>
            <div class="answers">${answers}</div>`;
  });
  quizContainer.innerHTML = output.join('');
}

// Trego rezultatet
function showResults() {
  const answers = quizContainer.querySelectorAll('.answers');
  let score = 0;

  questions.forEach((q, i) => {
    const selected = answers[i].querySelector('input[name="question' + i + '"]:checked');
    if (selected && selected.value === q.correct) {
      score++;
      answers[i].style.color = 'green';
    } else {
      answers[i].style.color = 'red';
    }
  });

  resultContainer.innerHTML = `Keni marrë ${score} nga ${questions.length} pyetje të sakta.`;
}

// Inicializo quiz-in
buildQuiz();
submitButton.addEventListener('click', showResults);
