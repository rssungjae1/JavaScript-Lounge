var kim = {
    name:'kim',
    first:10,
    second:20,
    third:30,
    sum:function(){
        return this.first + this.second + this.third;
    }
}

var song = {
    name:'song',
    first:10,
    second:50,
    sum:function(){
        return this.first + this.second;
    }
}
console.log(kim.sum());
console.log(song.sum());

//
var d1 = new Date('2019-4-10');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()); // start to 0

//
function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.sum = function(){
        return this.first+this.second;
    }
}

// constructor 생성자
// new를 붙이면 객체를 생성하는 생성자가 된다.
var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());