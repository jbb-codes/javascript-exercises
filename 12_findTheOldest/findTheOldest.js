function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = function (arr) {
  return arr.reduce((oldest, person) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
    return oldestAge > personAge ? oldest : person;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
