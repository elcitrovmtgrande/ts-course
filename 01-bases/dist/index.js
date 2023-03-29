"use strict";
// Améliorez la syntaxe de ce code en TypeScript
const pet = {
    name: "Médor",
    age: 5,
    color: "brown",
};
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    pets: [pet],
};
function getUserFullName(u) {
    return u.firstName + " " + u.lastName;
}
function getUserNumberOfPets(u) {
    return u.pets.length;
}
function getUserPetsNames(u) {
    return u.pets.map((p) => p.name);
}
const fullName = getUserFullName(user);
