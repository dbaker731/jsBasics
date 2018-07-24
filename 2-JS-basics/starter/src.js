/*
* Variables and data types
*/

// var firstName = 'John';
// console.log( firstName );

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log( fullAge );

// var job;
// console.log( job );

// job = 'Teacher';
// console.log( job );

// Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';
// var if = 23;



/*
* Variables mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log( firstName + ' ' + age );

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log( firstName + ' is a ' + age + ' years old ' + job +'. Is he married? ' + isMarried );

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert( firstName + ' is a ' + age + ' years old ' + job +'. Is he married? ' + isMarried );

var lastName = prompt('What is his last name?');
console.log( firstName + ' ' + lastName );
*/



/*
* Basic operators
*/

// var year, yearJohn, yearMark, ageJohn, ageMark;
// year = 2020;
// ageJohn = 28;
// ageMark = 33;
// // Math operators
// yearJohn = year - ageJohn;
// yearMark = year - ageMark;

// console.log( yearJohn );

// console.log( year + 2 );
// console.log( year * 2 );
// console.log( year / 10 );

// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log( johnOlder );


// // typeof operator
// console.log( typeof johnOlder );
// console.log( typeof ageJohn);
// console.log( typeof 'Mark is older');
// var x;
// console.log( typeof x);

/*
* Operator precedence
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log( isFullAge );

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = ( ageJohn + ageMark ) / 2;
// console.log( average );

// // Multiple assignemnts
// var x, y;
// x = y = ( 3 + 5 ) * 4 - 6;
// console.log( x, y );

// // more operators
// x *= 2;
// console.log( x );
// x += 10;
// console.log( x );
// x ++;
// console.log( x );


/*
* Coding challenge #1
*/

// var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI, compareBMI;

// johnMass = 100;
// johnHeight = 2;
// johnBMI = johnMass / ( johnHeight * johnHeight);

// markMass = 190;
// markHeight = 2.1;
// markBMI = markMass / ( markHeight * markHeight);

// console.log( markBMI, johnBMI );

// compareBMI = markBMI > johnBMI;


// console.log( 'Is Mark\'s BMI higher than John\'s? ' + compareBMI );


/*
* If / Else Statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if ( civilStatus === 'married' ) {
//     console.log( firstName + ' is married' );
// } else {
//     console.log( firstName + ' will hopefully marry soon' );
// }

// var isMarried = true;

// if ( isMarried ) {
//     console.log( firstName + ' is married' );
// } else {
//     console.log( firstName + ' will hopefully marry soon' );
// }



var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI, compareBMI;

johnMass = 100;
johnHeight = 2;
johnBMI = johnMass / ( johnHeight * johnHeight);

markMass = 190;
markHeight = 2.1;
markBMI = markMass / ( markHeight * markHeight);

console.log( markBMI, johnBMI );

// compareBMI = markBMI > johnBMI;

if ( markBMI > johnBMI ) {
    console.log( 'Mark\'s BMI is higher than John\'s');
} else {
    console.log( 'Mark\'s BMI is not higher than John\'s' );
}

/*
* Boolean Logic
*/
