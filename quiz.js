let quizData = [
    {
        question : 'Which framework is related to JS?',
        a : '.net',
        b : 'flask',
        c : 'react',
        d : 'django',
        correct : 'c'
    },
    {
        question : 'Which is not a programming language?',
        a : 'HTML',
        b : 'Python',
        c : 'java',
        d : 'js',
        correct : 'a'
    },
    {
        question : 'Which is not a framework?',
        a : 'react',
        b : 'javascript',
        c : 'angular',
        d : 'django',
        correct : 'b'
    },
    {
        question : 'CSS stands for?',
        a : 'cascading style state',
        b : 'cascading style sheet',
        c : 'cascading sheet of style',
        d : 'none',
        correct : 'b'
    }
]

let quiz = document.getElementById('quiz');
let answer = document.querySelectorAll('.answer');
let question = document.getElementById('question');
let option_a = document.getElementById('a_value');
let option_b = document.getElementById('b_value');
let option_c = document.getElementById('c_value');
let option_d = document.getElementById('d_value');

let submitBtn = document.getElementById('submit');


let currentQuestion = 0;
let quizScore = 0;

loadQuiz()

function loadQuiz(){
    deselect()

    question.innerHTML = quizData[currentQuestion].question;
    option_a.innerText = quizData[currentQuestion].a;
    option_b.innerText = quizData[currentQuestion].b;
    option_c.innerText = quizData[currentQuestion].c;
    option_d.innerText = quizData[currentQuestion].d;
}

function deselect(){
    answer.forEach(answer=>answer.checked=false)
}
submitBtn.addEventListener('click', ()=>{
    let selectedOption;
    answer.forEach(answer=>{

        if(answer.checked){
            selectedOption=answer.id
        }

    })
    if (selectedOption==quizData[currentQuestion].correct){
        quizScore = quizScore+1
    }
    currentQuestion= currentQuestion+1
    if (currentQuestion==quizData.length){
        document.getElementById('quiz').innerHTML = `<h1>You have answered ${quizScore} correctly out of ${quizData.length}</h1>`
    } else {
        loadQuiz()
    }
})