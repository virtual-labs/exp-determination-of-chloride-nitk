
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Normal adult human body contains _______of chloride.",
      answers: {
        a: "87.1g",
        b: "89.4g",
        c: "96.1g",
        d: "110.4g"
      },
      correctAnswer: "a"
    },

    {
      question: "Why can’t we perform the test at higher pH level? ",
      answers: {
        a: "Potassium chromate may be converted into potassium dichromate (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>) and mask the end point.",
        b: "The silver ions react with hydroxide ions and precipitated as silver hydroxide.",
        c: "Both A and B",
        d: "None"
      },
      correctAnswer: "b"
    },

    {
      question: "Method used to determine chloride is water is  ",
      answers: {
        a: "Mohr's method",
        b: "Winkler's method",
        c: "EDTA method",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Water contaminated with Sodium Chloride creates a higher water density and will settle at the deepest part of the water body where current velocities are low such as in ponds and lakes. ",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Concentration of chloride in water suitable for drinking should be less than ",
      answers: {
        a: "1000mg/l",
        b: "750mg/l",
        c: "500mg/l",
        d: "250mg/l"
      },
      correctAnswer: "d"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
