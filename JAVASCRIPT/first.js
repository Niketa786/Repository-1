// ****************************VARIABLES AND DATATYPES****************************

// console.log("Welcome to Apna College");
// console.log("I Love JavaScript");
// let fullName = "Niketa";
// let age = 24;
// let price = 99.99;
// const PI = 3.14;
// x = null;
// y = undefined;
// console.log(PI);

// Object 

// const student = {
//     fullName : "RAHUL",
//     age : 20,
//     cgpa : 8.2,
//     isPass : true,
// };

// console.log(student.age);  //don't put double code on ageif we put "." 
// console.log(student["cgpa"]);  //use double code when we keep age in [] 

// student["age"] = student["age"] + 1;
// console.log(student.age);

// student["fullName"] = "rahul sharma";
// console.log(student["fullName"]);

//=======Practice question=========

// const Product = {
//     title : "Ball pen",
//     rating : 4,
//     offer : 5,
//     price : 270,
// };

// console.log(Product);
// console.log(Product["title"]);

// const Profile = {
//     username : "Niketa",
//     post : 25,
//     followers : 123,
//     isfollow : true,
// };

// console.log(Profile);
// console.log(Profile.isfollow);
// console.log(Profile["post"]);
// console.log(Profile.username);


// ****************************OPERATORS AND CONDITIONAL STATEMENTS****************************

//=======OPERATORS=========

//arithmetic operation

// let a = 5;
// let b = 2;
// console.log("a = ", a,  "& b = ", b);
// console.log("a + b =  ", a+b);
// console.log("a - b =  ", a-b);
// console.log("a * b =  ", a*b);
// console.log("a / b =  ", a/b);
// console.log("a % b =  ", a%b);     //modulus
// console.log("a ** b =  ", a**b);    //exponetioal

// unary operator

//  let a = 5;
//  let b = 2;
//  console.log("a = ", a,  "& b = ", b);
// //  a = a + 1; or  a++;  //6
// //  console.log(a);   //6
// console.log("a++ = " , a++); 
// console.log("a = ", a);   //post-increment
// console.log("++a = " , ++a);    //pre-increment
// console.log("a = ", a);
// // a = a - 1;    // or  a--;  
// //  console.log(a);  //4
// console.log("a-- = " , a--);    //post-decrement
// console.log("a = ", a);
//  console.log("--a = " , --a);    //pre-decrement
//  console.log("a = ", a);

// Assignment Operator 

//  let a = 5;
//  let b = 2;
 
//  a += 4;  //a = a + 4;
//  console.log("a = ", a);  //9

//  a -= 4;  //a = a - 4;
//  console.log("a = ", a);

//  a *= 4;  //a = a * 4;
//  console.log("a = ", a);

//  a /= 4;  //a = a / 4;
//  console.log("a = ", a);

//  a %= 4;  //a = a % 4;
//  console.log("a = ", a);

//  a **= 4;  //a = a ** 4;
//  console.log("a = ", a);

// Comaparision Operator 

// let a = 5;
// let b = 2;

// console.log("a == b", a == b);   //false
// console.log("a === b", a === b);    //false
// console.log("a !== b", a !== b);     //true
// console.log("a != b", a != b);    //true
// console.log("a > b", a > b);      //true
// console.log("a < b", a < b);      //false
// console.log("a >= b", a >= b);     //true
// console.log("a <= b", a <= b);      //false

//Logical Operators

//AND(&&)

// let a = 6;
// let b = 2;

// let cond1 = a > b //true
// let cond2 = a === 6 //true
// console.log("cond1 && cond2 = ", cond1 && cond2);

// let cond3 = a > b //true
// let cond4 = a === b //false
// console.log("cond3 && cond4 = ", cond3 && cond4);   //false

//OR(||)

// let a = 6;
// let b = 2;

// let cond1 = a > b //true
// let cond2 = a === 6 //true
// console.log("cond1 || cond2 = ", cond1 || cond2);  //true

// let cond3 = a > b //true
// let cond4 = a === b //false
// console.log("cond3 || cond4 = ", cond3 || cond4);  //true

//NOT(!)

// let a = 6;
// let b = 2;

//  console.log("!(a<b) = ", !(a<b));    //true
//   console.log("!(a>b) = ", !(a>b));    //false


//=======CONDITIONAL STATEMENTS=========

//if Statement

// let mode = "light";
// let color;
// if (mode === "dark") {
//     color = "Black";
// }

// if (mode === "light") {
//     color = "White";
// }
// console.log(color);


// let age = 19;

// if (age >= 18) {
//     console.log("you can vote.");
// }

// if (age < 18) {
//     console.log("you can't vote.");
// }

//if-else Statement

// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "Black";
// } 
// else {
//     color = "White";
// }
// console.log(color);


// let age = 15;
// if (age >= 18) {
//     console.log("you can vote.");
// }
// else {
//     console.log("you can't vote.");
// }


// let num = 15;
// if (num%2 === 0) {
//     console.log(num, "is Even");
// }
// else {
//     console.log(num, "is Odd");
// }

//else if Statement

// let age = 45;
// if (age < 18) {
//     console.log("Junior");
// }
// else if (age > 60) {
//     console.log("Senior");
// } else {
//     console.log("middle");
// }


// let mode = "silver";
// let color;
// if (mode === "dark") {
//     color = "Black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";
// } else if (mode === "purple") {
//     color = "purple";
// }
// else {
//     color = "White";
// }
// console.log(color);


//ternary operator 
//condition? true o/p : false o/p;

// let age = 25;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

//switch statement

// const expr = "papayas";

// switch(expr) {
// case "Oranges" :
//     console.log("Oranges are $0.59 a pound");
// break;
// case "Mangoes" :
//     console.log("mangoes are $1.59 a pound");
// break;
// case "papayas" :
//     console.log("papayas are $2.59 a pound");
//     break;
// default :
// console.log("sorry, we are out of $(expr).");    
// }


//=======Practice question=========

// let name = prompt("hello");
// console.log(name);

// alert("Hello!");

// let num = prompt("enter a numbber");
// if (num%5 === 0) {
//     console.log(num, "is Multipy of 5");
// }
// else {
//     console.log(num, "is not multiply of 5");
// }


// let score = prompt("enter your score: ");
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 70 && score <= 89) {
//     grade = "B"; 
// } else if (score >= 60 && score <= 69) {
//     grade = "C";
// } else if (score >= 50 && score <= 59) {
//     grade = "D";
// } else (score >= 0 && score <= 49) {
//     grade = "F";
// }
// console.log("according to your scores, your grade is: ", grade);


// ****************************Loops and Strings****************************

//=======Loops in JS=========

//For loop

//to print 1 to 5
// for(let i = 1; i <= 5; i++) {
//     console.log("apna college");
// }

//to calculate sum of 1 to n numbers
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum+i;
// }
// console.log("sum = ", sum);

//to print 1 to 5
// for (let i =1; i<=5; i++) {
//     console.log("i = ", i); 
// }


//infinite loop //donot write and execute this code in ur laptop(chrome will not work properly)
// for (let i =1; i>=0; i++) {
//     console.log("i = ", i); 
// }


//while( loop

// let i = 1;
// while(i <=5) {
//     console.log("i = ", i); 
//     console.log("apna college");
//     i++;
// }

//do while loop
// let i = 20;
// do {
//     console.log("i = ", i); 
//     console.log("apna college");
//     i++;
// }while(i <= 10);

// let i = 1;
// do {
//     console.log("i = ", i); 
//     i++;
// }while(i <= 10);

//for of loop

// let str = "Niketa Sanghnayak";
// for (let i of str) {          //iterator -> characters
//     console.log("i = ", i); 
// }

// let str = "Niketa Sanghnayak";
// let size = 0;
// for (let i of str) {          //iterator -> characters
//     console.log("i = ", i); 
//     size++;
// }
// console.log("String size = ", size);   //17(including space)

//for in loop

// let student = {
//     name : "Niketa",
//     age : 20,
//     cgpa : 7.5,
//     isPass : true,
// };

// for(let key in student) {
//     console.log("key = ", key, "value = ", student[key]);
// }

//==========Practice Questions=========

//print even no. from 0 to 100

// for (let num = 0; num<=100; num++) {
// if(num%2 === 0) {
//     console.log("num = ", num); 
//  }
// }

//odd number

// for (let num = 0; num<=100; num++) {
// if(num%2 !== 0) {
//     console.log("num = ", num); 
//  }
// }

//guess the game number

// let gameNum = 25;
// let userNum = prompt("Guess the game number.");

// while(userNum != gameNum) {
//     userNum = prompt("you enterrd wrong number,again guess the number.");
// }
// console.log("Congratulations, you entered the right number.");

// console.log("loop has ended");


//=======Strings in JS=========

// let str1 = "Niketa";
// let str2 = "Sanghnayak"
// console.log(str1);
// console.log(str2);
// console.log(str1.length);
// console.log(str2.length);
// console.log(str1[2]);

//template literals

// let specialstr = `This is a template literals`;
// console.log(specialstr);
// console.log(typeof specialstr);

// let obj = {
//     item : "pen",
//     price : 10,
// };

// let output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// let specialstr = `This is a template literals ${1+2+3}`;
// console.log(specialstr);

// let str = "Nikku\nnick";
// console.log(str.length);
// console.log("nikku\nnick");
// console.log("nikku\tnick");


//String Methods in JS

//toUpperCase()

// let str = "niketa";
// let newstr = str.toUpperCase();
// console.log(str);
// console.log(newstr);

//tolowerCase

// let str = "NIKETA";
// let newstr = str.toLowerCase();
// console.log(str);
// console.log(newstr);

//str.trim()

// let str = "    Niketa sanghnayak   JS           ";
// console.log(str.trim());

//str.slice(start, end?)

// let str = "1234567";
// console.log(str.slice(3, 5));

// let str = "hello";
// console.log(str.slice(3));

//str1.concat(str2);

// let str1 = "hello";
// let str2 = "world";
// // console.log(str1.concat(str2));    
// let res = str1 + str2;
// console.log(res);

//str.replace(searchval, newval);

// let str = "hello";
// console.log(str.replace("h", "Y"));
// console.log(str.replace("lo", "p"));

//str.charAt[idx]

// let str = "ILoveJS";
// console.log(str.charAt(3));

//==========Practice Questions=========

//fullname with length

// let fullName = prompt("enter your fullname without spaces");

// console.log(fullName);
// let username = "@" + fullName + fullName.length;
// console.log(username);


// ****************************ARRAYS****************************

//create array

// let heroes = ["ironman", "batman", "shaktiman", "spiderman", "thor", "hulk"];
// console.log(heroes);
// console.log(heroes[4]);  //for accessing the single value we writting array with it's index
// console.log(heroes[0]);

// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length); //property
// marks[3] = 66 // we are writing like this to change the value 
// console.log(marks[3]);
// console.log(marks);

//Looping over an array

//for loop
// let heroes = ["ironman", "batman", "shaktiman", "spiderman", "thor", "hulk"];
// for (let idx = 0; idx < heroes.length; idx++) {                 //arr.length is always be last index + 1;
// console.log(heroes[idx]);
// }

//for-of loop
// let heroes = ["ironman", "batman", "shaktiman", "spiderman", "thor", "hulk"];
// for (let hero of heroes) {
//     console.log(hero);
// }

// let cities = ["Delhi", "Pune", "Hydrabad", "Mumbai", "Gurgaon", "Bengaluru"];
// for (let city of cities) {
//     // console.log(city);
//     console.log(city.toUpperCase());
// }


//==========Practice Questions=========

//find the average marks
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks) {
//     console.log(val);
//     sum = sum + val;
// }
//   console.log(sum);  //399
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);    //66.5

//storing final price after applying offer
// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);

//OR
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }


                     //ARRAY METHODS


//push() (add to end)
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.push("chips", "burger", "paneer");
// console.log(foodItems);

//pop()  (delete from end and return)
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.pop();
// console.log(foodItems);

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log("deleted", deletedItem);

//toString() (converts array to string)
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.toString();
// console.log(foodItems);

// let marks = [12, 34, 67, 77];
// marks.toString();
// console.log(marks);

//concat()  (joins multiple array and returns result)
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"];
// // let heroes = marvelHeroes.concat(dcHeroes);
// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log(heroes);

//unshift()  (add to start)
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

//shift()  (delete from start and return)
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// console.log(marvelHeroes);
// let deletedHero = marvelHeroes.shift();
// console.log("deleted", deletedHero);
// console.log(marvelHeroes);

//slice()  (return piece of array) 
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "batman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3));
// console.log(marvelHeroes.slice(2));

//splice()  (add, remove, replace)
// let arr = [1, 2, 3, 4, 5, 6, 7];
//add element
// arr.splice(2,0,101);
// console.log(arr);

//delete element
// arr.splice(3,1);
// console.log(arr);

//replace element
// arr.splice(3,1,101);
// console.log(arr);

//delete element
// arr.splice(3);
// console.log(arr);


//==========Practice Questions=========

// let companies = ["Bloomberg", "microsoft", "Uber", "Google", "IBM", "Netflix"];

//remove first company
// companies.shift();
// console.log(companies);

//replace uber with ola
// companies.splice(2,1,"Ola");
// console.log(companies);

//add amazon at the end
// companies.push("Amazon");
// console.log(companies);


// ****************************Functions and Methods****************************

//=======Functions in JS=========

//function performs a specific task
//function without parameter
// function myFunction() {                              //fuction defination
//     console.log("Niketa Sanghnayak");                 
//     console.log("We are learning JS");
// };
// myFunction();                                    //function call
// myFunction();                                  

//function with parameter
// function myFunction(str) {                              
//     console.log(str);                 
//   };
//   myFunction("I Love JS");

// function myFunction(a, b) {                              
//  console.log(a+b); 
// };
// myFunction(4, 5);

//function with return with parameter
// function Mul(x, y) {
//     p = x*y;
//     return p;
// };
// let val = Mul(5, 2);
// console.log(val);

//Arrow Functions

// const arrowDiv = (a, b)=> {
//     console.log(a/b);
// };
// arrowDiv(20, 5);

// const arrowSub = (a, b)=> {
//     return a-b;
// };
// let val = arrowSub(10, 5);
// console.log(val);

// const printHello = ()=> {
// console.log("hello!");
//  };
//  printHello();


//==========Practice Questions=========

//returns the number of vowels in the String
// function countVowel(str) {
//     let count = 0;
//     for (const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" ||
//             char === "E" || char === "I" || char === "O" || char === "U" ) {
//                 count++;
//             }
//     }
//     return count; 
// }
// let val = countVowel("Niketa Sanghnayak");
// console.log(val);           //o/p is 6


//using arrow function
// const arrowVow = (str)=> {
//      let count = 0;
//     for (const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" ||
//             char === "E" || char === "I" || char === "O" || char === "U" ) {
//                 count++;
//             }
//     }
//     return count; 
// }
// let val = arrowVow("nfhhsjakftshvhvfaugvfaeutiwt");
// console.log(val);      //7


//forEach Loop in Array

// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach((val) =>{
// console.log(val);
// });

// let arr = ["mumbai", "pune", "delhi"];
// arr.forEach((val) => {
// console.log(val);
// });

//with 3  parameters
// let arr = ["mumbai", "pune", "delhi"];
// arr.forEach((val , idx, arr) => {
// console.log(val.toUpperCase(), idx, arr);
// });

//==========Practice Questions=========

//print the square of each value

// let nums = [1, 2, 3, 4, 5, 6];
// nums.forEach((val) => {
// console.log(val**2);
// });
//OR
// let nums = [67, 52, 39];

// let calcSquare = (num) => {
//     console.log(num*num);
// }
// nums.forEach(calcSquare);

                                //some more Array methods

//map (creates a new array)
// let nums = [67, 53, 55, 52];
// nums.map((val) => {
//     console.log(val);
// });

// let nums = [67, 53, 55, 52];
// let newArray = nums.map((val) => {
//     console.log(val*val);
// });
// console.log(newArray);


//Filter(creates new array of elements that gives true for a condition)
// let arr = [1, 2, 3, 4, 5, 6];
// let evenArr = arr.filter((val) => {
//     return val%2 === 0;
// });
// console.log(evenArr);

// let arr = [1, 2, 3, 4, 5, 6];
// let oddArr = arr.filter((val) => {
//     return val%2 !== 0;
// });
// console.log(oddArr);


//reduce (returns the single value) 
// let arr = [1,2,3,4];
// const output = arr.reduce((res, curr) => {
//     return res+curr;
// });
// console.log(output);

//largest number
// let arr = [1,2,7,104, 67,92,546,3,4];
// const output = arr.reduce((prev, curr) => {
//     return prev > curr? prev : curr;
// });
// console.log(output);


//==========Practice Questions=========

//filtering the marks of student that scored 90+
// let marks = [97, 64, 32, 49, 99, 96, 86];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);

//taking input from the user and creating new array
// let n = prompt("enter number");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i-1] = i;         //1(0), 2(1), 3(2), 4(3), ..............
// }
// console.log(arr);

//calculating sum  using reduce method
// let n = prompt("enter number");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i-1] = i;         //1(0), 2(1), 3(2), 4(3), ..............
// }
// console.log(arr);
// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(sum);

//calculating product(factorial)  using reduce method
// let n = prompt("enter number");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i-1] = i;         //1(0), 2(1), 3(2), 4(3), ..............
// }
// console.log(arr);
// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log("Factorial", factorial );


// ****************************PART-1(DOM)****************************

//console.log used for print the things
//console.dir used for print the object properties and methods
// console.dir(window);                         //access the document object of html code
// console.dir(window.document);
// console.dir(document);           
// console.dir(document.body);                     //access the body(html) of document object
// console.dir(document.body.childNodes[1]); 

//DOM Manipulation

//selecting with id(#IdName)
// let heading1 = document.getElementById("heading1");   //h1
// console.dir(heading1);
// let heading2 = document.getElementById("heading2");   //h1
// console.dir(heading2);

//selecting with class(.ClassName)
// let headings = document.getElementsByClassName("heading-class");   //h1
// console.dir(headings);

//selecting tag
// let parahs = document.getElementsByTagName("p");   //h1
// console.dir(parahs);

//Query Selector (we can pass id,class, and tag it returns NodeList)

// let elements = document.querySelector("p");   //h1
// console.dir(elements);

// let elements = document.querySelectorAll("p");   // for accessing the tag
// console.dir(elements);

// let elements = document.querySelectorAll(".heading-class");   //for accessing the class
// console.dir(elements);

// let elements = document.querySelector("#heading1");   //for accessing the class
// console.dir(elements);

// console.dir(document.querySelector("div").children);

// let div = document.querySelector("div");
// console.dir(div);

//Properties
// let heading = document.querySelector("h1");
// console.dir(heading);
// console.dir(heading.tagName);
// console.dir(heading.innerText);
// console.dir(heading.innerHTML);
// console.dir(heading.textContent);


//==========Practice Questions=========

// let H2 = document.querySelector("h2");
// // console.dir(H2);
// console.dir(H2.innerText);
// H2.innerText = H2.innerText + "from Apna College Students";  //concat
// console.dir(H2.innerText);

// let divs = document.querySelector(".box");
// console.dir(divs);
// divs[0].innerText = "new unique value1";
// divs[1].innerText = "new unique value2";
// divs[2].innerText = "new unique value3";
// console.dir(divs.innerText);
// console.dir(divs[1].innerText);
// console.dir(divs[2].innerText);

//using loops
// for (let div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }


// ****************************PART-2(DOM)****************************

//Attributtes

//getAttribute(attr) (access the attribute)
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = p.getAttribute("class");
// console.log(para);

// let name = div.getAttribute("name");
// console.log(name);

//setAttribute (set the attribute)
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

//node.Style(change the style)
// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// div.style. fontSize= "25px";
// div.innerText = "HELLO!";

//Insert Elements
// let newBtn = document.createElement("button");
// newBtn.innerText="click me!"; 
// console.log(newBtn);

//node.append()
// let div = document.querySelector("div");
// div.append(newBtn);

//node.prepend()
// let div = document.querySelector("div");
// div.prepend(newBtn);

//node.before()
// let div = document.querySelector("div");
// div.before(newBtn);

//node.after()
// let div = document.querySelector("div");
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML="<i>Hi, I am new!</i>";

// let heading = document.querySelector("body");
// heading.prepend(newHeading);

//node.remove()
// let para = document.querySelector("p");
// para.remove();

// let heading = document.querySelector("h1");
// para.remove();


//==========Practice Questions=========

//Qs1
// let newBtn = document.createElement("button");
// newBtn.innerText="click me!"; 

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// let body = document.querySelector("body");
// body.prepend(newBtn);

//Qs2
// let para = document.querySelector("p"); 
// console.log(para.getAttribute("class"));
// //  console.log(para.setAttribute("class", "newClass")); //o/p is undefined

//for adding both class we use classlist(collection of class attributes of the elements)
// console.log(para.classList.add("newClass"));                 


// ****************************Events in JavaScript****************************

//Event Handling in JS

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a); //26
// };


// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

//Event Object

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
// };

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//      console.log(evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");

// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//      console.log(evt.clientX, evt.clientY);
// };

//Event Listener

//Node.addEventListener(event, callback)
// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("Button1 was clicked.");
// });
// btn1.addEventListener("click", () => {
//     console.log("Button1 was clicked - Handler2");
// });

//we can also access the event objects
// btn1.addEventListener("click", (evt) => {
//     console.log("Button1 was clicked.");
//      console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// });
// btn1.addEventListener("click", () => {
//     console.log("Button1 was clicked - Handler2");
// });

//node.removeEventListener
// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("Button1 was clicked-Handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("Button1 was clicked - Handler2");
// });

// const handler3 = () => {
//     console.log("Button1 was clicked-Handler3");
// };

// btn1.addEventListener("click", () => {
//     console.log("Button1 was clicked - Handler4");
// });

// btn1.removeEventListener("click", handler3);

//==========Practice Questions=========

//changes the screen to light and dark mode when we click the toggle button
// let modeBtn = document.querySelector("#mode");
// let currMode = "light"; //dark

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//             currMode = "dark";
//             document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });

//OR
// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light"; //dark

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//             currMode = "dark";
//             body.classList.add("dark");
//             body.classList.remove("light");
//     } else {
//         currMode = "light";
//        body.classList.add("light");
//        body.classList.remove("dark");
//     }
//     console.log(currMode);
// });


// ****************************Objects and Classes in JavaScript****************************

//Objects
// const student = {
//     fullName:"Niketa Sanghnayak",
//     marks: 92.5,
//     printMarks: function () {
//         console.log("marks = ", this.marks);
//     },
// };

//Prototype in JS

// const employee = {
//     calcTax1() {
//   console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
// };

// const karanArjun2 = {
//     salary : 60000,
// };

// const karanArjun3 = {
//     salary : 70000,
// };

// const karanArjun4 = {
//     salary : 80000,
// };

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// const employee = {
//     calcTax() {
//   console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// };

// karanArjun.__proto__ = employee;

//Classes in JS

// class ToyaotaCar {
//     start() {
//         console.log("start the car.");
//     }

//     stop() {
//         console.log("stop the car.");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyaotaCar();
// let lexus = new ToyaotaCar();
// fortuner.setBrand = "fortuner";
// lexus.setBrand = "lexus";

//Constructor

// class ToyaotaCar {

//     constructor(brand) {
//       console.log("creating new object");
//       this.brand = brand;
//     }

//     start() {
//         console.log("start the car.");
//     }

//     stop() {
//         console.log("stop the car.");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyaotaCar("fortuner");  //constructor
// let lexus = new ToyaotaCar();  //consturctor

// class ToyaotaCar {

//     constructor(brand, mileage) {
//       console.log("creating new object");
//       this.brand = brand;
//       this.mileage = mileage;
//     }

//     start() {
//         console.log("start the car.");
//     }

//     stop() {
//         console.log("stop the car.");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyaotaCar("fortuner", 10);  //constructor
// console.log(fortuner);
// let lexus = new ToyaotaCar("lexus", 12);         //constructor
// console.log(lexus); 

//Inheritance in JS

// class Parent {
//     hello() {
//         console.log("Hello Everyone.");
//     }
// }
//     class Child extends Parent {

//     }
// let obj = new Child();
// console.log(obj);
// console.log(obj.hello());


// class Person {
//     constructor(species) {
//         this.species="Homo sapiens";
//     }

//     eat() {
//         console.log("eating");
//     }

//      sleep() {
//         console.log("sleeping");
//     }

//      work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person {
//     work() {
//         console.log("treat patients");
//     }
// }

// let e1 = new Engineer();
// let d1 = new Doctor();
// let p1 = new Person();

//super keyword

// class Person {
//     constructor(species) {
//         console.log("enter parent constructor");
//         this.species="Homo sapiens";
//     }

//     eat() {
//         console.log("eating");
//     }
// }

// class Engineer extends Person {
//     constructor(branch) {
//         console.log("enter child constructor");
//         super(); //to invoke the parent constructor
//         this.branch = branch;
//         console.log("exit child constructor");
//     }
//     work() {
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("chemical engg");
// console.log(engObj);


// class Person {
//     constructor(name) {
//         this.species="Homo sapiens";
//         this.name = name;
//     }

//     eat() {
//         console.log("eating");
//     }
// }

// class Engineer extends Person {
//     constructor(name) {
//         super(name); //to invoke the parent constructor
//     }
//     work() {
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("Niketa GS");
// console.log(engObj);

//super() (to invoke the methods)

// class Person {
//     constructor(name) {
//         this.species="Homo sapiens";
//         this.name = name;
//     }

//     eat() {
//         console.log("eating");
//     }
// }

// class Engineer extends Person {
//     constructor(name) {
//         super(name); //to invoke the parent constructor
//     }
//     work() {
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("Niketa GS");
// console.log(engObj.work());


//==========Practice Questions=========

// let DATA = "website information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", DATA);
//     }
// }

// let student1 = new User("nikku", "abc@email.com");
// let student2 = new User("thv", "V@email.com");
// console.log(student1);
// console.log(student2);
// console.log(student1.viewData());


// let DATA = "website information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", DATA);
//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         DATA = "Some new value";
//     }
// }

// let student1 = new User("nikku", "abc@email.com");
// let student2 = new User("thv", "V@email.com");
// let admin1 = new Admin("admin", "admin@12email.com");
// console.log(admin1);
// console.log(admin1.editData());


//Error Handling

// let a = 10;
// let b = 5;
// console.log("a= ", a);
// console.log("b= ", b);
// console.log("a+b= ", a+b);
// console.log("a-b= ", a-b);
// try {
// console.log("a-c= ", a-c);
// } catch(err) {
//     console.log(err);
// }
// console.log("a*b= ", a*b);
// console.log("a/b= ", a/b);
// console.log("a+b= ", a+b);

// ****************************Callbacks, Promises & Async-Await in JavaScript****************************

//Synchronous

// console.log("one");
// console.log("two");
// console.log("three");

// function hello() {
//     console.log("hello");
// }
// setTimeout("hello", 2000); //timeout;
//OR
// setTimeout(() => {
//     console.log("hello");
// }, 4000);

//Asynchonous 

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("Three");
// console.log("four");

//Callbacks

//example for Synchronous and Asynchronousin way of setTimeout
// function sum(a, b) {
//     console.log(a+b);
// };
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(1, 2, sum);


// setTimeout(() => {
//     console.log("hello");
// }, 3000);

//Callback Hell

//nesting
// let age = 19;
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// }
// else {
//     console.log("child");
// }

//nested loop
// for(let i = 0; i<5; i++) {
//     let str = "";
//     for (let j=0; j<5; j++) {
//         str = str+j;
//     }
//     console.log(i, str);
// }

//nested callback
// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// };

//data1
//data2
//data3

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// };
//callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData (3, () => {
//             getData(4);
//         });
//     });
// });

//Promises

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
// });                                         //o/p is pending

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
// });                                         //o/p is fullfiled

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error");
// });                                         //o/p is rejected


// function getData(dataId, getNextData) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000);
// }); 
// };

// let finalVal = getData(123);
// console.log(finalVal);

// function getData(dataId, getNextData) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
//         console.log("data", dataId);
//         reject("error");
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000);
// }); 
// };

// let finalVal = getData(123);
// console.log(finalVal);

//.then() & .catch() function in promises

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Iam a promise");
//         // resolve("Success");
//         reject("Network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });
// promise.catch((err) => {
//     console.log("rejected", err);
// });

//promise chaining

// function asynchFunc () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 4000);
//     });
// };

// console.log("fetching data1....");
// let p1 = asynchFunc();
// p1.then((res) => {
//     console.log(res);
// });

//promise chining(fetching data one by one by (.then(.then)) function
// function asynchFunc1 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// };

// function asynchFunc2 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// };

// console.log("fetching data1....");
// let p1 = asynchFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data1....");
// let p2 = asynchFunc2();
// p2.then((res) => {
//     console.log(res);
// });
// });

//OR

// function asynchFunc1 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// };

// function asynchFunc2 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// };

// console.log("fetching data1....");
// asynchFunc1().then((res) => {
//     console.log("fetching data1....");
// asynchFunc2().then((res) => {
// });
// });


// function getData(dataId) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//     }, 3000);
// }); 
// };

//promise chain
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//     console.log(res);
// });
// });

//OR
//proming chaining
// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     return getData(3)
// })
// .then((res) => {
//     console.log(res);
// });

//Topic: Asynch-Await

// function api () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200); 
//         }, 2000);            // in our website 200 represents a successful api call
//     });
// };
// //async await
// async function getWeatherData() {
//    await api(); //1st
//    await api(); //2nd
// }
// console.log(getWeatherData());


// function getData(dataId) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//     }, 3000);
// }); 
// };
// //async await
// async function getAllData() {
//     console.log("fetching data1....");
//     await getData(1);
//     console.log("fetching data2....");
//     await getData(2);
//      console.log("fetching data3....");
//     await getData(3);
//      console.log("fetching data4....");
//     await getData(4);
//      console.log("fetching data5....");
//     await getData(5);
// }
// console.log(getAllData());

//IIFE-immediately invoked function Expression

// function getData(dataId) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//     }, 3000);
// }); 
// };

// (async function getAllData() {
//     console.log("fetching data1....");
//     await getData(1);
//     console.log("fetching data2....");
//     await getData(2);
//      console.log("fetching data3....");
//     await getData(3);
// }) ();


// ****************************Fetch API with project in JavaScript****************************

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getFacts);
// let promise = fetch(URL);
// console.log(promise);
//OR
// const getFacts = async() => {
//     console.log("getting data....");
//     //fetch() returns a first promise
//     let response = await fetch(URL);
// console.log(response);      //JSON formate
// //.json() returns 2nd promise
// let data = await response.json();
// console.log(data[0].text);
// factPara.innertext = data[0].text;   //it print text on screen through html
// }

function getFacts () {
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        console.log(data[0].text);
    });
};