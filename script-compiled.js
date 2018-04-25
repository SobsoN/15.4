"use strict";

//1
var x = "Hello",
    y = "World";
console.log(x + " " + y);

//2
var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};
console.log(multiply(5));

//3
var average = function average() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	return numbers.reduce(function (f, l) {
		return f + l;
	}) / numbers.length;
};
console.log(average(1, 8, 3, 5, 10, 13));

//4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//5

var structure = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = structure[2],
    lastName = structure[4];

console.log("Her name is " + firstName + " " + lastName);
