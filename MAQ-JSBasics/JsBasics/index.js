// //Data Types in JavaScript
// // let firstName = 'Kofi'
// // var name = 'true'
// // let age = 14;
// // var pi = 3.142;
// // const lastName = 'Noah';

// // console.log(firstName);

// //concatenating strings
// // console.log(firstName + ' ' + lastName)

// // Decision statements in JavaScript
// //1. Simple if statement

// // if (age >= 18){
// //     console.log('You are an adult');
// // } else {
// //     console.log('You are not an adult')
// // }

// // Nested-ifs

// // let age = 3;
// // if (age >= 18) {
// //     console.log('You are an adult');
// // } else if ( age >= 13) {
// //     console.log('You are a teenager');
// // } else if (age >= 6) {
// //     console.log('You are a kid');
// // } else {
// //     console.log('You are a baby');
// // }

// // ternary Operator
// // let age = 16;
// // let messaage = (age >= 18)?
// //     'You are an adult': 'You are not an adult'

// //     console.log(messaage)

// //Switch cases is the same in dart

// //6. functions in javascript

// // function calculateAge(yearOfBirth){
// //     let age = 2021 - yearOfBirth;
// //     return 'You are' + ' '+ age + ' '+ 'years old'
// // }

// // console.log(calculateAge(1999))

// //Anonymous fuction in dart
// // let calculateAge =  (yearOfBirth) => {
// //     let age = 2021 - yearOfBirth;
// //     return 'You are' + ' '+ age + ' '+ 'years old'
// // }

// // console.log(calculateAge(1998))

// //loops

// // let fruits = ['Orange', 'Banana', 'Apple']
// // for (fruit in fruits){
// //     console.log(fruits[fruit])
// // }

// let fruits = ['Orange', 'Banana', 'Apple']
// for (let i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


   
  readline.question('What is your Mark? ', Mark => {
    // console.log(`Hey there ${name}!`);

    try{

    if (Mark >=80 && Mark<= 100){
            console.log('You had an A');
        
        }else if (Mark >= 75){
            console.log('you had a B+');
        
        }else if (Mark >= 70){
            console.log('You had a B');
        
        }else if (Mark >= 65){
            console.log('you had a C+');
        
        }else if (Mark >= 60) {
            console.log('You had a C');
        
        } else if (Mark >= 55){
            console.log('You had a D+');
        
        }else if (Mark >= 50) {
            console.log('You had a D');
        
        }else {
            console.log('You failed');
        }
    } catch (error){
        console.log('error')
    }
    readline.close();
    
  });






//     Mark = parseInt(Mark)
//
