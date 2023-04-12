let questions = [
    {
        "question": "Frage 1",
        "answer_1": "Antwortmöglichkeit 1",
        "answer_2": "Antwortmöglichkeit 2",
        "answer_3": "Antwortmöglichkeit 3",
        "answer_4": "Antwortmöglichkeit 4",
        "right_answer": 1
    },
    {
        "question": "Frage 2",
        "answer_1": "Antwortmöglichkeit 1",
        "answer_2": "Antwortmöglichkeit 2",
        "answer_3": "Antwortmöglichkeit 3",
        "answer_4": "Antwortmöglichkeit 4",
        "right_answer": 2
    },
    {
        "question": "Frage 3",
        "answer_1": "Antwortmöglichkeit 1",
        "answer_2": "Antwortmöglichkeit 2",
        "answer_3": "Antwortmöglichkeit 3",
        "answer_4": "Antwortmöglichkeit 4",
        "right_answer": 3
    },
    {
        "question": "Frage 4",
        "answer_1": "Antwortmöglichkeit 1",
        "answer_2": "Antwortmöglichkeit 2",
        "answer_3": "Antwortmöglichkeit 3",
        "answer_4": "Antwortmöglichkeit 4",
        "right_answer": 4
    },
];

let currentQuestion = 0;
let correctAnswers = 0;

function init() {
    document.getElementById('nrQuestions').innerHTML = `${questions.length}`;
    showQuestion();
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        renderEndsceen();
    } else {
        let Question = questions[currentQuestion];
        document.getElementById('currentQuestion').innerHTML = `${Question.question}?`;
        document.getElementById('currentAnswer1').innerHTML = `${Question.answer_1}`;
        document.getElementById('currentAnswer2').innerHTML = `${Question.answer_2}`;
        document.getElementById('currentAnswer3').innerHTML = `${Question.answer_3}`;
        document.getElementById('currentAnswer4').innerHTML = `${Question.answer_4}`;
        document.getElementById('nr-Current-Question').innerHTML = `${currentQuestion + 1}`;
    }
}



function answer(selectedAnswer) {
    removeOncklickEvt();
    let rightAnswer = questions[currentQuestion]['right_answer'];
    if (selectedAnswer == rightAnswer) {
        document.getElementById('currentAnswer' + selectedAnswer).parentNode.classList.add('bg-success');
        correctAnswers++;
    } else {
        document.getElementById('currentAnswer' + selectedAnswer).parentNode.classList.add('bg-danger');
        document.getElementById('currentAnswer' + rightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-Btn').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    showQuestion();
    resetButtons();
}


function resetButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById('currentAnswer' + i).parentNode.classList.remove('bg-success', 'bg-danger');
    }
    document.getElementById('next-Btn').disabled = true;
    addOnClickEvt();
}


function removeOncklickEvt (){
    for (let i = 1; i < 5; i++) {
        document.getElementById('currentAnswer' + i).parentNode.removeAttribute('onclick');
    }
}


function addOnClickEvt(){
    for (let i = 1; i < 5; i++) {
        document.getElementById('currentAnswer' + i).parentNode.setAttribute('onclick',`answer(${i})`);
    }
}


function renderEndsceen(){
    document.getElementById('QuestionBody').style.display = 'none';
    document.getElementById('Endscreen').style = '';
    document.getElementById('CorrectAnswer').innerHTML = `${correctAnswers}`;
    document.getElementById('nrQuestionEndSreen').innerHTML = `${questions.length}`;
}
