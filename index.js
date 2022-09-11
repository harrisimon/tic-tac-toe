//vars
const playerX = 'X'
const playerO = 'O'
let nextPlayer = playerO
let xPlayerMoves = []
let oPlayerMoves = []
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
let gameWin = false
let gameDraw = false

const board = document.querySelector(".container")
const boxes = board.querySelectorAll('.box')

//reset game
const clearBoard = () => {
        boxes.forEach(Element =>Element.innerHTML = '' )     
}
const resetGame = () => {
        gameDraw = false
        gameWin = false
        nextPlayer = playerO
        xPlayerMoves = []
        oPlayerMoves = []
        clearBoard()   
}
const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetGame)
//---------------------------------

const checkForWin = ()=>{
        let checker = (arr, target) => target.every(v =>arr.includes(v))
        for (arr in winningCombos){
                if (checker(xPlayerMoves,winningCombos[arr]) === true||checker(oPlayerMoves,winningCombos[arr]) === true){    
                        return gameWin = true
                        console.log("winning tigerblood!")
                        
                }
                }  
}
//adding and storing moves
const playGame = () => {
        document.addEventListener('click', (e) => {
                const clicked = e.target
                if (clicked.className === 'box' && clicked.innerHTML === ''){
                        nextPlayer = nextPlayer === playerO ? playerX : playerO;
                        if(gameWin===false && gameDraw === false){
                                e.target.innerHTML = nextPlayer
                        }
                        boardMoves.push(nextPlayer,e.target.id)
                        if(gameWin ===false){
                                if (nextPlayer === playerX){
                                        xPlayerMoves.push(Number(e.target.id))
                                } else if (nextPlayer === playerO){
                                        oPlayerMoves.push(Number(e.target.id))
                                }                        
                } 
        }
                const currPlayerDisplay = document.querySelector('.playerturn')
                const turnDisplay= () =>{
                        if (nextPlayer === playerX){
                                currPlayerDisplay.innerHTML = 'O Plays'
                        } else {
                                currPlayerDisplay.innerHTML = 'X Plays'
                        }
                }
                turnDisplay()
                checkForWin()
                console.log("clicked win condition", gameWin)   
                }   )
}

playGame()
        
// if (gameDraw === true || gameWin === true){

//   console.log("stop game",gameWin)
        
// } else {

//         playGame()
// }



