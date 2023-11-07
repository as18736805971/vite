import { count } from './utils'

let count = '10'
let songName = '星星'
let position = {
    x: 1,
    y: 2
}

function add(x, y) {
    return x + y
}

function changeDirection(direction) {
    console.log(direction)
}

const fromPoint = point => {
    console.log('当前坐标: ', point)
}

export { count, songName, position, add, changeDirection, fromPoint }
