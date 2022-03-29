var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log(memberArray[2]);

var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezhce'
}

console.log(memberObject.manager);
memberObject.manager = 'egoing2';
console.log(memberObject.manager);

console.log(memberObject.developer);
delete memberObject.manager;
console.log(memberObject.manager);
