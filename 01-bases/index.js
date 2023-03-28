// Améliorez la syntaxe de ce code en TypeScript

function getUserFullName(user) {
  return user.firstName + " " + user.lastName;
}

function getUserNumberOfPets(user) {
  return user.pets.length;
}

function getUserPetsNames(user) {
  return user.pets.map((pet) => pet.name);
}

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

const fullName = getUserFullName(user);