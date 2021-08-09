const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((objSpecie) => ids.includes(objSpecie.id));
}

function getAnimalsOlderThan(animal, age) {
  let residents;
  species.forEach((objSpecies) => {
    if (animal === objSpecies.name) {
      residents = objSpecies.residents;
    }
  });
  return residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  let objResult = {};
  employees.forEach((obj) => {
    if (obj.firstName === employeeName || obj.lastName === employeeName) {
      objResult = obj;
    }
  });
  return objResult;
}

function createEmployee(personalInfo, associatedWith) {
  return ({
    ...personalInfo,
    ...associatedWith,
  });
}

function isManager(id) {
  const manager = employees.map((gerente) => gerente.managers);
  return manager.some((gerent) => gerent.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (specie !== undefined) {
    return species.find((objSpecie) => objSpecie.name === specie).residents.length;
  }
  return species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
}

function calculateEntry(entrants = 0) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultEntryPrice = Adult * prices.Adult;
  const childEntryPrice = Child * prices.Child;
  const seniorEntryPrice = Senior * prices.Senior;
  return adultEntryPrice + childEntryPrice + seniorEntryPrice;
}

function getAnimalMap(day) {
  // seu código aqui
}

function getSchedule(dayName) {
  const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

  const workDays = {};

  weekDays.forEach((day) => {
    const { open, close } = hours[day];

    if (day === 'Monday') {
      workDays[day] = 'CLOSED';
    } else {
      workDays[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (typeof dayName === 'string') {
    return { [dayName]: workDays[dayName] };
  }
  return workDays;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
