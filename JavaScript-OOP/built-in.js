console.log(Math.PI);
console.log(Math.random()); // method
console.log(Math.floor(3.9));

var MyMath = {
    PI:Math.PI,
    random:function(){
        return MyMath.floor(Math.random()*10);
    },
    floor:function(val){
        return Math.floor(val);
    }
}

console.log(MyMath.floor(5.7));
console.log(MyMath.random());