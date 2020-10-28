function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function sum(array) {
	let total = 0;
	array.forEach(element => {
		total += element;
	});
	return total;
}

function multiply(array) {
	let total = 1;
	array.forEach(element => {
		total *= element;
	});
	return total;
}

function power(x, y) {
	let total = 1;
	for (let i = 0; i < y; i++) {
		total *= x;
	}
	return total;
}

function factorial(x) {
	let total = 1;
	for (let i = 1; i <= x; i++) {
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}