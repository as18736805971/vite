type Props = {
    name: string,
    age: number,
    title?: string,
    desc?: string
}

declare let count: number
declare let songName: string

interface Point {
    x: number
    y: number
}
declare let position:Point
declare function addNum(x: number, y: number): number
declare function addName(name: string): string
declare function changeDirection(direction: 'up' | 'down' | 'left' | 'right'): void
type FormPoint = (point: Point) => void
declare const fromPoint: FormPoint

export { Props, count, songName, Point, addNum, addName }
