const balloons = []
function createBalloon() {
    const balloon = document.createElement('div')
    balloon.classList.add('balloon')
    balloon.style.bottom = '0px'
    const left = Math.random() * 1000
    balloon.style.left = left.toString() + 'px'
    return balloon
}



for (let i = 0; i < 10; i ++) {
    const balloon = createBalloon()
    balloons.push(balloon)
    document.body.append(balloon)
}

function removeBalloonWhenReachTheTop(balloon) {
    const currentBottom = getBalloonCurrentBottom(balloon)
    const parent = balloon.parentNode
    if (parent) {
        if (currentBottom >= screen.height) {
            parent.removeChild(balloon)
        }
    }
}

function getBalloonCurrentBottom(balloon) {
    return Number(balloon.style.bottom.split('px')[0])
}
function liftBalloon() {
    for (const balloon of balloons) {
        const currentBottom = getBalloonCurrentBottom(balloon)
        balloon.style.bottom = (currentBottom + Math.random() * 10).toString() + 'px'
        removeBalloonWhenReachTheTop(balloon)
    }
}

setInterval(() => {
    liftBalloon()
}, 20)
