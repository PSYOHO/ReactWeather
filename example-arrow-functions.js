// var names = ['Andrzej', 'Julia', 'Jan'];
//
// names.forEach(function (name) {
//   console.log('forEach ', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('PS'));
//
// var person = {
//   name: 'PS',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to '  + name);
//     });
//   }
// };
//
// person.greet();


function add(a,b) {
  return a+b;
}
console.log(add(3,2));
console.log(add(1,9));

var addA = (a,b) => {
  return a + b;
}
console.log(addA(1,9));

var addB = (a,b) => a+b;
console.log(addB(1,9));
