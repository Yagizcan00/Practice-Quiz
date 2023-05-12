const data = [
    {
        id: 1,
        question: "Question one ?",
        answers: [
            { answer: "Answer-1", isCorrect: true },
            { answer: "Answer-2", isCorrect: false },
            { answer: "Answer-3", isCorrect: false },
            { answer: "Answer-4", isCorrect: false },
        ]
    },
    {
        id: 2,
        question: "Question two ?",
        answers: [
            { answer: "Answer-1", isCorrect: true },
            { answer: "Answer-2", isCorrect: false },
            { answer: "Answer-3", isCorrect: false },
            { answer: "Answer-4", isCorrect: false },
        ]
    },
    {
        id: 3,
        question: "Question three ?",
        answers: [
            { answer: "Answer-1", isCorrect: true },
            { answer: "Answer-2", isCorrect: false },
            { answer: "Answer-3", isCorrect: false },
            { answer: "Answer-4", isCorrect: false },
        ]
    },
]

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")


let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer





const showResult = () => {
    resultScreen.style.display = "block"
    gameScreen.style.display = "none"

    resultScreen.querySelector(".correct").textContent =
        `Correct Answers: ${correctCount}`

    resultScreen.querySelector(".wrong").textContent =
        `Wrong Answers: ${wrongCount}`

    resultScreen.querySelector(".score").textContent =
        `Score: ${correctCount - wrongCount * 10}`
}


const showQuestion = (qNumber) => {

    if (qIndex === data.length) return showResult()

    selectedAnswer = null

    question.textContent = data[qNumber].question

    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `
            <div class="answer">
                <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
                <label for=${index}>${item.answer}</label>
            </div>
        `
    ).join("")

    selectAnswer()
}


const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value
        })
    })
}


const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++
            qIndex++
            showQuestion(qIndex)
        } else alert("Select an answer!")
    })
}


showQuestion(qIndex)
submitAnswer()