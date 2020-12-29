
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
      question: "The Mohr's method for determination of chloride in water should be done in pH range",
      answers: {
        a: "1 - 3.5",
        b: "3.5 - 6",
        c: "6.5 - 9",
        d: "9 - 12.5"
      },
      correctAnswer: "c"
    },
    {
      question: "The AgNO<sub>3</sub> reacts with chloride ion in a ratio of ",
      answers: {
        a: "1:1",
        b: "1:2",
        c: "1:3",
        d: "2:1"
      },
      correctAnswer: "a"
    },
    {
      question: "Gravimetric method or Volhard's method is used when water sample is ",
      answers: {
        a: "Neutral",
        b: "Highly acidic",
        c: "Highly basic",
        d: "None of these"
      },
      correctAnswer: "b"
    },
    {
        question: "How excess chloride can corrode concrete?",
        answers: {
          a: "By extracting Iron",
          b: "By extracting Aluminium",
          c: "Does not Corrode",
          d: "By extracting Calcium"
        },
        correctAnswer: "d"
      },
    {
        question: "What is the permissible limit of chloride in drinking water?",
    answers: {
          a: "Less than 150mg/l",
          b: " Less than 250mg/l",
          c: "Less than 500mg/l",
          d: " Less than 1000mg/l"
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
