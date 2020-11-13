//배열 리터럴
const arr = [1,2,'문자열',{}]

const [a,b] = arr

console.log(a)
console.log(b)

//객체 리터럴
const user = {
    id: 'abababab',
    name: '이름이다',
    data: [1,2,3,4],
}
console.log('------------')
const {id, name, data} = user
console.log(id)
console.log(name)
console.log(data)

//함수 예시
function f(x) {
    console.log('호출됨!')
}

f(1)
f(1,2,3)

//블록 스코프
console.log('블록 이전에 호출')
{
    console.log('블록 내부1에서 호출됨')
    const x = 1
    console.log(x)
    {
        console.log('블록 내부2에서 호출됨')
        const y = 5
        console.log(y)
    }
    console.log(y)
}
console.log(x)

//변수 마스킹
console.log('블록 이전에 호출')
{
    const x = 10
    const block1 = '블록1이란다'
    console.log(x)
    {
        const x = '다른타입의 값'
        console.log(x)
        console.log(block1)
    }
}

function sayHelloTo(name) {
    const message = `Hello ${name}!`
    return function () {
        console.log(message)
    }
}

const hello1 = sayHelloTo('glaemfek')
const hello2 = sayHelloTo('dmdmdm')
const hello3 = sayHelloTo('gkgkgk')
hello1()
hello2()
hello3()

//
function outer() {
    const name = '바깥임'
    function showName() {
        const n = '안쪽 데이터'
        console.log(`바깥: ${name}, 안: ${n}`)
    }
    return showName;
}
const f1 = outer()
f1()



function countdown(x) {
    //환경
    function counter () {

    }
    return counter
}

function outer(x) {
    //환경
    function closure() {
        let d = 10
        const name
    }
    return closure
}

// const dd = 'o'
// function outer() {
//     const name = '밖에 있다'
//     function consure
// }

//호출 횟수 카운트 하는 클로저
class 클로저 {
    멤버;
    생성자(파라미터) {
        멤버 = 파라미터    
    }

    메서드() {

    }
}

function 생성자(파라미터) {
    function 메서드() {
    }
    return 메서드
}

function countdown(startAt) {
    let data = startAt;
    function counter() {
        console.log(data--)
    }
    return counter
}

function countdown() {
    let s = 0;
    function counter() {
        console.log(`${++s}회 호출됨`)
    }
    return counter
}