"use strict"

// let i = 0
// ;
// while (i < 3){
//     // alert (i);
//     i++;
//     console.log(i)
// }

// let i = 0
// do {
//     console.log(i);
//     i++;
// } while (i<3);

// for (let i = 0; i < 3; i++){
//   alert(i);
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );



// let a = 1 + 2;

// switch (a){
//     case 3:
//         console.log( 'Too small');
//         break;
//     case 6:
//         console.log('Exactly');
//         break;
//     case 5:
//         console.log('Too large');
//         break;
//     default:
//         console.log('I dont know such values')
// }

// let age = prompt( 'How old are you', 100);
// alert( `you are ${age} years old?`);


//.... function declaration
// let userName = 'John';

// function myButton (){
//  let message = 'Welcome, ' + userName;
//     alert (message);
// }
// myButton();

//.....Parameter to a Function

// function showMessage (from, text){
// alert(from + ':' + text);
// }
// showMessage('Ann', 'Hello');
// showMessage('Jane', 'Welcome');

//...Returning a  value

// function sum(a, b){
//     return a + b;   
// }
// let result = sum(9,6) ; 

// alert(result);


// let hour = 8
// if (hour < 10 || hour > 1){
//    console.log('Open');
// }

// function sayHi() {
//     alert( "Hello" );
//   }
//   let func = sayHi;
//   func();
//   sayHi();

// let sayHi = function(){
//     alert('Hello');
// };
// sayHi();

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

// let sum = (a, b) => a + b;
// alert(sum(1,2));

// let sum = function(a,b){
//   return a + b;
// }
// alert(sum(1,2));

// let billion = 1e9;
// alert(billion);

// let num = 225.6;
// alert (Math.trunc(num));

// let num = 12.35567;
// alert(num.toFixed(1));

// let name = "Chukwuemeka";
//    alert(`My name is ${name}`);

// let userAccess = {
//   name: " Paul",
//   "street address": "Aba",
//   age: 25,
//   school: 'Poly',
//   me:{
//     you: 'yes'
//   }
// };
// alert(userAccess.age);
// alert(userAccess.me.you);

// let Array = ['Mary', 1, 'John', 5];
//     alert (Array[1])

//     Array[2]();

// alert(Array[4]= 'Chi');

// let footy = ['chelsea', 'manchi', 'arsenal', 'liverpool'];
//      footy.unshift('wigan');
//      alert(footy)

// let coming = ['1', 'will', 'go', 'home'];
//     delete coming [1];
//     // alert(coming);
//     alert(coming[1]);
//     alert(coming.length);

// let pamu = ['noodle', 'milk', 'yoghurt', 'spagheti'];
//     // pamu.splice(0,1);
//     // pamu.splice(0,3, "lets", "dance");
// //     let remove = pamu.splice(1, 1);
// // alert(removed);
//     pamu.splice(-1, 2);
// alert(pamu);

// let arr = [1, 2];
// // alert(arr.concat([3,4, 5, 6], 7, 8));
// let arrLike = {
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };
// console.log(arr.concat(arrLike));

// let users = [
//    {id: 1, name: "John"},
//    {id: 2, name: "Pete"},
//    {id: 3, name: "Mary"}
// ];
// let user = users.find(item => item.id == 2);
// console.log(user.name);


// function sum(){
//     console.log(2+2)
// };
// sum()

// let boy = ['men',1, 2, 3, 4]
// for (let char of boy){
//    alert(char);
// };

// let user = {
//     name: "John",
//     age: 20,
//     toString(){
//         return `{name: "${this.name}", age: ${this.age}}`;
//     }
// };
// console.log(user);

// let Chimdi = {
//     name: 'Chi',
//     age: 2,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };

// let json = JSON.stringify(Chimdi);
// // console.log(json);
// console.log(typeof json);

/////////////////////let Chimdi = {
//     name: 'Chi',
//     age: 2,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };

// let json = JSON.stringify(Chimdi);
// // console.log(json);
// console.log(typeof json);

/* Object*/

// function pow(x, n) {
//     if (n < 0) {
//       alert("Negative 'n' not supported");
//     } else {
//       let result = 1;
  
//       for (let i = 0; i < n; i++) {
//         result *= x;
//       }
  
//       return result;
//     }
//   }
//   console.log(result)

/* 2 */

// let student = prompt('What type of student?', '');
// if (student == 'boy') {
//   alert( 'you are a male student' ) 
// } else if (student === 'girl') {
//   alert( 'you are a female student' );
// }  else if (student === 'adult') {
//   alert( 'you are adult student' );
// } 
// else {
//   alert( 'you are not a student!' );
// }
// alert();

/* 3 */

// let name = prompt('What is your name?', '');

// alert(`Your name is ${name}!`);

// /* 4 */
// if (a + b) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
// alert();

// let city = 'Aba'
// let country = 'Nigeria'
// let location = city + ',' + country

// // console.log(location)

// document.querySelector('h1').style.color='green'
// document.querySelector('h2').style.fontSize='40px'
// document.querySelector('button').innerHTML = "Bring it on"

// const name=()=>{
//     alert("you just alerted a message")
// }
// let button = document.querySelector(".button1")
// button.addEventListener("click",name)


// let face = document.querySelector(".bose")
// face.addEventListener("mouseenter", function(){
//     alert("mouse is entering")
// })

// let face = document.querySelector(".bose")
// face.addEventListener("keyup", function(){
//     alert("Food available")
// })

// let form = document.querySelector('.goal')
// form.addEventListener("submit", function(){
//     alert("be happy mate")
// })



















