const quizData = [
    {
        question: 'Favorite game of Konstantin',
        a: 'Doom Eternal',
        b: 'NieR Automata',
        c: 'Dota 2',
        d: 'Dark Souls 3',
        correct: 'b'
    },
    {
        question: 'What is the most used game engine',
        a: 'Unity',
        b: 'GameMaker studio',
        c: 'Unrial Engine',
        d: 'Source',
        correct: 'c',
    },
    {
        question: 'Who is in charge of game mechanics',
        a: 'QA',
        b: 'Game MAnager',
        c: 'Develiper',
        d: 'Game Designer',
        correct: 'd' 
    },
    {
        question: 'Who created the Doom series',
        a: 'John Carmack',
        b: 'Cory Barlog',
        c: 'Konrad Tomaszkiewicz',
        d: 'Gabe newell',
        correct: 'a'}
]
//53.53
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const btnSubmit = document.querySelector('.btn-submit')
const quizCont = document.querySelector('.quiz-container')
const resultCont = document.querySelector('.result-container')


let currentQuestion = 0
let answerTry = 0
let answerFalse = 0



loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion]
    
    questionElement.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    
}

btnSubmit.addEventListener('click', ()=>{
     
    
    const answer = getSelected()

        
    if (currentQuestion < quizData.length && answer !== undefined){
        currentQuestion++
        if(currentQuestion < quizData.length){
        
        selectionCheck(answer)
        loadQuiz() 
        } else {result(answer)}

      } else if (currentQuestion < quizData.length && answer === undefined){ 
        // Тут показываем результат опроса
        alert('select an answer')
    } else {
        result(answer)
    }
    
})

function getSelected(){
    const answerEls = document.querySelectorAll('.answer')
    let answerChoice = undefined
    answerEls.forEach((answerE) => {
        if(answerE.checked){
            
            answerChoice = answerE.id
        } 
    });
    return answerChoice
    
}

function selectionCheck(answer) {
    if(answer === quizData[currentQuestion-1].correct){
        answerTry++
    } else {answerFalse++}
}

function result(answer){
    selectionCheck(answer)
    quizCont.classList.add('block')
    resultCont.classList.remove('block')
    // alert(`you finished! true answer - ${answerTry}, false answer ${answerFalse}`)

    trueText = document.getElementById('true')
    falseText = document.getElementById('false')
    trueText.innerText = `True answer - ${answerTry}`
    falseText.innerText = `False answer ${answerFalse}`

}