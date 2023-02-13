const age = 12;

if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You cannot vote');
}

// (condition) ? codeIfTrue : codeIfFalse

const verb = (age >= 18) ? 'can' : 'cannot';
console.log(`You ${verb} vote`);