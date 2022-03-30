class Person{
    // constructor 객체가 생성되면서 실행된다.
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum(){
        return (this.first+this.second);
    }
}

//inheritage
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 50, 30);

// kim이라는 객체에서만 사용되는 sum 함수를 이렇게 수정하는 것
// kim.sum = function(){
//     return 'this : '+(this.first+this.second);
// }

var lee = new PersonPlus('lee', 20, 80, 20);
// console.log(kim);
// console.log(lee);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("lee.sum()", lee.sum())
console.log("lee.avg()", lee.avg())

