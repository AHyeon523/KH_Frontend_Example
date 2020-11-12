
//자바스크립트에서 변수 선언
var name; //함수 레벨 스코프
let name1 = 'abc'; //변수 선언방법
const name2 = 'abc'; //final(변경 불가능 - 정수)

//선언 - 식별자를 등록
//초기화 단계 - 값을 위한 공간을 할당하고 식별자랑 연결함. 초기화 하지 않았다면 undefined

console.log(name);
console.log(name1);
console.log(name2);

const n = 10;
const message = 'test'

console.log(`상수 n의 값 : ${n}, 상수 message의 값 : ${message}`);

const obj = {
    abc : 'abc'
}
//멤버 접근 연산자(.)
console.log(obj.abc)
//계산된 멤버 접근 연산자([]) computed member access operator
console.log(obj['abc'])
obj['alpha'] = 'a'
obj['beta'] = 'b'
console.log(obj)

const obj1 = {
    abc: 'abc'
}

const obj2 = {
    abc: 'abc'
}
console.log(obj1 == obj2)

//분기 예시
const a = 10

if(a > 5) {
    console.log('a가 5보다 크다.')
}

//반복 예시
for(var i=0; i<10; i++){
    console.log(`${i+1}번째 출력.`)
}

//함수 예시
function test(a,b) {
    return `${a}와 ${b}의 합은 ${a+b}입니다.`
}

const a = test
const resultMessage = a(1,2)
console.log(resultMessage)

//메서드
const obj = {
    name: 'aaaaa',
    say: function() {
        console.log('말하다.');
    }
}
obj.say()


//동적타이핑
//1. 값을 보고 타임 추론
//2. 언제든 식별자의 값이 변경될 수 있음.