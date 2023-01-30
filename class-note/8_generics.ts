function logText<T>(text:T):T{
    console.log(text);
    return text
}

const str = logText<string>('a')
const flag = logText<boolean>(true)
const long = logText<number>(1000)

//인터페이스에 제네릭 선언하기
interface Dropdown<t>{
    value:t,
    selected:boolean
}

const obj:Dropdown<string> = {value:'av',selected:false}
//<>안의 타입에 따라 value에 넣어줘야 할 값이 바뀜