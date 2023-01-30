// function logMessage(value:string){
//     console.log(value)
// }

// logMessage('hi')
// logMessage(1)

var hyun: string|number|boolean

function logMessage(value:string | number){

    if(typeof value === 'number'){
        value.toLocaleString
    }
    if(typeof value === 'string'){
        value.toString()
    }
    throw new TypeError('value must be string or number')
}// | => 유니온 타입의 장점으로는 위 함수 내용처럼 특정 타입으로 타입의 범위를 필터링(타입가드) 할 수 있다 그리고 지정한 타입 아무거나 다 될 수도 있다
// 만약 타입을 any로 지정 했다면 위의 if문을 거칠 수 없음
logMessage(1)
logMessage('hi')

interface Developer{
    name: string
    skill:string
}

interface Person{
    name: string
    age:number
}

function askSomeone (someone: Developer|Person){
    // someone.name
}

askSomeone({ name: '디벨로퍼', skill: '웹개발'});
askSomeone({name:'zoqxls',age:100})

//askSomeone함수의 인수로 유니온 타입을 넣으면 인터페이스의 교집합만 가능하지만 

//askAnyone함수의 인수로 인터섹션 타입을 하면 해당 인수들의 모든 속성과 타입을 가질 수 있다
var se: string&number&boolean; //se의 타입은 string이면서,number이면서,boolean이다

function askAnyone(someone:Developer&Person){
    // someone.age
    // someone.name
    // someone.skill
}

// askAnyone({ name: '디벨로퍼', skill: '웹개발'}) 요거는 에러 왜냐면 인터섹션 타입은 Person의 age속성도 필요하기 떄문
askAnyone({ name: '디벨로퍼', skill: '웹개발',age:22})


