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
let boardMoves = []
let gameWin = false
let gameDraw = false

const board = document.querySelector(".container")
const boxes = board.querySelectorAll('.box')

const clearBoard = () => {
        boxes.forEach(Element =>Element.innerHTML = '' )     
}
const resetGame = () => {
        gameDraw = false
        gameWin = false
        nextPlayer = playerO
        xPlayerMoves = []
        oPlayerMoves = []
        boardMoves = []
        clearBoard()
        currPlayerDisplay.innerHTML = ''
        messageOff()
}
const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetGame)
const endGameScreen = document.getElementById('overlay')
endGameScreen.addEventListener('click', resetGame)

function messageOff() {
        document.getElementById("overlay").style.display = "none";
      }

const checkForWin = ()=>{
        let checker = (arr, target) => target.every(v =>arr.includes(v))
        for (arr in winningCombos){
                if (checker(xPlayerMoves,winningCombos[arr]) === true||checker(oPlayerMoves,winningCombos[arr]) === true){    
                        return gameWin = true                      
                }
                }  
}
const checkForDraw = () =>{
        if(gameWin === false && boardMoves.length >= 16){
                return gameDraw = true
        }
}

const currPlayerDisplay = document.querySelector('.playerturn')
const turnDisplay= () =>{
        if (gameDraw === false && gameWin === false){
                if (currPlayerDisplay.innerHTML === ''){
                        currPlayerDisplay.innerHTML = 'X Plays First'
                }
                else if (nextPlayer === playerX){
                        currPlayerDisplay.innerHTML = 'O Plays'
                } else {
                        currPlayerDisplay.innerHTML = 'X Plays'
                }
        }    
}
turnDisplay()

const endGameMessage = () => {
        if(gameWin === true){
                console.log("game win",gameWin)
                document.querySelector('#overlay').style.display = 'block'
                document.querySelector('#text').innerHTML = `${nextPlayer} Wins! <br> Click to play again`
        } else if (gameDraw === true){
                document.querySelector('#overlay').style.display = 'block'
                document.querySelector('#text').innerHTML = `Draw, click to play again`
        }     
}

const playGame = () => {
        document.addEventListener('click', (e) => {
                const clicked = e.target
                if (clicked.className === 'box' && clicked.innerHTML === ''){
                        nextPlayer = nextPlayer === playerO ? playerX : playerO;
                        if(gameWin===false && gameDraw === false){
                                e.target.innerHTML = nextPlayer
                        }
                        boardMoves.push(nextPlayer,e.target.id)
                        if(gameWin === false && gameDraw === false){
                                if (nextPlayer === playerX){
                                        xPlayerMoves.push(Number(e.target.id))
                                } else if (nextPlayer === playerO){
                                        oPlayerMoves.push(Number(e.target.id))
                                }                        
                } 
        }
                turnDisplay()
                checkForWin()
                checkForDraw()
                endGameMessage()
                }   )
}
playGame()
