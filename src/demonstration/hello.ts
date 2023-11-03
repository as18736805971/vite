// 基本类型
let num: number = 18
let title: string = '星星'
let state: boolean = true
let arr_num: number[] = [1, 2, 5]
let arr_str: string[] = ['a', 'b']
let arr_obj: object[] = [{ title: '标题'}, { title: '标题' }]
let arr_boo: boolean[] = [true, false]
let arr: ( number | string )[] = [1, 'a', 2] // 联合类型
let time: number | string = 18 // 或
let position: [number, number] = [1, 2] // 元组
let age = 18 // 不写类型 ts会进行类型推论
let obj2 = {
    name: '星星',
    age: 18,
    sex: 0
}
// console.log(obj2)

// 类型别名
type CustomArray = ( number | string )[]
let arr1:CustomArray = [1, 'A', 2]

// 函数类型 参数及返回值类型
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

// 对象类型
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

// 函数里传对象参数
function setInfo(config: { name: string, age?: number }) {}
setInfo({ name: '星星' })

// 接口
interface UserInfo {
    name?: string
    age: number
    sayHi(): void
}

let obj1: UserInfo = {
    name: '星星',
    age: 18,
    sayHi() {}
}

// 接口继承
interface getInfo {
    name: string
    age: number
}

interface getInfo1 extends getInfo {
    sex: number
}

let info: getInfo1 = {
    name: '星星',
    age: 18,
    sex: 1
}
// console.log(info)

// as 类型断言
// const aLink = document.getElementById('link') as HTMLAnchorElement
// aLink.href

// 字面量类型
let age1: 18 = 18
let age2 = '星星'
const age3 = '星星'
function setDirection(direction: 'up' | 'left' | 'right' | 'down') {
    console.log(direction)
}
// setDirection('up')

// 枚举
enum Direction {
    Up,
    Left = '星星',
    Right = 5,
    Down
}
function setDirection1(direction: Direction) {
    console.log(direction)
}
// setDirection1(Direction.Up)
// console.log(Direction.Left)

// any 类型  可对值进行任意操作 即无 ts 代码提示  相较于原始 js 写法
let obj3: any = {
    title: '标题',
    age: 18
}
obj3.title = 20
obj3.age = '星星'
obj3.sex = '男'
// console.log(obj3)
