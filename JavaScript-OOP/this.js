var kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function(f,s){
        return f+s;
    }
}

console.log(kim.sum(kim.first, kim.second));

var song = {
    name:'song',
    first:10,
    second:20,
    sum:function(){
        return this.first + this.second;
    }
}

console.log(song.sum());