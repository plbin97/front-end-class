const balloons = []
const gameCanvas = document.createElement('div')
gameCanvas.classList.add('gameCanvas')
const scoreBoard = document.createElement('div')
scoreBoard.classList.add('scoreBoard')
scoreBoard.innerText = '0'
document.body.append(gameCanvas)
document.body.append(scoreBoard)

class Balloon {
    constructor() {
        this.balloonNode = document.createElement('div')
        this.balloonNode.classList.add('balloon')
        this.setBottom(0)
        this.setRandomLeft()
        this.setRandomColor()
        this.speed = Math.ceil(Math.random() * 10)
        this.balloonNode.onclick = () => {
            this.setRandomLeft()
            this.setBottom(0)
            this.setRandomColor()
            let currentScore = Number(scoreBoard.innerText)
            currentScore += this.speed
            scoreBoard.innerText = `${currentScore}`
        }
    }
    setRandomColor() {
        this.balloonNode.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    }
    setBottom(val) {
        this.balloonNode.style.bottom = `${val}px`
    }
    setRandomLeft() {
        this.balloonNode.style.left = `${Math.random() * gameCanvas.offsetWidth}px`
    }
    getCurrentBottom() {
        return Number(this.balloonNode.style.bottom.split('px')[0])
    }
    lift() {
        const currentBottom = this.getCurrentBottom()
        if (currentBottom >= gameCanvas.offsetHeight) {
            this.setBottom(0)
        }else {
            this.setBottom(currentBottom + this.speed)
        }
    }
}


for (let i = 0; i < 10; i ++) {
    const balloon = new Balloon()
    gameCanvas.append(balloon.balloonNode)
    balloons.push(balloon)
}


setInterval(() => {
    for (const balloon of balloons) {
        balloon.lift()
    }
}, 20)
