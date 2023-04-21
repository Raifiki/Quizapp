let allCatagories = [
    [    {
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
        }
    ],
    [    {
            "question": "Frage 11",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 1
        },
        {
            "question": "Frage 12",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 2
        },
        {
            "question": "Frage 13",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 3
        },
        {
            "question": "Frage 14",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 4
        }
    ],
    [    {
            "question": "Frage 21",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 1
        },
        {
            "question": "Frage 22",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 2
        },
        {
            "question": "Frage 23",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 3
        },
        {
            "question": "Frage 24",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 4
        }
    ],    
    [    {
            "question": "Frage 31",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 1
        },
        {
            "question": "Frage 32",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 2
        },
        {
            "question": "Frage 33",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 3
        },
        {
            "question": "Frage 34",
            "answer_1": "Antwortmöglichkeit 1",
            "answer_2": "Antwortmöglichkeit 2",
            "answer_3": "Antwortmöglichkeit 3",
            "answer_4": "Antwortmöglichkeit 4",
            "right_answer": 4
        }
    ]      
];
let currentCategorie = 0;
let questions = allCatagories[currentCategorie];


let currentQuestion = 0;
let correctAnswers = 0;
let AUDIO_SUCCESS = new Audio('sound/correct.mp3');
let AUDIO_FAIL = new Audio('sound/wrong.mp3');


function init() {
    resetQuiz();
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
        styleProgressBar();
    }
}



function answer(selectedAnswer) {
    removeOncklickEvt();
    let rightAnswer = questions[currentQuestion]['right_answer'];
    if (selectedAnswer == rightAnswer) {
        document.getElementById('currentAnswer' + selectedAnswer).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        correctAnswers++;
    } else {
        document.getElementById('currentAnswer' + selectedAnswer).parentNode.classList.add('bg-danger');
        document.getElementById('currentAnswer' + rightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
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
    document.getElementById('Endscreen').style.display = 'flex';
    document.getElementById('CorrectAnswer').innerHTML = `${correctAnswers}`;
    document.getElementById('nrQuestionEndSreen').innerHTML = `${questions.length}`;
}

function styleProgressBar(){
    let progBar = document.getElementById('progress-bar');
    let progress = (currentQuestion+1)/(questions.length)*100;
    progBar.style.width = `${progress}%`;
    progBar.innerHTML = `${Math.round(progress)}%`;
}


function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    document.getElementById('Endscreen').style.display = 'none';
    document.getElementById('Startscreen').style.display = 'none';
    document.getElementById('QuestionBody').style.display = 'unset';
}

function chooseCategorie(idx){
    currentCategorie = idx;
    questions = allCatagories[currentCategorie];
    init();
    setNavTabStyle(idx);
}

function setNavTabStyle(idx){
    let navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    navLinks[idx].classList.add('active');
}