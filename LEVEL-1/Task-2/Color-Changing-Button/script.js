const btnElement = document.querySelector('#btn')
const combinators = '0123456789ABCDEF'

btnElement.addEventListener('click', generateRandomColor)

function generateRandomColor(){
    let randomColor = '#'

    for (let index = 0; index < 6; index++) {
        randomColor += combinators[Math.floor(Math.random() * 16)]
    }

    changeBtnColor(randomColor)
}

function changeBtnColor(randomColor){
    btnElement.style.backgroundColor = randomColor
}