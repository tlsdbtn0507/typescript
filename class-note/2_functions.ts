// 함수의 파라미터에 타입을 정의하는 법
// function sum(a:number,b:number){
//     return a+b;
// }
// sum(1,2)

//함수의 반환 값에 타입정의하기
function add():number{
    return 10 
}

//함수의 타입을 정의하는 방식
function sum2(a:number,b:number):number{
    return a+b;
}
// sum2(1,2,3,4,5)

//함수의 옵셔널 파라미터
function log(a:string, b?:string){

}
log('hi')
log('hi','bye')