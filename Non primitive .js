/*let id =[20,21,22];
console.log(id[2]);*/
let person = {
    name: "preeti",
    age: 28,
    isEmployed: true,
};
console.log(person);
person.salary = 25000;
person.age = 29;
delete person.isEmployed;
console.log(person);
console.log(person.name);
console.log(person["age"]);