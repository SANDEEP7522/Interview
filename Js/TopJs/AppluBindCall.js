// Apply method 

var employee01 = { firstName: 'Sandeep', lastName: 'Sahu' };
var employee02 = { firstName: 'Anupam', lastName: 'Singh' };

function getFullName( greeting01, greeting02 ) {
  console.log( greeting01 + ' ' + this.firstName + ' ' + this.lastName + ' ' + greeting02 );
  
}

getFullName.apply( employee01, [ 'Hello', 'Good Morning' ]);
getFullName.apply( employee02, [ 'Hello', 'Good Morning' ]);


// Bind method

var employee03 = { firstName: 'Anurag', lastName: 'Pal', age: 20 };
var employee04 = { firstName: 'Abhishek', lastName: 'Kumar', age: 21 };

function Invite( greeting03, greeting04, age ) {
     console.log( greeting03 + ' ' + this.firstName + ' ' + this.lastName + ' ' + greeting04 + ' ' + age + ' ' + this.age
     );  
}

var bindInvite03 = Invite.bind( employee03, 'Hello', 'Good Morning Bro', 'Age is' );
var bindInvite04 = Invite.bind( employee04, 'Hello', 'Good Morning Bhaya', 'Age is');

bindInvite03();
bindInvite04();


// Call method

var employee05 = { firstName: 'Vijay', lastName: 'Pal'};
var employee06 = { firstName: 'Sachin', lastName: 'Yadav'};

function test( greeting05, greeting06) {
     console.log( greeting05 + ' ' + this.firstName + ' ' + this.lastName + ' ' + greeting06 );
     
}

test.call( employee05, 'Hello', 'Good boy' );
test.call( employee06, 'Hello', 'Good Girl');