//interface
interface Person{
    name:string,
    age:number,
}

var shin:Person={
    name:'shin',
    age:27
}
// 인터페이스를 사용하고 Person에 마우스를 올리면 interface Person만 보여줌 


//type aliases: 새로운 타입을 생성하는 것이 아닌 정의한 타입을 나중에 쉽게 참고할 수 있도록 이름을 부여한것 인터페이스완 다르게 확장이 안됨 고로 인터페이스를 쓰는게 좋음
type Person1 ={
    name:string,
    age:number,
}

var shin:Person1={
    name:'shin',
    age:27
}

type MyString = string;
var str:MyString = 'hi'

type Todo = {id:number,title:string,done:boolean}
function getTodos(todo:Todo){

}

// 타입 별칭을 사용할때 Person1에 마우스를 올리면  type Person1 = {
//     name: string;
//     age: number;
// }를 보여줌
