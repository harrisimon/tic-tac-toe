const playerX = 'X'
const playerO = 'O'

const xPlayerMoves = []
const oPlayerMoves = []
const winningCombos = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [7,5,3],
        [1,5,9],
        [1,4,7],
        [2,5,8],
        [3,6,9]
]
const boardMoves = []
if (xPlayerMoves.includes(winningCombos)){
        console.log("win")
}

const board = document.querySelector(".container")
// console.log(board)

const boxes = board.querySelectorAll('.box')
// console.log(boxes)

//clear the board
const clearBoard = () => {
        boxes.forEach(Element =>console.log(Element.innerHTML = '' ))
        
}

const resetButton = document.querySelector('.reset')

resetButton.addEventListener('click', clearBoard)

//---------------------------------

document.addEventListener('DOMContentLoaded', ()=>{

})

let nextPlayer = playerO
//adding and storing moves
const boxClicked = (e) => {
        const clicked = e.target
        if (clicked.className === 'box' && clicked.innerHTML === ''){
                nextPlayer = nextPlayer === playerO ? playerX : playerO;
                console.log(nextPlayer)
                e.target.innerHTML = nextPlayer
                boardMoves.push(nextPlayer,e.target.id)
                if (nextPlayer === playerX){
                        xPlayerMoves.push(e.target.id)
                } else {
                        oPlayerMoves.push(e.target.id)
                }                        
        }  
        const currPlayerDisplay = document.querySelector('.playerturn')
        if (nextPlayer === playerX){
                currPlayerDisplay.innerHTML = 'O Plays'
        } else {
                currPlayerDisplay.innerHTML = 'X Plays'
}   
}

document.addEventListener('click', boxClicked)
