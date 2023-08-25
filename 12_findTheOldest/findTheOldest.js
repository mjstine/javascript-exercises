const findTheOldest = function (arrPeople) {
  let oldestAge = 0;
  let oldestPerson = null;
  const currentYear = new Date().getFullYear()

  arrPeople.forEach((person) => {
    const birthYear = person.yearOfBirth;
    const deathYear = person.yearOfDeath || currentYear;
    let age = deathYear - birthYear;

    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = {...person};
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
