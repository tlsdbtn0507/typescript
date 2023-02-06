//타입추론 기본
// var a = 'a';

function getB(b = 10){
    var c = 'hi'
    return b + c;
}

// interface Dropdonw<t>{
//     value:t,
//     title:string
// }
// var shoppingItem:Dropdonw<string> = {
//     value:'s',
//     title:'a'
// } 

interface Dropdonw<t>{
    value:t,
    title:string
}
interface DetailedDropdown<k> extends Dropdonw<k>{
    tag:k,
    description:string,
}

// var detailedItem:DetailedDropdown<number>={
//     value:'a',
//     tag:'a',
//     title:'abc',
//     description:'ab',
// }

//value와 tag는 제네릭으로 인해 num이여야함


var shoppingItem:Dropdonw<string> = {
    value:'s',
    title:'a'
} 


//Best common Type
var arr = [1,2,true,true,'1']

