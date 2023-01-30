interface User{
    age:number;
    name:string;
}

//변수에 인터페이스 활용
var seho: User ={
    age:33 ,
    name:'세호'
}

//함수에 인터페이스 활용
function getUser(user:User){
    console.log(user)
}
const capt ={
    name:'캡틴',
    age:109
}
getUser(capt)

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction{
    (a:number,b:number):number;
}

var sum: SumFunction;
sum =function(a:number,b:number):number{
    return a+b;
}
sum(1,2)

// 인덱싱
interface StringArray{
    [index:number]:string;
}

var arr1:StringArray = ['a','b','c']
arr1[0] = 'v'

//딕셔너리 패턴
interface StringrRegexDictionary{
    [key:string]:RegExp
}

var obj1:StringrRegexDictionary ={
    cssFile:/\.css$/,
    jsFile:/\.js$/,
}

//인터페이스 확장
interface Person{
    name:string;
    age:number;
}

// interface Developer{
    //     name:string;
    //     age:number;
    //     lang:string
    // }
    
    // interface Developer extends Person{
    //     lang:string
    // }
    
//     var iron: Developer={
//         lang:'js',
//         name:'로다주',
//         age:45,
// }