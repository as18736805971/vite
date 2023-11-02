let num: number = 18
let title: string = '星星'
let state: boolean = true
let arr_num: number[] = [1, 2, 5]
let arr_str: string[] = ['a', 'b']
let arr_boo: boolean[] = [true, false]
let arr: ( number | string )[] = [1, 'a', 2] // 联合类型
let age: number | string = 18 // 或

type CustomArray = ( number | string )[]
let arr1:CustomArray = [1, 'A', 2]

function setNum(num: number): number {
    return num + 2
}
const setNum1 = (num: number = 2):number => {
    return num + 2
}
const setNum2:(num: number, num1: number) => number = (num, num1) => {
    return num + num1
}
function setNum3(name: string): void {
    console.log('你好' + name)
}
function setNum4(name: string, age?: number) {
    console.log('你好' + name + '现在是' + age + '岁')
}
// console.log(setNum(2))
// console.log(setNum1())
// console.log(setNum2(4, 5))
// setNum3('星星')
// setNum4('星星')

let obj: {
    name?: string
    age: number
    sayHi(): void
    sayHi1: () => void
    getIn(title: string): void
} = {
    name: '星星',
    age: 18,
    sayHi() {},
    sayHi1() {},
    getIn(title) {}
}

function setInfo(config: { name: string, age?: number }) {}
setInfo({ name: '星星' })
