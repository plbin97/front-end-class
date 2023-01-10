const balloons = []
const gameCanvas = document.createElement('div')
gameCanvas.classList.add('gameCanvas')
const scoreBoard = document.createElement('div')
scoreBoard.classList.add('scoreBoard')
scoreBoard.innerText = '0'
document.body.append(gameCanvas)
document.body.append(scoreBoard)
const gameCanvasHeight = gameCanvas.offsetHeight
const gameCanvasWidth = gameCanvas.offsetWidth

class Balloon {
    constructor() {
        this.balloonNode = document.createElement('div')
        this.balloonNode.classList.add('balloon')
        this.setRandomLeft()
        this.setRandomColor()
        this.speed = Math.ceil(Math.random() * 10)
        this.balloonNode.style.animationDuration = `${30/this.speed}s`
        this.balloonNode.onclick = () => {
            this.balloonNode.style.display = 'none'
            this.setRandomLeft()
            this.setRandomColor()
            let currentScore = Number(scoreBoard.innerText)
            currentScore += this.speed
            this.balloonNode.style.display = 'block'
            scoreBoard.innerText = `${currentScore}`
        }
    }
    setRandomColor() {
        this.balloonNode.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    }
    setRandomLeft() {
        this.balloonNode.style.left = `${Math.random() * gameCanvasWidth}px`
    }
    getCurrentBottom() {
        return Number(this.balloonNode.style.bottom.split('px')[0])
    }
    lift() {
        const currentBottom = this.getCurrentBottom()
        if (currentBottom >= gameCanvasHeight) {
            this.setBottom(0)
        }else {
            this.setBottom(currentBottom + this.speed)
        }
    }
}

const balloonFragment = document.createDocumentFragment()
for (let i = 0; i < 10; i ++) {
    const balloon = new Balloon()
    balloonFragment.append(balloon.balloonNode)
    balloons.push(balloon)
}
gameCanvas.append(balloonFragment)
