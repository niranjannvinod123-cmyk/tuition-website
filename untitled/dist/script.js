let answers = { q1: null, q2: null };

function setAnswer(question, value, button) {
  answers[`q${question}`] = value;

  // remove "selected" class from both buttons in that question
  const parent = button.closest('.question');
  const buttons = parent.querySelectorAll('button');
  buttons.forEach(btn => btn.classList.remove('selected'));

  // add "selected" class to the clicked button
  button.classList.add('selected');
}

function checkAnswers() {
  const message = document.getElementById('message');
  const q3 = document.getElementById('q3').value.trim();
  const q4 = document.getElementById('q4').value.trim();

  if (answers.q1 === null || answers.q2 === null) {
    message.textContent = 'Please answer the first two questions.';
    message.style.color = 'orange';
    return;
  }

  if (answers.q1 && answers.q2) {
    message.textContent = `thank you! you are eligible for the free tuition. please contact us at number1worldclasstutor@gmail.com `;
    message.style.color = 'green';
  } else if (!answers.q1 && !answers.q2) {
    message.textContent = 'sorry, you are not eligible for our free tuition sessions.';
    message.style.color = 'red';
  } else {
    message.textContent = 'sorry, you are not eligible for our free tuition sessions.';
    message.style.color = 'red ';
  }
}