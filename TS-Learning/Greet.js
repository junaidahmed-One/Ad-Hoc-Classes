"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(person) {
    return "Hello ".concat(person.name, " your age is ").concat(person.age);
}
exports.greet = greet;
console.log(greet({ name: "Junaid", age: 21 }));
