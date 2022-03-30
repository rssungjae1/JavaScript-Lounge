//함수는 혼자 있으면 개인이고, new가 앞에 있으면 객체를 만드는 신이고, call을 뒤에 붙이면 용병이고, 
//bind를 붙이면 분신술을 부리는 놀라운 존재입니다. 자바스크립트의 함수의 놀라움을 느껴보세요. 

//call, bind는 둘 다 this 값을 바꾸는 역할을 한다. call은 임시로 bind는 영구적으로 값을 바꾼다.

var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum();
// call : 모든 함수는 call이라고 하는 함수를 가지고있다. 첫번재 인자로 객체를 주면 이 함수는 내부적으로 this=kim이 된다.
// 두번째 인자부터는 파라메터(prefix)가 들어온다.
console.log("sum.call(kim)", sum.call(kim, '=> ')); //apply
console.log("lee.call(kim)", sum.call(lee, ': '));

// bind : 내부적으로 사용할 this를 고정시켜버린다.
// kimsum이라는 새로운 함수가 생성됨.
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());