// Function constructor

// var Person = function( name, yearOfBirth, job ) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calcAge = function() {
//     console.log( 2018 - this.yearOfBirth );
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person( 'John', 1990, 'teacher' );
// john.calcAge();

// var jane = new Person( 'Jane', 1969, 'designer' );
// jane.calcAge();

// var mark = new Person( 'Mark', 1948, 'retired' );
// mark.calcAge();

// console.log( john.lastName );
// console.log( jane.lastName );
// console.log( mark.lastName );

// console.log( john );


// Object.create

// var personProto = {
//     calcAge: function() {
//         console.log( 2016 - this.yearOfBirth );
//     }
// };

// var john = Object.create( personProto );

// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// console.log( john );

// var jane = Object.create( personProto, 
//     {
//         name: { value: 'Jane' },
//         yearOfBirth: { value: 1969 },
//         job: { value: 'designer' },
//     } 
// );

// console.log( jane );

// jane.calcAge();


// Primitives vs objects

// Primitives
// var a = 23;
// var b = a;
// a = 46;

// console.log( a, b );

// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;

// obj1.age = 30;

// console.log( obj1.age, obj2.age );


// // Functions

// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change( a, b ){
//     a = 30;
//     b.city = 'San Francisco';
// }

// change( age, obj );

// console.log( age, obj.city );


//Functions as arguments

var years = [ 1990, 1965, 1937, 2005, 1998 ];

function arrCalc( arr, cb ) {
    var arrRes = [];

    for (let i = 0; i < arr.length; i++) {
        arrRes.push( cb( arr[i] ) );        
    }

    return arrRes;
}

function calcAge( el ) {
    return 2016 - el;
}

function isFullAge( el ){
    return el >= 18;
}

function maxHeartRate( el ){
    if ( el >= 18 && el <= 81) {
        return Math.round(206.9 - ( 0.67 * el )); 
    } else {
        return -1;
    }

}

var ages = arrCalc( years, calcAge );
console.log( ages );

var fullAges = arrCalc( ages, isFullAge );
console.log( fullAges );

var heartRates = arrCalc( ages, maxHeartRate );
console.log( heartRates );


