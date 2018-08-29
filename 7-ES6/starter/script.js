//jshint esversion: 6

// let and const

// //ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// //ES6

// const name6 = 'Jane Smith';
// let age6 = 23;
// // name6 = 'HEHE';

// console.log(name6);


// ES%

// function driversLicence5( passedTest ) {
//     if ( passedTest ) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;        
//     }
//     console.log( firstName, yearOfBirth );
// }

// driversLicence5(1);

// // ES6
// function driversLicence6( passedTest ) {
//     let firstName;
//     const yearOfBirth = 1990;
//     if ( passedTest ) {
//         firstName = 'John';
//     }
//     console.log( firstName, yearOfBirth );
// }

// driversLicence6(1);

// let i = 23;


// {
//     const a = 1;
//     let b = 2;
// }

// console.log(a);

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge( year ) {
//     return 2016 - year;
// }


// // es5
// // console.log('This is ' + firstName + ' ' + lastName + ', He was born in ' + yearOfBirth +'. Today he is ' + calcAge( yearOfBirth ) + ' years old.');


// // es6
// console.log( `This is ${firstName} ${lastName}, he was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.` );

// const n = `${firstName} ${lastName}`;


// console.log( n.startsWith( 'J' ) );
// console.log( n.endsWith( 'h' ) );
// console.log( n.includes( ' ' ) );
// console.log( `${firstName} `.repeat(5) );


// const years = [ 1990, 1965, 1982, 1937 ];

// // ES5

// var ages5 = years.map( function( el ) {
//     return 2016 - el;
// });

// console.log( ages5 );

// // es6

// let ages6 = years.map( el => 2016 - el );

// console.log( ages6 );

// ages6 = years.map( ( el, i ) => `Age element ${i + 1}:  ${2016 - el}` );


// console.log( ages6 );


// ages6 = years.map( ( el, i ) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${i + 1}: ${age}`;
// } );

// console.log( ages6 );


// ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         document.querySelector( '.green' ).addEventListener( 'click', function() {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     },
// };

// // box5.clickMe();

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector( '.green' ).addEventListener( 'click', () => {
//             var str = `This is box number ${ this.position } and it is ${ this.color }.`;
//             alert(str);
//         });
//     },
// };

// box6.clickMe();

// // const box66 = {
// //     color: 'green',
// //     position: 1,
// //     clickMe: () => {
// //         document.querySelector( '.green' ).addEventListener( 'click', () => {
// //             var str = `This is box number ${ this.position } and it is ${ this.color }.`;
// //             alert(str);
// //         });
// //     },
// // };

// // box66.clickMe();


// function Person( name ) {
//     this.name = name;
// }

// Person.prototype.myFriends5 = function( arr ) {
    
//     var friends = arr.map( function( el ) {
//         return this.name + ' is friends with ' + el;
//     }.bind( this ) );
    
//     console.log(friends);
    
// };

// var friends = [ 'Bob', 'Jane', 'Mark' ];

// new Person( 'John' ).myFriends5( friends );



// Person.prototype.myFriends6 = function( arr ) {
    
//     var friends = arr.map( el => `${ this.name } is friends with ${ el }` );
    
//     console.log(friends);
    
// };

// new Person( 'Mike' ).myFriends6( friends );


// ES5
// var john = [ 'John', 26 ];
// // var name = john[0];
// // var year = john[1];

// // ES6
// const [ name, age ] = john;
// console.log( name, age );

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const { firstName, lastName } = obj;
// console.log( firstName );
// console.log( lastName );

// const { firstName: a, lastName: b } = obj;

// console.log( a, b );

// function calcAgeRetirement( year ) {
//     const age = new Date().getFullYear() - year;
//     return [ age, 65 - age ];
// }

// const [ age2, retirement ] = calcAgeRetirement( 1990 );

// console.log( age2, retirement );

// const boxes = document.querySelectorAll( '.box' );

// // ES5

// var boxesArray5 = Array.prototype.slice.call( boxes );

// console.log(boxesArray5);

// // boxesArray5.forEach( cur => {
// //     cur.style.backgroundColor = 'dodgerblue';
// // });


// const boxesArray6 = Array.from( boxes );
// boxesArray6.forEach( el => el.style.backgroundColor = 'dodgerblue' );


// // ES5

// // for (let i = 0; i < boxesArray5.length; i++) {
// //     if ( boxesArray5[i].className === 'box blue' ) {
// //         continue;
// //     }
// //     boxesArray5[i].textContent = 'I changed to blue!';
// // }


// ES6
// for (const cur of boxesArray6) {
//     if ( cur.className.includes('blue') ) {
//         continue;
//     }
//     cur.textContent = 'I was changed to blue!';
// }

// es5

// var ages = [ 12, 17, 8, 21, 14, 11, 27 ];

// var fullAge = ages.map( function( cur ) {
//     return cur >= 18;
// } );

// console.log( fullAge );

// console.log( fullAge.indexOf( true ) );
// console.log( ages[fullAge.indexOf( true )] );


// // ES6
// console.log( ages.findIndex( cur => cur>= 18 ) );
// console.log( ages.find( cur => cur >= 18 ) );




// Spread Operator

// function addFourAges( a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges( 18, 30, 12, 21 );
// console.log( sum1 );

// // ES5
// var ages = [ 18, 30, 12, 21 ];

// var sum2 = addFourAges.apply( null, ages );
// console.log( sum2 );

// // ES6
// const sum3 = addFourAges(...ages);
// console.log( sum3 );

// const familySmith = [ 'John', 'Jane', 'Mark' ];
// const familyMiller = [ 'Mary', 'Bob', 'Ann' ];
// const bigFamily = [ ...familySmith, 'Lilly', ...familyMiller ];

// console.log( bigFamily );


// const h = document.querySelector( 'h1' );
// const boxes = document.querySelectorAll( '.box' );
// const all = [ h, ...boxes ];

// Array.from( all ).forEach( cur => cur.style.color = 'purple' );


// REST PARAMETERS

// ES5

// function isFullAge5() {
//    // console.log( arguments );
//     var argsArr = Array.prototype.slice.call( arguments );
//     console.log( argsArr );
    
//     argsArr.forEach( function( cur ) {
//         console.log( ( 2016 - cur ) >= 18 );
//     });
// }

// // isFullAge5( 1990, 1999, 1965 );
// // isFullAge5( 1990, 1999, 1965, 2016 );

// // ES6

// function isFullAge6( ...years ) {
//     console.log( years);
//     years.forEach( cur => console.log( ( 2016 - cur ) >= 18) );
// }

// isFullAge6( 1990, 1999, 1965 );


// function isFullAge5( limit ) {
//     // console.log( arguments );
//      var argsArr = Array.prototype.slice.call( arguments, 1 );
//      console.log( argsArr );
     
//      argsArr.forEach( function( cur ) {
//          console.log( ( 2016 - cur ) >= limit );
//      });
//  }
 
//  isFullAge5( 40, 1990, 1999, 1965 );
//  // isFullAge5( 1990, 1999, 1965, 2016 );
 
//  // ES6
 
//  function isFullAge6( limit, ...years ) {
//      console.log( years );
//      years.forEach( cur => console.log( ( 2016 - cur ) >= limit) );
//  }
 
//  isFullAge6( 40, 1990, 1999, 1965 );




// DEFAULT PARAMETERS

// function SmithPerson( firstName, yearOfBirth, lastName, nationality ) {
    
//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'Scottish' : nationality = nationality;
    
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }


// function SmithPerson( firstName, yearOfBirth, lastName = 'Smith', nationality = 'Scottish' ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }
// var john = new SmithPerson( 'John', 1990 );
// console.log( john );

// var emily = new SmithPerson( 'Emily', 1983, 'Diaz', 'Spanish' );
// console.log( emily );






// MAPS

// const question = new Map();
// question.set( 'question', 'What is the official name of the latest majpr JS version?' );
// question.set( 1, 'ES5' );
// question.set( 2, 'ES6' );
// question.set( 3, 'ES2015' );
// question.set( 4, 'ES7' );
// question.set( 'correct', 3 );
// question.set( true, 'Correct Answer' );
// question.set( false, 'Wrong try again' );

// console.log( question );

// console.log( question.get( 'question' ) );

// console.log( question.size );


// if ( question.has( 4 ) ) {
//     question.delete( 4 );
// }

// console.log( question );

// question.clear();

// console.log( question );


// question.forEach( ( val, key ) => console.log( `This is ${ key }, and it's value is set to: ${ val }`) );

// for ( let [ key, val ] of question.entries() ) {
//     if ( typeof( key ) === 'number' ) {
//         console.log( `Answer ${ key }: ${ val }`);
//     }
// }

// const ans = parseInt( prompt( 'Write the correct answer' ) );

// console.log( question.get( ans === question.get( 'correct' ) ) );


// CLASSES

//ES5

// function Person5( name, yearOfBirth, job ) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calcAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log( age );
// }

// var john5 = new Person5( 'John', 1990, 'Teacher' );

// john5.calcAge();

// // ES6

// class Person6 {
//     constructor( name, yearOfBirth, job ){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calcAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log( age );
//     }

//     static greeting() {
//         console.log('Hey there');
        
//     }
// }

// const john6 = new Person6( 'Jane', 1990, 'Teacher' );

// john6.calcAge();

// Person6.greeting();



// SUBCLASSES
//ES5

// function Person5( name, yearOfBirth, job ) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calcAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log( age );
// }

// function Athlete5( name, yearOfBirth, job, olympicGames, medals ){
//     Person5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create( Person5.prototype );

// Athlete5.prototype.wonMedal = function(){
//     this.medals ++;
//     console.log( this.medals );  
// }

// var johnAthlete5 = new Athlete5( 'John', 1990, 'Swimmer', 3, 10 );
// console.log( johnAthlete5 );

// johnAthlete5.calcAge();
// johnAthlete5.wonMedal();



// //ES6
// class Person6 {
//     constructor( name, yearOfBirth, job ){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calcAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log( age );
//     }

// }

// class Athlete6 extends Person6 {
//     constructor( name, yearOfBirth, job, olympicGames, medals ){
//         super( name, yearOfBirth, job );
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }
//     wonMedal() {
//         this.medals ++;
//         console.log( this.medals );
        
//     }
// }

// const johnAthlete6 = new Athlete6( 'Jane', 1991, 'swimmer', 3, 12 );
// johnAthlete6.calcAge();
// johnAthlete6.wonMedal();
// console.log( johnAthlete6 );








// CODING CHALLENGE 8

let parks = [];
let streets = [];


// Creating a town element superclass
class TownElement {
    constructor( name, buildYear ) {
        this.name = name;
        this.buildYear = buildYear;
        if ( this.constructor.name === 'Park' ) {
            parks.push( this );
        } else {
            streets.push( this );
        }
    }
    get age() {
        return new Date().getFullYear() - this.buildYear;
    }

}

// Creating a Park subclass to a Town Element
class Park extends TownElement {
    constructor( name, buildYear, numOfTrees, area ){
        super( name, buildYear );
        this.numOfTrees = numOfTrees;
        this.area = area;
    }

    get treeDensity() {
        return this.numOfTrees / this.area;
    }
}

// Creating park objects
const nationalPark = new Park( 'National Park', 1990, 1000, 2 );

const safariZone = new Park( 'Safari Zone', 1995, 10001, 2 );

const kanto = new Park( 'Kanto', 2000, 100, 2 );


// Creating a Street subclass to a Town Element
class Street extends TownElement {
    constructor( name, buildYear, length, size = 'normal' ){
        super( name, buildYear );
        this.length = length;
        this.size = size;
        
    }
}

const canalStreet = new Street( 'Canal Street', 2000, 1000, 'small' );

const firstStreet = new Street( '1st Street', 2005, 1500 );

const spencerDrive = new Street( 'Spencer Drive', 2010, 2000, 'large' );


function averageNumbers( arr ) {
    let totalArr = [];

    totalArr = arr.map( el => {
        if ( el.length ) {
            return el.length;
        } else {
            return el.age;
        }
    });

    var sum = totalArr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    return { 
            total: sum, 
            avg: sum / arr.length 
    };
}

// Creating parks report
function averageAge( arr, cb ) {
    let total;
    total = cb( arr );
    console.log( `Our ${ arr.length } parks have an average age of ${ total.avg } years` );
}


function displayTreeDensity() {
    parks.forEach( el => {
        console.log( `${ el.name } has a tree density of ${ el.treeDensity } trees per square km` );
    });
}

function thousandTree(){
    parks.forEach( el => {  
        if ( el.numOfTrees > 1000) {
            console.log( `${el.name} has more than 1000 trees` );
        } 
    });
}


// Displaying parks report
function parksReport() {
    console.log(`----- Parks Report -----`);
    averageAge( parks, averageNumbers );
    displayTreeDensity();
    thousandTree();
}

// Creating streets report
function averageLength( arr, cb ) {
    let total;
    total = cb( arr );
    console.log( `Our ${ arr.length } streets have a total length of ${ total.total }, with an average length of ${ total.avg } km` );
}

function displayStreet() {
    streets.forEach(el => {
        console.log( `${ el.name }, built in ${ el.buildYear }, is a ${ el.size } street` );
    });
}

// Displaying street report
function streetsReport() {
    console.log(`----- Streets Report -----`);
    averageLength( streets, averageNumbers );
    displayStreet();
} 


// Show report results
parksReport();
streetsReport();