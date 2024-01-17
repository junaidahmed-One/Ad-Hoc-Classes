interface Circle {
	radius: number;
}

interface Square {
	side: number;
}

type Shape = Circle | Square;
type Shape2 = Circle & Square;

function renderShape(shape: Shape) {
	console.log("Rendered");
}

function renderShape2(shape: Shape) {
	console.log("Rendered");
}

enum Arithmetic {
	Add,
	Sub,
	Mul,
	Div,
}

function calculate(a: number, b: number, operation: Arithmetic): number {
	if (operation === Arithmetic.Add) {
		console.log(operation); // prints the value assigned such as index, check js for the value
		return a + b;
	}
	if (operation === Arithmetic.Sub) {
		return a - b;
	}
	if (operation === Arithmetic.Mul) {
		return a * b;
	}
	if (operation === Arithmetic.Div) {
		return a / b;
	}
	return -1;
}

console.log(calculate(1, 2, Arithmetic.Add));
