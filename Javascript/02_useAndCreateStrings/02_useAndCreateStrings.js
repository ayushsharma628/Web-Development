// Single Line String:

let firstName = "Ayush";
let secondName = "Sharma";

// Concate String With The Plus Operator:
let name = firstName + " " + secondName;

//Concate String With Template Literals:
let fullname = `${firstName} ${secondName}`;

//Multi-Line String With \n:
let quote = "abcs\nabsms\naksjdsk\n";

//Multi-Line String With Backticks:
let bio = `lorem espraso sniep
abcsd ajsdial
my name is ayush sharma`;

//String Length:
let length =  quote.length;

// Accessing Specific Length:
let seconCharacter = quote[1];
console.log(seconCharacter);

//finding a substring:
let idx1 = fullname.indexOf("Ay");
console.log(`Index 1: ${idx1}`);
let idx2 = fullname.indexOf("sh");
console.log(`Index 2: ${idx2}`);

//Does string contain a substring:
let doesContain = fullname.includes("Ay");
console.log(doesContain);