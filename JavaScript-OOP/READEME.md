# JavaScript-OOP
https://opentutorials.org/module/4047
- for study of basic javascript
---
## 객체란
서로 연관된 변수와 함수를 그룹핑하고 이름을 붙인 것

---
## var, let, const 차이점
- 변수 선언 방식
  - var는 변수를 한 번 더 선언했음에도 불구하고, 에러가 나오지 않고 각기 다른 값이 출력
  - let과 const는 변수 재선언이 되지 않는다.
  - let은 변수 재할당이 가능하지만 const는 변수 재선언, 변수 재할당 모두 불가능하다.
- Hoisting
  - var 로 선언된 변수와는 달리 let 로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.
```
	console.log(foo); // undefined
	var foo;

	console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
	let bar;
```
  - 이는 let 로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문이다.
  - 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성

---
## 객체의 constructor
- Construct Function은 일반 함수를 객체로 만들어 주는 객체 생성자이다.
- Construct Function 을 적용하면 앞에 "new"을 사용하여 실행할때 마다 객체가 양상된다. 
- Construct Function을 바꾸면 Construct Function을 사용하는 모든 객체가 한번에 바뀌는 효과를 얻을수 있다.

---
## prototype
https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67
- Person.prototype이라는 빈 Object가 어딘가에 존재하고, Person 함수로부터 생성된 객체(kim, park)들은 어딘가에 존재하는 Object에 들어있는 값을 모두 갖다쓸 수 있다.
- 즉, eyes와 nose를 어딘가에 있는 빈 공간에 넣어놓고 kim과 park이 공유해서 사용하는 것

---
## class
- 객체를 만드는 데 필요한 건 2가지다. 초기값과 객체 생성이다. 
- 함수형 생성자로는 한 번에 초기값이 셋팅되고 객체도 만들어진다. 
- 반면에 클래스는 선언하면 객체는 생성되지만 초기값이 셋팅이 안 된다.

---
## class의 constructor
- 위에서의 class 초기값을 생성하기위한 수단

---
## class의 상속
- extend

---
## class vs object
- https://www.youtube.com/watch?v=_DLhUBWsRtw

---
## 객체간의 상속
```
subObj.__proto__ = superObj;
//or
var subObj = Object.create(superObj);
```

---
## 객체와 함수
- 함수는 혼자 있으면 개인이고, new가 앞에 있으면 객체를 만드는 신이고, call을 뒤에 붙이면 용병이고, bind를 붙이면 분신술을 부리는 놀라운 존재입니다. 자바스크립트의 함수의 놀라움을 느껴보세요. 
```
// call : 모든 함수는 call이라고 하는 함수를 가지고있다. 첫번재 인자로 객체를 주면 이 함수는 내부적으로 this=kim이 된다.
// 두번째 인자부터는 파라메터(prefix)가 들어온다.
console.log("sum.call(kim)", sum.call(kim, '=> ')); //apply
console.log("lee.call(kim)", sum.call(lee, ': '));

// bind : 내부적으로 사용할 this를 고정시켜버린다.
// kimsum이라는 새로운 함수가 생성됨.
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());
```