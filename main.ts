//Name Cases: Store a person’s name in a variable, and then print that person’s name 
//in lowercase, uppercase, and titlecase.

let myName : string= "tarIq Zia"
//lowercase
console.log('lowercase:',myName.toLowerCase());
//uppercase
console.log('uppercase:',myName.toUpperCase());
// Titlecase
console.log('titlecase:',myName.replace(/\b\w/g,c=> c.toUpperCase()));
