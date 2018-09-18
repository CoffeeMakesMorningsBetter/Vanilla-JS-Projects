let start = document.querySelector('#start')
let board = document.querySelector('.board')

const GAMESTATUS = {
  player1: null,
  player2: null,
  gameOver: true,
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

const createBoard = () => {
  for(let i = 0; i < GAMESTATUS.board.length; i++) {
    for(let j = 0; j < GAMESTATUS.board[i].length; j++) {
      let id = i.toString()+j.toString()
      let square = document.createElement('div')
      square.setAttribute('id', id)
      square.setAttribute('class', 'square')
      board.appendChild(square)
    }
  }
}

const createGame = () => {
  board.innerHTML = ''

  createBoard()

  GAMESTATUS.player1 = true 
  GAMESTATUS.gameOver = false  
}

const gameStatus = () => {
  
}

start.addEventListener('click', () => {
  console.log('Game Started!')
  createGame()
})

board.addEventListener('click', (e) => {
  console.log(e.target.id)
})


