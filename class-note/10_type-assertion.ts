//타입 단언(type assertion)
var a;
a=20
a='b'
var b = a as string;
//any인 a를  string인 b 로 변경


//dom api 조작
var div = document.querySelector('div') as HTMLDivElement;
if (div) {
    div.innerText
}
//이는  컴보다 개발자인 내가 해당 변수등의 타입을 잘 알기에 타입을 지정하는 것