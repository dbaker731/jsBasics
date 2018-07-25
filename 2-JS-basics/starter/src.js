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



// var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI, compareBMI;

// johnMass = 100;
// johnHeight = 2;
// johnBMI = johnMass / ( johnHeight * johnHeight);

// markMass = 190;
// markHeight = 2.1;
// markBMI = markMass / ( markHeight * markHeight);

// console.log( markBMI, johnBMI );

// // compareBMI = markBMI > johnBMI;

// if ( markBMI > johnBMI ) {
//     console.log( 'Mark\'s BMI is higher than John\'s');
// } else {
//     console.log( 'Mark\'s BMI is not higher than John\'s' );
// }

/*
* Boolean Logic
*/

// let firstName = 'John';
// let age = 20;

// if ( age < 13 ) {
//     console.log( firstName + ' is a boy' );
// } else if ( age >= 13 && age < 20 ) {
//     console.log( firstName + ' is a teenager' );
// } else if ( age >= 20 && age < 30 ) {
//     console.log( firstName + ' is a young man' );
// } else {
//     console.log( firstName + ' is a man' );
// }


/*
* Ternary Operator and Switch Statements
*/

// var firstName = 'John';
// var age = 31;

// // age >= 18 ? console.log( firstName + ' drinks beer.') : console.log( firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';

// console.log( firstName + ' drinks ' + drink );



// var job = 'instructor';

// switch ( job ) {
//     case 'teacher':
//     case 'instructor':
//         console.log( firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log( firstName + ' drives an uber.');
//         break; 
//     case 'designer':
//         console.log( firstName + ' desgins websites.');
//         break;     

//     default:
//         console.log( firstName + ' is unemployed.');
//         break;
// }



// switch ( true ) {
//     case age < 13:
//         console.log( firstName + ' is a boy' );
//         break;

//     case age >= 13 && age < 20:    
//         console.log( firstName + ' is a teenager' );
//         break;

//     case age >= 20 && age < 30 :
//         console.log( firstName + ' is a young man' );
//         break;

//     default:
//         console.log( firstName + ' is a man' );
//         break;   
// }



/*
* Truthy and Falsey 
*/

// var height = 23;

// if ( height || height === 0 ) {
//     console.log( 'boop' );
    
// } else {
//     console.log( 'no boop' );
// }

// // var test = height ? 'boop' : 'no boop';
// // console.log(test);

// if ( height == '23' ) {
//     console.log( 'the height is 23' );
// }




/*
* Coding challenge #2
*/

// var johnScores = [ 89, 120, 103 ];
// var johnAvg = johnScores.reduce( ( a, b ) => a + b, 0 ) / johnScores.length;

// var mikeScores = [ 116, 94, 123 ];
// var mikeAvg = mikeScores.reduce( ( a, b ) => a + b, 0 ) / mikeScores.length;

// var maryScores = [ 97, 134, 105 ];
// var maryAvg = maryScores.reduce( ( a, b ) => a + b, 0 ) / maryScores.length;

// switch ( true ) {
//     case mikeAvg > johnAvg && mikeAvg > maryAvg:
//         console.log( 'Mike\'s team won with an avergare score of ' + mikeAvg + ' to ' + johnAvg, maryAvg );
//         break;

//     case johnAvg > mikeAvg && johnAvg > maryAvg:
//         console.log( 'John\'s team won with an avergare score of ' + johnAvg + ' to ' + mikeAvg, maryAvg );
//         break;  
        
//     case maryAvg > mikeAvg && maryAvg > johnAvg:
//         console.log( 'Mary\'s team won with an avergare score of ' + maryAvg + ' to ' + mikeAvg, johnAvg );
//         break;   

//     default:
//         console.log('The three teams tied');
//         break;
// }


/*
* Functions
*/

// function calcuateAge( birthYear ) {
//     return 2018 - birthYear;
// }

// var ageJohn = calcuateAge( 1990 );
// var ageMike = calcuateAge( 1948 );
// var ageJane = calcuateAge( 1969 );

// console.log( ageJohn, ageMike, ageJane );


// function yearsUntilRetire ( year, firstName ) {
//     var age = calcuateAge ( year );
//     var retirement = 65 - age;

//     if ( retirement > 0 ) {
//         console.log( firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log( firstName + ' is already retired.' );
//     }
    
// }

// yearsUntilRetire( 1993, 'Daniel' );
// yearsUntilRetire( 1948, 'Mike' );
// yearsUntilRetire( 1969, 'Jane' );


/*
* Function statements and expressions
*/

var whatDoYouDo = function( job, firstName ) {
    switch ( job ) {
        case 'teacher':
            return firstName + ' teaches kids how to code';

        case 'driver':
            return firstName + ' drives a cab in Lisbon';

        case 'designer':
            return firstName + ' designs websites';

        default:
            return firstName + ' is unemployed';
    }
};

console.log( whatDoYouDo( 'designer', 'John' ) );
 