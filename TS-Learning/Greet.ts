interface PersonGender {
	gender: string;
	orientation: string;
	pronouns: string;
}

interface PersonInterface {
	name: string;
	age: number;
	greet(): string; //interface can contain functions
	genderProps: PersonGender; //interface can use another interface
}

interface AnimalProp extends PersonInterface {
	name: string;
	furType: string;
}

//types - almost same as interface, connot be extended other types or interfaces, but internally can have types or interface
type PersonType = {
	name: string;
	age: number;
	gender: PersonGender;
};

function greetType(person: PersonType) {
	return `hi this is ${person.name} and age ${person.age} using types`;
}

console.log(greetType({ name: "Junaid", age: 90 }));
// class Person implements PersonInterface {
// 	name: string;
// 	age: number;

// 	constructor(name: string, age: number) {
// 		(this.name = name), (this.age = age);
// 	}

// 	greet() {
// 		return "Hi Mr." + this.name;
// 	}
// }

// const personObject = new Person("Junaid", 21);
