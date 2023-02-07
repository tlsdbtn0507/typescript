interface Product{
    id:number,
    name:string,
    price:number,
    brand:string,
    stock: number,
    somthing: object
}

// function fetchProduct():Promise<Product[]>{

// }
// interface ProductDetail{
//     id:number,
//     name: string, 
//     price:number
// }



//Product라는 타입을 쓸건데 모든 함수 및 기능들에서 다 쓸건 아니기에 유틸리티 혹은 제네릭 타입이라 불리는 기능을 활용해서 
//Product 타입의 재사용성을 극대화함


type ShoppingItem = Pick<Product, 'id'|'name'| 'price'>
function displayProductDetail(shoppingItem:Pick<Product, 'id'|'name'| 'price'>){

} 

//Omit은 인터페이스 내의 속성 중 쓰기 싫은것 만 빼서 사용할 수 있는 기능

//Partial을 사용하면 Product의 모든 속성을 옵셔널('?:')기능을 활용할 수 있게 됨
function updateProductItem(productItem: Partial<Product>){

}

interface UserProfile{
    username: string;
    email: string;
    profilePhotoUrl:string;
}


// How to Use Partial

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email']
//     profilePhotoUrl?:UserProfile['profilePhotoUrl']
// }

// #2 Mapped Type(기존의 타입을 새로운 타입으로 변환하는 것)
// type UserProfileUpdate = {
//     [p in 'username'|'email'|'profilePhotoUrl']?: UserProfile[p]
// }

// #3 
type UserProfileKeys = keyof UserProfile

type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}


// #4 Partial(Subset으로 썻지만)
type Subset<t> = {
    [p in keyof t]?: t[p]
}


