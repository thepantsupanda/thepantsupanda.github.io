// Section for handling background canvas

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

document.body.onresize = () => {
    canvas.style.width ='100%'
    canvas.style.height='100%'
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
}

document.body.onresize()

function Circle(x, y, upVelocity, radius) {

    this.x = x
    this.y = y
    this.upVelocity = upVelocity
    this.radius = radius

    this.draw = () => {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = "rgba(0,0,0,1)"
        context.fill()
    }

    this.update = () => {
        this.y+=this.upVelocity
        this.draw()
    }

}

let circleArray = []

function animate() {

    // clears unneeded bubbles from the screen
    for (let i = 0; i < circleArray.length; i++) {
        if (circleArray[i].y < 0) {
            circleArray.splice(i, 1)
        }
    }

    context.clearRect(0, 0, canvas.width, canvas.height)

    if (Math.random() < 0.03 && circleArray.length < 30) {
        let radius = (Math.random() * 10) + 1
        let x = Math.random() * canvas.width
        let y = canvas.height + radius
        let upVelocity = (Math.random() * -0.5) - 0.5
        circleArray.push(new Circle(x, y, upVelocity, radius))
    } 

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }

    requestAnimationFrame(animate)

}

animate()

// Section for handling image loading stuff

const imageTag = document.querySelector("#sideimg");
const imageSrc = imageTag.getAttribute("src");

imageTag.setAttribute("src", imageSrc + "?" + Math.random())