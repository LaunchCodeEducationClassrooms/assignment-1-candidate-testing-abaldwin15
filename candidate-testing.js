const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = ["Who was the first American woman in space? ", "true or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"]
let candidateAnswers = [];


question = "Who was the first American woman in space? ";
correctAnswer = "Sally Ride";
candidateAnswer = " ";

function askForName() {
  candidateName = input.question("Please enter your name: ");
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(question);//
for (let i = 0; i < questions.length; i++) {
  candidateAnswers.push(input.question(questions[i]));
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log("\nCandidate Name: ", candidateName);

let value = 0

for (i = 0; i <candidateAnswers.length && i < correctAnswers.length && i < questions.length; i++) {
  console.log(`\n${value += 1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`);
}


  let grade;
  let numberOfCorrectAnswers = 0

  for (i = 0; i < candidateAnswers.length && correctAnswers.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      numberOfCorrectAnswers += 1;
    }
  }

  grade = (numberOfCorrectAnswers/questions.length) * 100
  
  console.log(`\n>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} out of ${questions.length} responses correct) <<<`)

  if (grade >= 80) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }

  return grade;
  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome to the candidate quiz, ${candidateName}.`);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};