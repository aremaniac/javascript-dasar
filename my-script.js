// Function definition / declaration
function myFirstFunction() {
  // block of code
  document.write("Code execution inside function.");
}
// Function invoke / calling the function
myFirstFunction();

//--------------------------------------------//

// Function wit parameters
function functionWithParameters(p1, p2) {
  var z = p1 * p2;
  document.write("<br>p1 * p2 = " + z + "<br/>");
}
// Function call with argument
functionWithParameters(10, 20);

//--------------------------------------------//

// function as value,
function functionAsValue(func){
  func();
}

function alertHello(){
  alert("hello world!");
}

// invoke helloWorld function via a function (as value)
functionAsValue( alertHello );

//--------------------------------------------//

// anoteher ex funtion as value
document.write("Perkalian " + perkalian(10, 20) );

function perkalian(p1, p2) {
  return p1 * p2;
}

//--------------------------------------------//

// Anonymous function
var isAdult = function(age){
  if(age >= 18){
    return 'yes, adult.';
  }else{
    return 'not an adult.';
  }
}

var cekAdult = isAdult(24);

document.write("<br/> adult status : " + cekAdult);

//--------------------------------------------//
// self executing anonymous function
(function(){
  alert("Auto show up message.");
})();

//alternative
(function(){
  alert("2nd - Auto show up message.");
}());

// with parameters

//alternative
(function(a, b){
  var res = a*b;
  alert("Perkalian a dan b adalah " + res);
}(27, 19));

// anonymous function that return value
var multiple = (function(a, b){
  return a * b;
})(90,11);

alert("Perkalian anonymous : " + multiple);
//--------------------------------------------//

// pembahasan tentang global dan local scope

var angka = 10;

function localVar(){
  var nama = 'nama saya';
  return nama;
}

function globalVar(){
    nama = 'nama saya'; // jadi variabel dengan scope global karena tidak didefinisikan
    document.write('<br>Nama : ' + nama); // mengakses variabel global "nama"
}

globalVar();
document.write('<br>Nama : ' + nama); // mengakses variabel global "nama"

//--------------------------------------------//

/*
Coding Exercise – Find Age
 Write a JavaScript program to find your age. Create a function calculateAge that will take
two argumnets birthYear, currentYear and then perform the required block of code to
find your age and finally display your age using document.write.
*/

//--------------------------------------------//
/*Dialog Box
ada 3:
alert
confirm
prompt

*/

//--------------------------------------------//
/*Kita juga bisa mengetik function di console window di debug mode chrome */

//--------------------------------------------//
