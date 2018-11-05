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
/* Tipe Data dan Objek */
var contoh = 10;

console.log(typeof(contoh));

contoh = "bintang";

console.log(typeof(contoh));

/* Primitive Data Type
-------------------------
1. string     // "nama saya bintang"
2. number     // 1000
3. boolean    // true / false
4. null       // no value at all
5. undefined  // undefined represents value not uet defined

 */


 /* Non - Primitive Data Type
 -------------------------
 1. Object    // represents an instance of an object
 2. Array     // represents group of similar values
 3. RegExp    // represents regular expression
 4. Function  // represents functions
 5. Date      // represents date

  */

  var obj1 = new Object(); // a new object as an object
  var obj2 = new String(); // a new string as an object
  var obj3 = new Number(); // a new number as an object
  var obj4 = new Boolean(); // a new boolean as an object
  var obj5 = new Array(); // a new array as an object
  var obj6 = new RegExp(); // a new RegExp as an object
  var obj7 = new Function(); // a new function as an object
  var obj8 = new Date(); // a new date as an object

//--------------------------------------------//
/* Object

  objek terdiri dari dua bagian, yaitu:
  1. properties : data yang dimiliki oleh objek
  2. methods : actions to be performed with object or its data


  Cara mendefinisikan objek ada 3:
  1. menggunakan keyword "new"
  2. menggunakan construct
  3. menggunakan object literal
 */

 //1. membuat object dengan keyword new
 // kelemahan dari metode ini adalah kita hanya bisa menciptakan 1 objek saja
 var person = new Object();
 person.firstName = "Bintang";
 person.lastName = "Romadhon";
 person.age = 24;
 person.height = 160;
 person.fullName = function(){
   return (person.firstName +" "+ person.lastName);
 };

console.log(person.firstName);
console.log(person["age"]); // properti bisa diakses layaknya element array
console.log(person.fullName());


//2. memmbuat object menggunakan object constructor
function Student(fName, lName, age, hg) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.height = hg;
  this.fullName = function(){
    return (this.firstName +" "+ this.lastName);
  };
}

var myBrother = new Student("Gecol", "Sandi", 22, 170);
var mySister = new Student("Ayun", "Silvi", 23, 155);

console.log(myBrother.firstName);
console.log(myBrother.fullName() );

console.log(mySister.firstName);
console.log(mySister.fullName() );

//3. Membuat object menggunakan object literal
var citizen = {
  firstName: "Russel",
  lastName: "rock",
  age: 15,
  height: 150,
  fullName: function(){
    return this.firstName+" "+this.lastName;
  },
}

console.log(citizen.firstName);
console.log(citizen['age']);
console.log(citizen.fullName() );

var netizen= citizen;
netizen.firstName = "Johnson";

console.log(netizen.firstName);
console.log(citizen.firstName);


delete netizen.firstName;

console.log(netizen.firstName);

// iterasi properti objek
var mobilku = {
  name: "toyota",
  year: "2030",
  color: "Silver",
}

mobilSaya = "";
for(var k in mobilku){
  mobilSaya = mobilSaya + mobilku[k] + " ";
}

console.log(mobilSaya);


// object juga bisa dibuat nested
var apartemen ={
  name: "taman melati",
  height: "245",
  room: {
    name: "double bed",
    price: 27,
  }
}

console.log(apartemen.room.name);

//--------------------------------------------//
/* Date() dan Math() */

var tanggal = new Date();
console.log(tanggal);

// parameternya bisa terdiri dari milisecond, date string, dan kombinasi tahun, bulan, tanggal, dll.

//miliseconds
console.log(new Date(587899999855));


//date string
console.log(new Date("August 22, 2022"));

// date with year, motnh, day, hour, minute, second and miliseconds
//bulan dimulai dari 0
console.log(new Date(2018, 7, 22, 11, 19, 50, 50));

//date bisa kita ambil pecahannya, tahun bulan tanggal hari jam menit detik
var fullDate = new Date();
console.log(fullDate);
console.log( fullDate.getDate() ); //tanggal
console.log( fullDate.getDay() ); //hari -> 0:sunday, 1:Monday, dst
console.log( fullDate.getMonth() );
console.log( fullDate.getFullYear() );
console.log( fullDate.getHours() );
console.log( fullDate.getMinutes() );
console.log( fullDate.getSeconds() );

// fungsi Math
 console.log( Math.sqrt(49) ); // mmencari akar kuadrat
 console.log( Math.min(49, 30, 12, 100) ); // mencari nilai terkecil
 console.log( Math.max(49, 30, 12, 100) ); // mencari nilai terbesar
 console.log( Math.random() ); // membuat nilai secara acak
 console.log( Math.round(99.9) ); // membulatkan angka
 console.log( Math.PI ); // phi


 //--------------------------------------------//
 /* Array object */

var senaray = new Array("Red", "Green", "Blue");
var binatang = new Array("Ayam", "Ikan Koi");
console.log(senaray[1]);
console.log(senaray.length);
console.log(senaray.sort());
console.log(senaray.reverse());

senaray.push("Brown")
console.log(senaray);

senaray.pop("Brown");
console.log(senaray);

console.log(senaray.concat(binatang) );

//array of objects
var myCars = [
  {model: "yamaha", color: "black"},
  {model: "honda", color: "orange"},
  {model: "suzuki", color: "blue"},
];


//iterasi di array object
for (var i=0; i<myCars.length; i++){
  var myCar = "";

  for (var cp in myCars[i]){
    myCar = myCar + myCars[i][cp] + " ";
  }

  console.log(myCar);
}

/*
Coding Exercise – Book Reading Status
 Write a JavaScript program to display the reading status of books.
1. Create an array eBooks and add three objects to this array.
2. Each object should contain title, author and readingStatus properites and
assign them some values. For Example, title: “PHP for Absolute
Beginners”, author:”Jason Lengstorf”, readingStatus: false
3. Loop through array elements and find the reading status of each book object.
4. Display the reading status of each book object using document.write.
*/

var koleksiBuku = [
  {title: "Mysql dasar", author:"Munir", readingStatus:true},
  {title: "MTK teknik", author:"K. Stroud", readingStatus:true},
  {title: "Smackdown Poperti", author:"Mbuh", readingStatus:false},
];

for(var i=0; i<koleksiBuku.length; i++){
  document.write("<br/>judul : " + koleksiBuku[i].title + ", " + "sudah dibaca? " + koleksiBuku[i].readingStatus);
}

//--------------------------------------------//
/** Regular expression & Function Object */
var regExp1 = new RegExp("news");

// alternate syntax
var regExp2 = /news/;

var strtosearch = "This news is a category";

var matchFound = regExp2.test(strtosearch);

console.log("hasil pemeriksaan regExp2 : ", matchFound);

// contoh lain
/** FUNGSI REDIRECT KE MOBILE VERSION
  memeriksa apakah url megnandung kata news*
*/

var str = window.location.href;
var is_news = str.search(/news\//i);
console.log(str + " /news\//i :" + is_news);

//--------------------------------------------//
/** Function Object */
var functionAsObject = new Function("a", "b", "return a*b");
var funct1 = functionAsObject(4, 5);
console.log(funct1);

var funct2 = function(a, b){
  return a*b
};

console.log(funct2(4, 9));

//--------------------------------------------//
/** String */
var negara = new String("This is Indonesia");
console.log(negara);

var nation = "This is Indonesia Republic";
console.log(nation);

// special char
console.log("I like \"vanila\" ice cream");
console.log("I like \\vanila\\ ice cream");

var myFavFood = "I like vanila ice cream";

// string length
console.log("words : "+ myFavFood +" length is : ", myFavFood.length);

// index of
console.log(myFavFood.indexOf("ice"));

// sub string
console.log(myFavFood.substring(14, 17));

// sub replace
console.log(myFavFood.replace("vanila", "choco"));

// uppercase
console.log(myFavFood.toUpperCase());

// lowercase
console.log(myFavFood.toLowerCase());

// char at
console.log(myFavFood.charAt(4));
