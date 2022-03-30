// no.1
// var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// // subObj->superObj
// subObj.__proto__ = superObj;
// console.log('subObj.subVal =>', subObj.subVal);
// console.log('subObj.superVal =>', subObj.superVal);
// subObj.superVal = 'sub';
// console.log('superObj.superVal =>', superObj.superVal);

// no.2
var superObj = {superVal:'super'}
//Object.create({for extends class}})
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);