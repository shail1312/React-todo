// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [5, 4];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);
//
// console.log(...final);

var personOne = ['Shailesh', 23];
var personTwo = ['Shail', 22];

function greet(name, age) {
  console.log('Hi' + name + ', you are ' + age);
}

greet(...personOne);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Bob', ...names];

final.forEach(function (name) {
  console.log('Hi : ' + name);
});
