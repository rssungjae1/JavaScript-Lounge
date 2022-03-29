// https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67
function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;   
}
 
Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second);
}
 
var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

