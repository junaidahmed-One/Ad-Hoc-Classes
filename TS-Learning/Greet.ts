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
