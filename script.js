//1
const x = "Hello",
	y = "World";
console.log(`${x} ${y}`);

//2
const multiply = (a = 1, b = 1) => {return a * b};
console.log(multiply(5));

//3
const average = (...numbers) => numbers.reduce( (f, l) => f + l) / numbers.length;
console.log(average(1,8,3,5,10,13));

//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(... grades));

//5

const structure = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstName, ,lastName] = structure;
console.log(`Her name is ${firstName} ${lastName}`);