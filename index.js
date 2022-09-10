
// const playerOneMove = () => {

// }
// const playerTwoMove = () => {

// }

const board = document.querySelector("#container")

const boxes = board.querySelectorAll('.box')



//append content
// const box1 = document.getElementById('box1')
// const content = document.createTextNode('34')
// box1.appendChild(content)

//clear the board
const clearBoard = () => {
        boxes.forEach(Element =>console.log(Element.innerHTML = '' ))       
}



const resetButton = document.querySelector('.reset')

resetButton.addEventListener('click', clearBoard)

console.log(boxes.text)