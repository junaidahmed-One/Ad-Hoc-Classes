interface Person {
	name: string;
	age: number;
}

export function greet(person: Person) {
	return `Hello ${person.name} your age is ${person.age}`;
}

console.log(greet({ name: "Junaid", age: 21 }));
