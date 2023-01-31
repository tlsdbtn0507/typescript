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

//keyof로 타입제한
interface ShoppingItem{
    name:string,
    price:number,
    stock:number
}

function getShoppingItemOption<t extends keyof ShoppingItem>(itemOption:t):t{
    return itemOption
}
//위에 처럼 하면 getShoppingItemOption함수의 매개변수로는 ShoppingIte의 인자(name, price, stock)에서만 받을 수 있다

// getShoppingItemOption(1)
// getShoppingItemOption('gw')
getShoppingItemOption("name")//getShoppingItemOption에 지정한 타입(이름)만 쓸 수 있음

